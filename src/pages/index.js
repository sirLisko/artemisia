import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";

const Layout = ({ data }) => {
  const { edges } = data.allPerson;
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir"
        }}
      >
        {edges.map(edge => {
          const { name, overview } = edge.node;
          return (
            <div key={name} style={{ marginBottom: "1rem" }}>
              <h3>{name}</h3>
              <div>
                {overview.map(
                  (text, i) =>
                    console.log(text) || <p key={i}>{text.children[0].text}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allPerson {
      edges {
        node {
          id
          name
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

export default Layout;
