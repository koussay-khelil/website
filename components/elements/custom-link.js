import Link from "next/link";
import PropTypes from "prop-types";
import { linkPropTypes } from "utils/types";

const CustomLink = ({ link, children }) => {
  const isInternalLink = link.url.startsWith('/')
  const isProducts = link.url.includes('products')
  // For internal links, use the Next.js Link component
  if (isInternalLink && !isProducts) {
    return (
      <Link href="/[[...slug]]" as={link.url}>
        <a>
          {children}
        </a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  return (
    <a
      href={link.url}
      // Change target and rel attributes is newTab is turned on
      target={link.newTab ? "_blank" : "_self"}
      rel={link.newTab ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );  
}

CustomLink.propTypes = {
  link: linkPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CustomLink;
