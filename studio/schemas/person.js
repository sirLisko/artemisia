import icon from 'react-icons/lib/io/android-people';

export default {
  name: 'person',
  title: 'Persons',
  type: 'document',
  icon,
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
      type: 'blockContent',
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
