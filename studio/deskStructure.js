import S from '@sanity/desk-tool/structure-builder';
import { FaBullhorn, FaStripe } from 'react-icons/fa';

const hiddenTypes = ['sitePopup', 'stripeSettings', 'stripeProduct'];

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId()),
      ),
      S.listItem()
        .title('Site Popup')
        .child(
          S.editor()
            .id('sitePopup')
            .schemaType('sitePopup')
            .documentId('sitePopup'),
        )
        .icon(FaBullhorn),
      S.listItem()
        .title('Stripe Setting')
        .child(
          S.editor()
            .id('stripeSettings')
            .schemaType('stripeSettings')
            .documentId('stripeSettings'),
        )
        .icon(FaStripe),
    ]);
