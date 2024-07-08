import React from "react";
import { quotes } from "../assets";
function FeedBack({ name, content, img, title }) {
  return (
    <section className="flex justify-between flex-col px-10 py-12 rounded-[20px] feedback-card max-w-[370px] md:mr-10 sm:mr-0 my-5 ">
      <img
        src={quotes}
        alt="double quote"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 ">
        {content}
      </p>

      <div className="flex flex-row ">
        <img
          src={img}
          alt="client image"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white leading-[32px] text-[20px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-white leading-[24px] text-[16px]">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
