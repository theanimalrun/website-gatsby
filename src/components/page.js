import * as React from 'react';
import Heading from './heading';
import Layout from './layout';
import RichText from './rich-text';
import Seo from './seo';

const Page = ({ contentfulPage }) => {
  return (
    <Layout>
      <Seo title={contentfulPage.title} />
      <Heading>{contentfulPage.title}</Heading>
      <RichText document={contentfulPage.content} />
    </Layout>
  );
};

export default Page;
