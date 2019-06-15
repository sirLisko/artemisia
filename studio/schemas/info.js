import { FaPaperclip } from 'react-icons/fa';

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: FaPaperclip,
  fields: [
    {
      name: 'title',
      title: 'Title',
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
