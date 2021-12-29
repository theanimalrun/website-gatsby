import * as React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/heading';
import Layout from '../components/layout';
import RichText from '../components/rich-text';
import Seo from '../components/seo';

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.excerpt.excerpt}
      />
      <Heading>{data.contentfulBlogPost.title}</Heading>
      <RichText document={data.contentfulBlogPost.content} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      content {
        raw
        references {
          __typename
          ... on ContentfulAsset {
            ...ContentfulAssetFragment
          }
        }
      }
      excerpt {
        excerpt
      }
      id
      title
    }
  }
`;
