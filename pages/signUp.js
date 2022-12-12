import React from "react";
import Image from "next/image";
import Signform from "./signFrom";

export default function signup() {
  return (
    <div className="columns-1 md:columns-2 gap-[10px] align-middle md:flex block inter p-[20px]">
      <div>
        <div className="hidden md:block">
          <Image src={"/logo-medium.png"} width={219} height={80} alt="medium-logo"></Image>
        </div>
        <div className="block md:hidden">
          <Image
            
            src={"/logo-small.png"}
            width={104}
            height={38}
            alt="small-logo"
          ></Image>
        </div>
        <div className="mb-[20px]">
          <Image
            className="w-10/12 md:w-full mx-auto"
            src={"/istockphoto-1321277096-612x612 1.png"}
            width={612}
            height={437}
            alt="image-main"
          ></Image>
        </div>
      </div>
      <div className="w-12/12 mobile:w-10/12 md:w-8/12 lg:w-5/12 xl:w-5/12 mx-auto my-auto md:pt-0 min-h-[500px] md:h-[calc(100vh-40px)] flex align-middle justify-center flex-col shadow-xl inter">
      <div className="secondary-heading text-center pb-[60px] pt-[30px]">SignUp form</div>
        <Signform/>
      </div>
    </div>
  );
}
