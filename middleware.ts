import { NextRequest, NextResponse } from 'next/server';

import middleware from 'next-auth/middleware';
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }
export default middleware;
export const config = {
  // Zero or more paramaters of /users/:id, or more /:
  matcher: ['/users/:id*'],
};
