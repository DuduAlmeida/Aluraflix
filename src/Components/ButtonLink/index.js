import React from 'react';

function ButtonLink({ className, href, children }) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  
  ButtonLink.defaultProps = {
    href: '/',
    className: '',
  };
  
//   ButtonLink.propTypes = {
//     className: PropTypes.string,
//     href: PropTypes.string,
//     children: PropTypes.node.isRequired,
//   };
  

export default ButtonLink;