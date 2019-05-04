import icon from 'react-icons/lib/fa/paperclip';

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
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
