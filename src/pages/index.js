import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
