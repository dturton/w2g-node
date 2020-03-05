import { IOrder } from '../types';

export const w2gOrderResponse: IOrder = {
  orderId: '420949',
  referenceId: 'SO420949',
  purchaseOrderNumber: null,
  outOfRegion: false,
  skuQuantities: [
    {
      skuId: 'SKU1',
      skuName: 'SKU1',
      unitQuantity: 1,
      proofOfDelivery: 'NO',
      insuranceRequired: false,
      upc: null,
      lots: null,
    },
  ],
  companyName: 'Company name',
  address1: 'Generic Street 1',
  address2: null,
  zipCode: '94402',
  country: 'USA',
  status: 'APPROVED',
  packages: [],
  inventoryAvailable: true,
  insuredValue: 0,
  tmsInfo: null,
  warehouseFacility: {
    id: 82,
    name: 'KAYSVILLE 711',
  },
  phoneNumber: null,
  buyerEmail: '',
  city: 'San Mateo',
  state: 'CA',
  shippingSpeed: 'TWO_DAY',
};
