import { cn } from "@/util";

import { GeistSans } from "geist/font/sans";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CSpencer Resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="grid place-items-center min-h-screen">
            <body className={cn(GeistSans.className, "bg-zinc-50")}>{children}</body>
        </html>
    );
}
