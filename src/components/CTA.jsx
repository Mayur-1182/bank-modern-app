import React from "react";
import styles from "../style";
import Button from "./Button";

function CTA() {
  return (
    <section
      className={` ${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business on
          the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  );
}

export default CTA;
