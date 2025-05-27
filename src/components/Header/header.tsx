"use client";
import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Home", href: "/" },
  { name: "Home", href: "/" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, i) => (
            <div key={i}>
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href={"auth/sign-in"}>
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
