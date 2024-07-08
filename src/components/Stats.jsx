import React from "react";
import styles from "../style";
import { stats } from "../constants";

function Stats() {
  return (
    <section
      className={`${styles.flexCenter} w-full flex-row flex-wrap sm:mb-20 mb-6  `}
    >
      {stats.map((item, index) => (
        <div
          key={item.id}
          className={`flex-1  flex justify-start items-center flex-row m-3 text-white`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {item.value}
            {"  "}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase text-gradient">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
