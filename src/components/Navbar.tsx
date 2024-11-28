import { Suspense } from "react";
import { NavbarItem } from "./NavbarItem";
import LoadingPage from "@/app/loading";

export const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 p-4 gap-4 lg:text-lg">
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
};
