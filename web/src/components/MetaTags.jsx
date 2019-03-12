import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s | Artemis Midwifery`}
      meta={[
        {
          name: 'description',
          content: 'Antenatal Classes in London',
        },
        {
          property: 'og:title',
          content: 'Artemis Midwifery',
        },
        {
          property: 'og:image',
          content: '/imgs/homepage.jpg',
        },
        {
          property: 'og:description',
          content: 'Antenatal Classes in London',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: 'Artemis Midwifery',
        },
        {
          name: 'twitter:title',
          content: 'Artemis Midwifery',
        },
        {
          name: 'twitter:description',
          content: 'Antenatal Classes in London',
        },
        {
          name: 'keywords',
          content: 'midwife, antenatal, postnatal, classes, london',
        },
      ]}
    />
  );
};

MetaTags.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MetaTags;
