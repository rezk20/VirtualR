import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-neutral-950 px-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-neutral-500">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-neutral-500">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-neutral-500">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
