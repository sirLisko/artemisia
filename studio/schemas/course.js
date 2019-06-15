import { FaBook } from 'react-icons/fa';

export default {
  name: 'course',
  title: 'Classes',
  type: 'document',
  icon: FaBook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_coupon',
      title: 'Price with Coupon',
      type: 'number',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'where',
      title: 'Where',
      type: 'string',
    },
    {
      name: 'when',
      title: 'When',
      type: 'string',
    },
    {
      name: 'stripeProduct',
      title: 'Stripe',
      type: 'stripeProduct',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
  },
};
