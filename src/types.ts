export type ShippingSpeed =
  | 'TWO_DAY'
  | 'ECONOMY'
  | 'NEXT_DAY'
  | 'SFP'
  | 'FREIGHT'
  | 'SP_DELIVERY'
  | 'IN_PARCEL'
  | 'IN_FREIGHT';

export type OrderStatus =
  | 'CANCELLED'
  | 'DELETED'
  | 'CREATED'
  | 'EXCEPTION'
  | 'SHIPPED'
  | 'PICKING'
  | 'PICKED'
  | 'APPROVED'
  | 'IN_TRANSIT'
  | 'DELIVERED';

export type Environment = 'stage' | 'prod';

export interface IOrder {
  orderId: string;
  referenceId: string;
  purchaseOrderNumber: null;
  outOfRegion: boolean;
  companyName: string;
  address1: string;
  address2: null;
  zipCode: string;
  skuQuantities: SkuQuantity[];
  country: string;
  status: OrderStatus;
  packages: Package[];
  inventoryAvailable: boolean;
  insuredValue: number;
  tmsInfo: null;
  warehouseFacility: WarehouseFacility;
  phoneNumber: null;
  buyerEmail: string;
  city: string;
  state: string;
  shippingSpeed: ShippingSpeed;
}

export interface IOrderCreate {
  referenceId: string;
  purchaseOrderNumber?: string;
  skuQuantities: SkuQuantity[];
  companyName: string;
  address1: string;
  address2?: any;
  zipCode: string;
  country: string;
  warehouseFacility?: WarehouseFacility;
  phoneNumber?: string;
  buyerEmail?: string;
  city: string;
  state: string;
  shippingSpeed?: string;
}

export interface SkuQuantity {
  skuId: string;
  skuName?: string;
  unitQuantity: number;
  proofOfDelivery?: string;
  insuranceRequired?: boolean;
  upc?: null;
  lots?: null;
}

export interface WarehouseFacility {
  id: number;
  name: string;
}

export interface Content {
  sku: string;
  quantity: number;
}

export interface Package {
  id: string;
  trackingNumber: string;
  status: string;
  carrierName: string;
  proofOfDelivery: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  contents: Content[];
}

export interface IW2gConfig {
  env: Environment;
  merchantId: number;
  token: string;
  secret: string;
}
