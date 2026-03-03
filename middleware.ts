import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["de", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow next internals/static
  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon") || pathname.startsWith("/public")) {
    return NextResponse.next();
  }

  // If already prefixed with a supported locale, continue
  const hasLocale = SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Redirect everything else to /de + original path
  const url = req.nextUrl.clone();
  url.pathname = `/de${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api).*)"]
};
