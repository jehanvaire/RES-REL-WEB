"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: ReactNode;
}

const lightTheme = createTheme({ type: "light" });
const darkTheme = createTheme({ type: "dark" });

function Providers({ children }: Props) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <SessionProvider>{children}</SessionProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default Providers;
