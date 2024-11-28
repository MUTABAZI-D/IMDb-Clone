"use client";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};
export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};