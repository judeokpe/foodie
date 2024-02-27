'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowBigRight } from "lucide-react"
import Link from "next/link"
import { BsGoogle } from "react-icons/bs"

const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Username must be at least 8 characters.",
    }),
  })

const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })

      const onSubmit = (values: z.infer<typeof formSchema>)=>{
        console.log(values)
      }

    return ( 
        <div className="md:max-w-4xl w-full mx-2 text-black md:mx-auto bg-white p-4 mt-16 rounded-md h-full  ">
            <h1 className="text-yellow-700 text-2xl text-center font-bold">Login</h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:text-4xl">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem >
                <FormLabel className="md:text-2xl">Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-2xl" >Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your password" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" variant={'secondary'} type="submit">Submit</Button>
        </form>
      </Form>
      <p className="text-gray-500 mt-4 flex items-center">First time using Foodie?<Link href={'/sign-up'} className="underline flex items-center mr-2 ml-2">Sign Up <ArrowBigRight /></Link></p>

      <div className="mt-2">
        <p className="mb-2 text-center">Or Sign with google</p>
        <Button className="w-full ring text-xl" variant={'ghost'}>
            <BsGoogle color="red" size={24} className=" mr-4"/>
            Google
        </Button>
      </div>
      </div>
     );
}
 
export default SignIn;