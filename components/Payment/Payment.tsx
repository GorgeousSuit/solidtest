"use client";

import { useState } from "react";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";
import Image from "@node_modules/next/image";
import Divider from "../Divider";

const Payment = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setTimeout(() => setShowSuccess(true), 2500);
  };

  return (
    <section className="">
      <div className="w-[100%] mx-auto text-center flex flex-col mb-[24px]">
        <h1 className="font-[600] text-[24px] leading-[32px]">5 days free</h1>
        <p className="font-[500] text-[14px] leading-[20px]">
          then 299.99 UAH per 14 days
        </p>
      </div>

      <div className="">
        <button className="bg-[#000000] w-full py-[14px] flex-center rounded-[3px] mb-[24px]">
          <Image
            src="/icons/apple.svg"
            alt="Image"
            width={49}
            height={20}
            className=""
            unoptimized
          />
        </button>
        <div className="flex-center">
          <Divider />
          <p className="font-[400] text-[14px] leading-[24px] text-[#666C7B] mx-[16px] text-nowrap">
            or pay with card
          </p>
          <Divider />
        </div>

        <div className="">
        <PaymentForm onSuccess={handleSuccess} />
          {showSuccess ? (
            <SuccessMessage />
          ) : null}
          
          <div className="font-[400] text-[12px] text-[#666C7B] leading-[16px] py-[12px] px-[16px] border-[1px] border-[#E4E6EC] rounded-[8px]">
            You&apos;ll have your{" "}
            <p className="font-[600]">Plan Pro during 1 year.</p> After this
            period of time, your plan will be{" "}
            <p className="font-[600]">automatically renewed</p> with its
            original price without any discounts applied.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
