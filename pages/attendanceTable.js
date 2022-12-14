import Image from "next/image";
import Head from "next/head";
import React from "react";
import DataAttendance from "./attendanceData";


const Attendance = () => {
  return (
    <div>
      <Head>
        <title>Attendence Sheet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* gole fonts inter & roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
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
      </div>
      <div className="roboto px-[28px] py-[14px] mobile:px-[42px] mobile:py-[17px] bg-light-blue text-lg md:text-xl text-white font-semibold w-max mx-auto mt-[14px] mb-[30px]">
        Attendence information
      </div>
      <div className="pb-[30px]">
        <DataAttendance />
      </div>
    </div>
  );
};

export default Attendance;
