import { FaPencilAlt } from 'react-icons/fa';

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: FaPencilAlt,
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link_title',
      title: 'Link Title',
      type: 'string',
    },
    {
      name: 'link_url',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
};
