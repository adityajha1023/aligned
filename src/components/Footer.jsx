import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 sm:mt-32 px-8 md:px-12 font-bricolage">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-0">
        {/* Menu */}
        <div className="flex flex-col gap-1">
          <h4 className="text-h6 font-[500] py-2">Menu</h4>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Work
          </a>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-1 sm:text-right">
          <h4 className="text-h6 font-[500] py-2">Socials</h4>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Instagram
          </a>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Email
          </a>
        </div>
      </div>

      {/* Brand */}
      <div className="flex justify-center items-center my-2">
        <h1 className="font-semibold font-cairo text-[120px] sm:text-[180px] lg:text-[250px] opacity-20">
         ALN'D
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row mb-1 justify-between items-center gap-2 sm:gap-0 text-paragraph">
        <p>©{currentYear} ALND. All rights reserved.</p>
        <p className="underline underline-offset-2">info@aligned.com</p>
      </div>
    </footer>
  );
}

export default Footer;
