import { FaUsers } from 'react-icons/fa';

export default {
  name: 'person',
  title: 'Persons',
  type: 'document',
  icon: FaUsers,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
};
