import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/page';

const PageTemplate = ({ data }) => {
  return <Page contentfulPage={data.contentfulPage} />;
};

export default PageTemplate;

export const contentfulPageFragment = graphql`
  fragment ContentfulPageFragment on ContentfulPage {
    content {
      raw
      references {
        __typename
        ... on ContentfulAsset {
          ...ContentfulAssetFragment
        }
        ... on ContentfulImage {
          contentful_id
          image {
            ...ContentfulAssetFragment
          }
          title
          url
        }
      }
    }
    slug
    title
  }
`;

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      ...ContentfulPageFragment
    }
  }
`;
