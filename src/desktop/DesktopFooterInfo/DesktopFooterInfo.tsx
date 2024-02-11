'use client'

import React from "react";
import { footerInfo, mail } from "./styles";

interface DesktopFooterInfoProps {
  mailLink: string;
  mailText: string;
  copyright: string;
}

export function DesktopFooterInfo({
  mailLink,
  mailText,
  copyright,
}: DesktopFooterInfoProps) {
  const link = `mailto:${mailLink}`;

  return (
    <div className={footerInfo}>
      <a className={mail} href={link}>
        {mailText}
      </a>
      <span className={copyright}>{copyright}</span>
    </div>
  );
}
