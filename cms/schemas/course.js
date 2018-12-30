import icon from 'react-icons/lib/io/ios-book';

export default {
  name: 'course',
  title: 'Classes',
  type: 'document',
  icon,
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
      type: 'blockContent',
    },
    {
      name: 'price',
      title: 'Price',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
  },
};