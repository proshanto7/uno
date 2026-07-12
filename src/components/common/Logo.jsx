import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <>
      <Link href="/" className="cursor-pointer">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={111}
          height={27}
          className="w-auto h-auto"
        />
      </Link>
    </>
  );
}

export default Logo;
