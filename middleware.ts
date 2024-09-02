// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const loggedIn = req.cookies.get("loggedIn");

  if (!loggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/","/Women", "/UnderstandingGDM", "/CheckYourRisk", "/About"],
};
