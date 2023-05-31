"use client";

import { useAuthContext } from "@/contexts/authContext";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default Layout;
