import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './link';

const Navigation = () => {
  const { contentfulNavigation, contentfulNavigationLogo, contentfulNavigationButton } = useStaticQuery(graphql`
    query {
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
      contentfulNavigationButton {
        navigationButtonText
        navigationButtonLink
      }
    }
  `);

  return (
    <header className="bg-purple mb-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              {!contentfulNavigationLogo.logoFile.gatsbyImageData ? 
                <img className="h-10 w-10" src={contentfulNavigationLogo.logoFile.file.url} alt={contentfulNavigationLogo.title} />
                :
                <GatsbyImage className="h-10 w-10" image={contentfulNavigationLogo.logoFile.gatsbyImageData} alt={contentfulNavigationLogo.title} />
              }
              <span className="font-bold text-white text-3xl tracking-tight leading-relaxed wordmark">Animal Run</span>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block grow items-center">
            {contentfulNavigation.navigationItems.map((item, i) => (
              <Link
                className="text-lg text-white hover:text-indigo-50"
                to={item.slug ? `/${item.slug}` : item.url}
                key={i}
              >
                {item.title}
              </Link>
            ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              to={ contentfulNavigationButton.navigationButtonLink }
            >
              { contentfulNavigationButton.navigationButtonText }
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        {contentfulNavigation.navigationItems.map((item, i) => (
          <Link
            className="text-base font-medium text-white hover:text-indigo-50"
            to={item.slug ? `/${item.slug}` : item.url}
            key={i}
          >
            {item.title}
          </Link>
        ))}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
