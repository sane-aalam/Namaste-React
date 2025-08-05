import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm m-4  dark:bg-zinc-200">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-zinc-900 sm:text-center dark:text-zinc-800">
          ©2023{" "}
          <Link href="http://localhost:1234/" class="hover:underline">
            SwiftyEats™
          </Link>{" "}
          .All Rights Reserved.
        </span>
        <div class="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-800 sm:mt-0">
          <Link to="/" class="hover:underline me-4 md:me-6">
            Home
          </Link>
          <Link to="/about" class="hover:underline me-4 md:me-6">
            About
          </Link>
          <Link to="/contact" class="hover:underline me-4 md:me-6">
            Contact us
          </Link>
          <Link href="/grocery" class="hover:underline">
            Grocery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
