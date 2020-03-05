import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IOrder, IW2gConfig, Environment, IOrderCreate, OrderStatus } from './types';

export default class W2g {
  private api: AxiosInstance;
  private config: AxiosRequestConfig;
  private w2gEnv: Environment;

  public constructor(w2gConfig: IW2gConfig, config?: AxiosRequestConfig) {
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
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        throw error;
      },
    );
  }

  public async get(path: string): Promise<AxiosResponse> {
    const { data: matches }: AxiosResponse = await this.api.get(path);
    return matches;
  }

  public async getOrder(orderId: number): Promise<IOrder> {
    const response: AxiosResponse = await this.api.get(`orders/${orderId}`);
    const order: IOrder = response.data;
    return order;
  }

  public async postOrder(order: IOrderCreate): Promise<IOrder> {
    const response: AxiosResponse = await this.api.post(`orders`, order);
    const orderResponse: IOrder = response.data;
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
