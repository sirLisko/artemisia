import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import metaTags from 'src/meta-tags';

const MetaTags = ({ location: { pathname } = {} }) => {
  let meta = metaTags.metaTags.find(mt => mt.url === pathname);
  if (!meta) {
    meta = metaTags.default;
  }
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </Helmet>
  );
};

MetaTags.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default MetaTags;
