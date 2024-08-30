import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Ignite Your Child&apos;s Entrepreneurial Spirit?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Join the waitlist and you&apos;ll be the first to know when we announce our 2025 camps
        </p>
        <a href="https://docs.google.com/forms/d/17EUTo3njCTmOy4qr_1nqgLtrrCzWmRS48QWxx3teTm8" target="_blank">
          <MagicButton
            title="Join Waitlist"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Venture Camp
        </p>
        <br className="block md:hidden" />
        <p className="md:text-base text-sm md:font-normal font-light">
          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/saad-equbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 "
            style={{
              color: 'white',
              textDecoration: 'underline',
              transition: 'color 0.3s',
            }}
          >
            Saad Syed
          </a>
        </p>
        <br />
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;