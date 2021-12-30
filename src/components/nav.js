import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Container from './container';
import Link from './link';

const Navigation = () => {
  const [menuHidden, setMenuHidden] = React.useState(true);
  const { contentfulNavigation, site, contentfulNavigationLogo } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      contentfulNavigation(slug: { eq: "header-navigation" }) {
        navigationItems {
          __typename
          ... on ContentfulNavigationItem {
            contentful_id
            title
            url
          }
          ... on ContentfulPage {
            contentful_id
            slug
            title
          }
        }
      }
      contentfulNavigationLogo {
        contentful_id
        title
        logoFile {
          gatsbyImageData
          file {
            url
          }
        }
      }
    }
  `);

console.log(contentfulNavigationLogo.logoFile.gatsbyImageData);
  return (
    <header class="bg-purple mb-4">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div class="flex items-center">
            <a href="/">
              {!contentfulNavigationLogo.logoFile.gatsbyImageData ? 
                <img class="h-10 w-10" src={contentfulNavigationLogo.logoFile.file.url} alt={contentfulNavigationLogo.title} />
                :
                <GatsbyImage class="h-10 w-10" image={contentfulNavigationLogo.logoFile.gatsbyImageData} alt={contentfulNavigationLogo.title} />
              }
              <span class="font-bold text-white text-3xl tracking-tight leading-relaxed wordmark">Animal Run</span>
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
                Solutions
              </a>

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
                Pricing
              </a>

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
                Docs
              </a>

              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Company">
                Company
              </a>
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
          </div>
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
            Solutions
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
            Pricing
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
            Docs
          </a>

          <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Company">
            Company
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
