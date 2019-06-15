export default {
  name: 'stripeSettings',
  type: 'document',
  fields: [
    {
      name: 'apikey',
      title: 'API key',
      type: 'string',
    },
    {
      name: 'checkout_visible',
      title: 'Checkout visible',
      type: 'boolean',
    },
    {
      name: 'coupon',
      title: 'Coupon',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Stripe Settings',
      };
    },
  },
};
