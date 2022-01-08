import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { get } from 'lodash';
//import Page from '../components/page';
import Heading from '../components/heading';
import Layout from '../components/layout';
import Seo from '../components/seo';
import RichText from '../components/rich-text';
import Video from "../components/video"
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IndexPage = () => {
  const { contentfulHomePage } = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        id
        siteTitle
        heroTagline
        heroHeadline
        heroParagraph {
          heroParagraph
        }
        heroCtaText
        heroCtaLink
        heroVideoUrl
        heroImage {
          description
          gatsbyImageData
          file {
            url
          }
        }
        aboutUs {
          aboutUsSectionTitile
          aboutUsSectionContent{
            raw
          }
        }
        leadershipTeam {
          teamMemberBio {
            teamMemberBio
          }
          teamMemberName
          teamMemberTitle
          teamMemberPhoto {
            description
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Animal Run" />
      <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-1 sm:px-6 lg:mt-3">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  {contentfulHomePage.heroTagline}
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">{contentfulHomePage.heroHeadline}</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {contentfulHomePage.heroParagraph.heroParagraph}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Link className="bg-purple hover:bg-gray-900 text-white text-center py-2 px-4 rounded" to="{contentfulHomePage.heroCtaLink}">
                  {contentfulHomePage.heroCtaText}
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            { contentfulHomePage.heroVideoUrl != 'novideo'
              ?  <Video
                  videoSrcURL={contentfulHomePage.heroVideoUrl}
                  videoTitle="Animal Run"
                />
              : <GatsbyImage className="h-10 w-10" image={contentfulHomePage.heroImage.gatsbyImageData} alt={contentfulHomePage.heroImage.description} />
            }
            </div>
          </div>
          <div className="relative mt-10 bg-gray-50" id="about">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center">
              <h2 className="px-3 bg-gray-50 text-2xl text-gray-900">About Us</h2>
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {contentfulHomePage.aboutUs.map((aboutUsSection) => (
                    <Disclosure as="div" key={aboutUsSection.aboutUsSectionTitile} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                              <span className="font-medium text-gray-900">{aboutUsSection.aboutUsSectionTitile}</span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <RichText document={aboutUsSection.aboutUsSectionContent} />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="relative mt-10" id="team">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <h2 className="px-3 bg-white text-2xl text-gray-900">Our Team</h2>
            </div>
          </div>
           <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-12">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>
                <ul
                  role="list"
                  className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                >
                  {contentfulHomePage.leadershipTeam.map((teamMember) => (
                    <li key={teamMember.teamMemberName}>
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                        <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                          <img className="object-cover shadow-lg rounded-lg" src={teamMember.imageUrl} alt="" />
                          <GatsbyImage className="h-10 w-10" image={teamMember.teamMemberPhoto.gatsbyImageData} alt={teamMember.teamMemberPhoto.description} />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3>{teamMember.teamMemberName}</h3>
                              <p className="text-indigo-600">{teamMember.teamMemberTitle}</p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-500">{teamMember.teamMemberBio.teamMemberBio}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </main>
    </Layout>
  );
};


export default IndexPage;
