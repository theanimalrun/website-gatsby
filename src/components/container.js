import * as React from 'react';

const Container = ({ as = 'div', children, className, ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={`max-w-screen-lg mx-auto px-4 lg:px-0 w-full ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
