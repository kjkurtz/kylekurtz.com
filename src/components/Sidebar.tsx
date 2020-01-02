import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-10 w-1/3 flex-none">
      <div className="flex flex-col">
        <a href="/" className="no-underline">
          <img
            className="h-10 w-10 m-2 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
            src="https://avatars2.githubusercontent.com/u/6036168?v=4"
          />
        </a>
        <a
          href="/"
          className="text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight m-2"
        >
          Kyle Kurtz
        </a>
        <div className="hidden md:flex md:flex-col mt-3 lg:mt-4 uppercase tracking-wide text-s">
          <a
            href="/articles"
            className="text-grey-dark font-semibold no-underline hover:text-black m-2"
          >
            Articles
          </a>
          <a
            href="/projects"
            className="text-grey-dark font-semibold no-underline hover:text-black m-2"
          >
            Projects
          </a>
          <a
            href="/about"
            className="text-grey-dark font-semibold no-underline hover:text-black m-2"
          >
            About Me
          </a>
          <a
            href="/uses"
            className="text-grey-dark font-semibold no-underline hover:text-black m-2"
          >
            Uses
          </a>
        </div>
      </div>
      <div className="flex flex-row">
        <a
          className="p-2"
          href="https://www.twitter.com/kurtzk"
          target="_blank"
        >
          <img
            className="h-12 w-12"
            src="data:image/svg+xml;base64,PHN2ZyBpZD0idHdpdHRlci1pY29uIiByb2xlPSJpbWciIGRhdGEtbmFtZT0iVHdpdHRlciBJY29uIiAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMWRhMWYyO308L3N0eWxlPgogIDwvZGVmcz4KICA8dGl0bGU+VHdpdHRlcl9Mb2dvX0JsdWU8L3RpdGxlPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNTMuNjIsMzAxLjU5Yzk0LjM0LDAsMTQ1Ljk0LTc4LjE2LDE0NS45NC0xNDUuOTQsMC0yLjIyLDAtNC40My0uMTUtNi42M0ExMDQuMzYsMTA0LjM2LDAsMCwwLDMyNSwxMjIuNDdhMTAyLjM4LDEwMi4zOCwwLDAsMS0yOS40Niw4LjA3LDUxLjQ3LDUxLjQ3LDAsMCwwLDIyLjU1LTI4LjM3LDEwMi43OSwxMDIuNzksMCwwLDEtMzIuNTcsMTIuNDUsNTEuMzQsNTEuMzQsMCwwLDAtODcuNDEsNDYuNzhBMTQ1LjYyLDE0NS42MiwwLDAsMSw5Mi40LDEwNy44MWE1MS4zMyw1MS4zMywwLDAsMCwxNS44OCw2OC40N0E1MC45MSw1MC45MSwwLDAsMSw4NSwxNjkuODZjMCwuMjEsMCwuNDMsMCwuNjVhNTEuMzEsNTEuMzEsMCwwLDAsNDEuMTUsNTAuMjgsNTEuMjEsNTEuMjEsMCwwLDEtMjMuMTYuODgsNTEuMzUsNTEuMzUsMCwwLDAsNDcuOTIsMzUuNjIsMTAyLjkyLDEwMi45MiwwLDAsMS02My43LDIyQTEwNC40MSwxMDQuNDEsMCwwLDEsNzUsMjc4LjU1YTE0NS4yMSwxNDUuMjEsMCwwLDAsNzguNjIsMjMiLz4KPC9zdmc+"
          />
        </a>
        <a className="p-2" href="https://www.github.com/1marc" target="_blank">
          <img
            className="h-12 w-12"
            src="data:image/svg+xml;base64,PHN2ZyBpZD0iZ2l0aHViLWljb24iIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0IiAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDx0aXRsZSBpZD0ic2ltcGxlaWNvbnMtZ2l0aHViLWljb24iPkdpdEh1YiBpY29uPC90aXRsZT4KICA8cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+Cjwvc3ZnPg=="
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
