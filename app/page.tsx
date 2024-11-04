"use client";
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { useCallback, useState } from "react";
import {signIn} from "next-auth/react";
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react";

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const login = useCallback(async() => {
    try{
      await signIn('credentials', {username, password});
    }catch(error){
      console.log(error);
    }
  }, [username, password]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a href='/iletisim'>
              <p>
                İLETİŞİM
              </p>
            </a>
          </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <Input  onChange={(ev:any) => {setUsername(ev.target.value)}}
                value={username}
                className='p-3'
                type='text'
                id='username'
                />
        <Input  onChange={(ev:any) => {setPassword(ev.target.value)}}
                value={password}
                type='text'
                id='password'/>
        <Button variant="outline"
                onClick={login}>Login</Button>
        <Button variant="outline"
                onClick={() => signOut()}>Sign Out</Button>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">


      </div>
    </main>
  )
}
