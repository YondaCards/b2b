"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/locales";

// GitHub Pages serves static files with no server, so the proxy-based
// locale redirect (src/proxy.ts) can't run for the bare "/" path there.
// This plain client redirect covers that case; the proxy still handles
// every other unprefixed path on hosts that do run it.
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return null;
}
