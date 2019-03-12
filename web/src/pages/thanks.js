import React from 'react';

import MetaTags from 'src/components/MetaTags';
import Layout from 'src/components/Layout';

const Index = () => {
  return (
    <Layout>
      <MetaTags title="Thanks" />
      <h1>Thanks</h1>
      <p>We will be in touch as soon as we can :)</p>
      <img
        style={{ marginTop: '5rem' }}
        src="/imgs/all.png"
        alt="all together"
      />
    </Layout>
  );
};

export default Index;
