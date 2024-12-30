import Image from "next/image";
import React from "react";
import logo from "../../assests/pngimages/Worthylogo.jpg";

const ReasonCard = () => {
  return (
    <div className="flex flex-col gap-2 justify-center p-2 ">
      <div className="w-20 h-20 items-start ">
        <Image src={logo} alt="" width={256} height={256} className="rounded-md" />
      </div>
      <div className="text-[20px] font-bold  text-[#40348C]">
        A little about Me :)
      </div>
      <div className="text-[16px] ">
        This project focuses on enhancing the user experience of Flipkart,
        India’s leading e-commerce platform, by identifying pain points and
        delivering an intuitive design solution. The primary objectives include
        streamlining the navigation flow.
      </div>
    </div>
  );
};

export default ReasonCard;