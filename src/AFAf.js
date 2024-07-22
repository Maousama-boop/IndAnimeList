import { NextResponse } from 'next/server';
import { authUsserSession } from './libs/auth-libs';

export async function middleware(request) {
  try {
    const user = await authUsserSession(request);

    if (!user) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.error();
  }
}

export async function authUsserSession(request) {
  const user = request.session?.user;
  return user;
}

export const config = {
  matcher: '/users/:path*',
};
