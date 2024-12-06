"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  title: string;
  param: string;
};

export const NavbarItem = ({ title, param }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold ${
          (pathname === "/" && param === "fetchTopRated" && !genre) ||
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        } `}
      >
        {title}
      </Link>
    </div>
  );
};
