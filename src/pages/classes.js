import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'src/components/Layout';

const Index = ({ data }) => {
  const { edges } = data.allCourse;
  return (
    <Layout>
      {edges.map(edge => {
        const { title, overview, image, link_title, link_url } = edge.node;
        console.log(image);
        return (
          <div key={title} style={{ marginBottom: '1rem' }}>
            <h3>{title}</h3>
            {image && image.imageUrl && <img src={image.imageUrl} alt="" />}
            <div>
              {overview.map((text, i) => (
                <p key={i}>{text.children[0].text}</p>
              ))}
            </div>
            {link_title && <Link to={link_url}>{link_title}</Link>}
          </div>
        );
      })}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allCourse {
      edges {
        node {
          title
          overview {
            style
            children {
              text
            }
          }
        }
      }
    }
  }
`;

export default Index;
