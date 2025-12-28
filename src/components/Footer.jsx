import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 sm:mt-32 px-4 sm:px-8 font-bricolage">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-0">
        {/* Menu */}
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold py-2">Menu</h4>
          <a href="#" className="opacity-70 hover:opacity-100 transition">
            Work
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-1 sm:text-right">
          <h4 className="font-semibold py-2">Socials</h4>
          <a href="#" className="opacity-70 hover:opacity-100 transition">
            Instagram
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition">
            Email
          </a>
        </div>
      </div>

      {/* Brand */}
      <div className="flex justify-center items-center my-10 sm:my-14">
        <h1 className="font-semibold text-[120px] sm:text-[180px] lg:text-[250px] opacity-10 leading-none">
          alnd.
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm sm:text-base">
        <p>©{currentYear} ALND. All rights reserved.</p>
        <p>info@aligned.com</p>
      </div>
    </footer>
  );
}

export default Footer;
