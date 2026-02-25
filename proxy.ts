import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "dashboard_auth";
const LOGIN_PATH = "/dashboard/login";
const DASHBOARD_PREFIX = "/dashboard";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(DASHBOARD_PREFIX)) {
    return NextResponse.next();
  }

  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(COOKIE_NAME);
  if (
    authCookie?.value &&
    authCookie.value === process.env.DASHBOARD_PASSWORD
  ) {
    return NextResponse.next();
  }

  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
