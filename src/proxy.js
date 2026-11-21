import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return NextResponse.redirect(
            new URL('/signin', request.url)
        );
    }

    if (
        request.nextUrl.pathname.startsWith('/admin') &&
        session.user.role !== 'admin'
    ) {
        return NextResponse.redirect(
            new URL('/', request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/donors/:path+',
        '/blogpost',
        '/admin/:path*'
    ],
};