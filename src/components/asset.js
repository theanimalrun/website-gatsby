import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const Asset = ({ gatsbyImageData, file, title }) => {
  return gatsbyImageData ? (
    <GatsbyImage image={gatsbyImageData} alt={title} />
  ) : (
    <img src={file.url} alt={title} />
  );
};

export const contentfulAssetFragment = graphql`
  fragment ContentfulAssetFragment on ContentfulAsset {
    contentful_id
    file {
      url
    }
    gatsbyImageData
    title
  }
`;

export default Asset;
