import { SunIcon } from "../svg/SunIcon";
import { Zuraas } from "../svg/Zuraas";

export const Header = () => {
  return (
    <div className="container md:w-[1440px] md:h-[68px] md:py-4 md:px-20">
      <div className="container md:w-full md:h-[32px] md:py-4 md:px-20 flex justify-between md:justify-between items-center">
        <div className="flex w-full">
          <img src="Tom.png" alt="" />
        </div>
        <div className="md:flex justify-center items-center gap-6 hidden">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="w-[1px] h-[24px] bg-[#F3F4F6]"></div>
          <div className="flex justify-center items-center gap-4 w-[188px] h-[36px] ml-3">
            <SunIcon />
            <p className="flex px-4 py-[6px] bg-[#111827] text-[#F9FAFB] rounded-xl text-base font-medium">
              Download CV
            </p>
          </div>
        </div>
        <div className=" md:hidden  ">
          <Zuraas />
        </div>
      </div>
    </div>
  );
};
