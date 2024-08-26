import { IconTwitter } from "../icons/hero/IconTwitter";
import { IconCat, IconFigma, LocationIcon } from "../icons/Index";

export const Hero = () => {
  return (
    <div className="max-w-[1280px] m-auto w-full h-auto grid grid-cols-2 border-2 border-solid border-blue-500 gap-12 px-8 py-24 justify-between">
      <div className="flex flex-col gap-12">
        <div className="gap-2">
          <div className="w-[376px] h-[72px]">
            <img src="/Text.png" alt="" />
          </div>
          <div className="text-[#4B5563]">
            <p className="text-justify pt-2">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <LocationIcon />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-2">
            <img src="/icon.png" alt="" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex px-[6px] gap-3">
          <IconCat />
          <IconTwitter />
          <IconFigma />
        </div>
      </div>
      <div className="container flex w-full flex-col justify-center items-end ">
        <img
          src="/Pic.png"
          alt=""
          className="w-[280px] h-[320px] border-8 border-solid rounded "
        />
      </div>
    </div>
  );
};
