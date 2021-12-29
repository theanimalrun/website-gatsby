import * as React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Asset from './asset';

const options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const target = node.data.target;
      switch (target.__typename) {
        case 'ContentfulImage':
          return (
            <a href={target.url}>
              <Asset {...target.image} />
            </a>
          );
        default:
          return null;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => <Asset {...node.data.target} />,
  },
};

const RichText = ({ document, renderOptions }) => {
  return (
    <div className="prose mx-auto max-w-screen-lg">
      {renderRichText(document, Object.assign({}, options, renderOptions))}
    </div>
  );
};

export default RichText;
