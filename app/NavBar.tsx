'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  //
  // useSession = React Hook that gives you access to the logged in user's session data.
  const { status, data: session } = useSession();

  // if (status === 'loading') return null;

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link className="mr-5" href={'/'}>
        Next.js
      </Link>
      <Link className="mr-5" href={'/users'}>
        Users
      </Link>
      {/* {status === 'loading' && <div>Loading...</div>} */}

      {status === 'authenticated' && <div>
        {session.user?.name}
        <Link className='ml-3' href={'/api/auth/signout'}>Logout</Link>
        </div>}
      {status === 'unauthenticated' && (
        <Link className="mr-5" href={'/api/auth/signin'}>
          Sign in
        </Link>
      )}
    </div>
  );
};

export default NavBar;
