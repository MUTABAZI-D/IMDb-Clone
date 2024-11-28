"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  address: string;
  title: string;
  children: React.ReactNode;
};

export const MenuItem = ({ address, title, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === address;
  return (
    <Link
      href={address}
      className={`hover:text-amber-500 ${
        isActive
          ? "text-amber-500 font-bold"
          : "text-gray-900 hover:text-amber-500"
      }`}
    >
      {children}
      <p className="hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};
