"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";

import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
    return (
      <section
        id="contact"
        className="flex flex-col items-center justify-center my-12 py-24 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10 text-center max-w-lg mx-4">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-wrap justify-center gap-2">
            <Link href="https://github.com/dhruvi0105">
              <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/dhruvi-rank-a38876253/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
            </Link>
            <Link href="mailto:dhruvirank2005@gmail.com">
              <Image src={GmailIcon} alt="Gmail Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/dhruvi_rank?igsh=dTFycnRkMGhzMW44">
              <Image src={InstagramIcon} alt="Instagram Icon" width={40} height={40} />
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default EmailSection;
  
