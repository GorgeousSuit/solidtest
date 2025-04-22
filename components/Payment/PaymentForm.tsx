"use client";

import { useState } from "react";

interface Props {
  onSuccess: () => void;
}

export default function PaymentForm({ onSuccess }: Props) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      setError("Invalid card number");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiration)) {
      setError("Invalid expiration");
      return;
    }

    if (!/^\d{3}$/.test(cvc)) {
      setError("Invalid CVC");
      return;
    }

    setError("");
    setTimeout(() => onSuccess(), 500);
  };

  const formatCardNumber = (value: string) =>
    value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[12px] w-full mb-[16px]"
    >
      <label className="label">
        Card Number
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          maxLength={19}
          className="formfield"
          placeholder="1234 1234 1234 1234"
        />
      </label>

      <div className="flex gap-[8px] w-full">
        <label className="label flex-1">
          Expiration Date
          <input
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            placeholder="MM/YY"
            className="formfield"
          />
        </label>
        <label className="label flex-1">
          CVC
          <input
            type="password"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="•••"
            className="formfield"
          />
        </label>
      </div>

      {error && <p className="text-[red]">{error}</p>}

      <button
        type="submit"
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 3000);
        }}
        className={`btn relative ${loading ? 'translate-y-[-2px] bg-[#028837]' : 'bg-[#02742F] translate-y-[0px]'}`}
      >
        <span
          className={`transition-all duration-[120ms] ease-out
          ${
            loading ? "opacity-0 translate-y-[16px]" : "opacity-100 translate-y-[0px]"
          }`}
        >
          Start Trial
        </span>
	   <span
        className={`font-[600] text-[16px] leading-[24px] absolute inset-[12px] transition-all duration-[120ms] ease-out text-nowrap
          ${loading ? 'opacity-100 translate-y-[0px]' : 'opacity-0 translate-y-[16px]'}`}
      >
		<div className="absolute top-[0px] left-[calc(50%-115px)] spinner"></div>
        Processing payment
      </span>
      </button>
    </form>
  );
}
