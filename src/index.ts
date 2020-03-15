import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Types from './types';
export default class W2g {
  private api: AxiosInstance;
  private config: AxiosRequestConfig;
  private w2gEnv: Types.Environment;

  public constructor(w2gConfig: Types.IW2gConfig, config?: AxiosRequestConfig) {
    this.w2gEnv = w2gConfig.env;
    this.config = {
      baseURL: this.getBaseUrl(w2gConfig.merchantId),
      auth: {
        username: w2gConfig.token,
        password: w2gConfig.secret,
      },
    };

    this.api = axios.create(this.config);

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }

  public async get(path: string): Promise<AxiosResponse> {
    const { data: matches }: AxiosResponse = await this.api.get(path);
    return matches;
  }

  public async getOrder(orderId: number): Promise<Types.IOrder> {
    const response: AxiosResponse = await this.api.get(`orders/${orderId}`);
    const order: Types.IOrder = response.data;
    return order;
  }

  public async postOrder(order: Types.IOrderCreate): Promise<Types.IOrder> {
    const response: AxiosResponse = await this.api.post(`orders`, order);
    const orderResponse: Types.IOrder = response.data;
    return orderResponse;
  }

  private getBaseUrl(merchandId: number): string {
    const baseUrl: string =
      this.w2gEnv === 'prod'
        ? `https://openapi.ware2go.co/ware2go/v1/merchants/${merchandId}`
        : `https://openapi.staging.ware2goproject.com/ware2go/v1/merchants/${merchandId}`;
    return baseUrl;
  }
}

export { Types };
