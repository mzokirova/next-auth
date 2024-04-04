import {Poppins} from "next/font/google";
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';
import { Button } from "@/components/ui/button";
const font=Poppins({
  subsets:["latin"],
  weight:["600"]
})
export default async function Home() {
  return (
   <main className='flex h-full flex-col item-center justify-center bg-sky-400'>
<div className='space-y-6'>
<h1  className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
  Auth
</h1>
<p className="text-white text-lg">
          A simple authentication service
        </p>
<div>
  <LoginButton asChild>

  <Button variant="secondary" size="lg">
    Sign in
  </Button>
  </LoginButton>
</div>

</div>

   </main>

  );
}
