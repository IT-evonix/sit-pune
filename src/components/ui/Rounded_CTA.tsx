import React from 'react'
import Link from "next/link";

const Rounded_CTA = ({
  label= "",
  link = "",
  bgColor = "",
  textColor = "#10467F",
  borderColor = "#10467F",
}) => {
  return (
    <Link href={link}>
      <button
        style={{
          backgroundColor: bgColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
        }}
        className="rounded-pill px-4 py-2 transition rounded_cta"
      >
        {label}
      </button>
    </Link>
  );
};

export default Rounded_CTA;
