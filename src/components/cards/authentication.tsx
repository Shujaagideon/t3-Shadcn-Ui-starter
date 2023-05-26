/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
// import { Input } from "~/components/ui/input"
// import { Label } from "~/components/ui/label"
import {signIn, signOut, useSession} from 'next-auth/react'
import { Icons } from "~/components/ui/icons"

const CreateAccount = ()=>{
    const {data:session} = useSession();

    if(session){
        return<></>;
    }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Create an account</CardTitle>
        <CardDescription className="text-center">
          Choose a provider below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" onClick={()=>signIn('github')}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" onClick={()=>signIn('google')}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
  )
}

export default CreateAccount