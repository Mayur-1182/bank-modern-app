import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse} relative`}>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={bill}
          alt="bill image"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className=" absolute  z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className=" absolute  z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div />
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily Control your
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className=" flex flex-row flex-wrap sm:mt-10 mt-6 gap-4">
          <img
            src={google}
            alt="google play store"
            className="w-[128px] h-[42px]"
          />
          <img
            src={apple}
            alt="app play store"
            className="w-[128px] h-[42px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
