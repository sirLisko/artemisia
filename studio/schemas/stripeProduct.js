export default {
  name: 'stripeProduct',
  type: 'document',
  fields: [
    {
      name: 'sku',
      title: 'Product sku',
      type: 'string',
    },
    {
      name: 'sku_coupon',
      title: 'Product sku - Coupon',
      type: 'string',
    },
  ],
};
