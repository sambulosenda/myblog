import React, { useState } from "react";

import siteMetadata from "../../data/siteMetadata";
import headerNavigationLinks from "../../data/headerNavigationLinks";
import Link from "../Link/Link"
import MobileNav from "../MobileNavigation/MobileNav";


function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between py-10">
        <div>
          <Link href="/" aria-label="Tailwind CSS Blog">
            <div className="flex items-center justify-between">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavigationLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"

              >
                {link.title}
              </Link>
            ))}
          </div>
        <MobileNav />
        </div>
      </header>
    </div>
  );
}
export default Navbar;
