import { FaBullhorn } from 'react-icons/fa';

export default {
  name: 'sitePopup',
  title: 'Site Popup',
  type: 'document',
  liveEdit: false,
  icon: FaBullhorn,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    },
  ],
};
