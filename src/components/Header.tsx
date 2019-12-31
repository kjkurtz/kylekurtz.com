import React from 'react';

const Header = () => {
  return (
    <div className="relative z-20 flex justify-between items-center">
      <div className="flex md:block lg:flex items-center max-w-full">
        <a href="/" className="flex items-center no-underline">
          <img
            className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
            src="https://avatars2.githubusercontent.com/u/6036168?v=4"
          />
        </a>
        <div>
          <a
            href="/"
            className="bloLack text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight mr-6"
          >
            Kyle Kurtz
          </a>
        </div>
        <div className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs">
          <a
            href="/articles"
            className="text-grey-dark  font-semibold no-underline hover:text-black mr-6"
          >
            Articles
          </a>
          <a
            href="/projects"
            className="text-grey-dark  font-semibold no-underline hover:text-black mr-6"
          >
            Projects
          </a>
          <a
            href="/journal"
            className="text-grey-dark  font-semibold no-underline hover:text-black"
          >
            Journal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
