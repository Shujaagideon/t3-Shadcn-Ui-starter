/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BellRing, Check } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
// import { Separator } from "~/components/ui/separator"
import { Switch } from "~/components/ui/switch"
import CreateAccount from "~/components/cards/authentication"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

const CardDemo = ({ className, ...props }: CardProps)=>{
  return (
    <>
      <main className="h-screen w-full flex justify-center items-center">
        <CreateAccount/>
      </main>
    </>
  )
}

export default CardDemo;