'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <>
      <div class=" bg-white  flex flex-col justify-center items-center ">
        <div class="flex items-center justify-center ">
          <div class=" relative flex text-left dropdown ">
            <button class="inline-flex justify-center items-center w-full text-sm font-medium leading-5 text-gray-700 transition  duration-150 ease-in-out bg-white focus:border-blue-300 rounded-full hover:ring-2 hover:ring-violet-30 focus:ring-4 focus:ring-violet-300"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                <img className="inline w-8 h-8 lg:w-10 lg:h-10 rounded-full" src={user.picture} alt="user photo"/>
              </button>

            <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div class="absolute right-0 w-56 mt-2 origin-top-right top-10 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                <div class="px-4 py-3">
                  <p class="text-sm leading-5">{user.name}</p>
                  <p class="text-sm font-medium leading-5 text-gray-900 truncate">{user.email}</p>
                </div>
                <div class="py-1">
                  <Link href="javascript:void(0)" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-slate-100" role="menuitem" >Account settings</Link>
                </div>
                <div class="py-1">
                  <Link href="/api/auth/logout" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-slate-100" role="menuitem" >Sign out</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>

    )
  );
}