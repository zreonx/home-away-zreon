import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher([
//   '/bookings(.*)',
//   '/checkout(.*)',
//   '/favorites(.*)',
//   '/profile(.*)',
//   '/rentals(.*)',
//   '/reviews(.*)',
// ]);

const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // if (isProtectedRoute(req)) auth().protect();
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
