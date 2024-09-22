import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Auth = () => {
  return (
    <div className="h-[100vh] w-[100vh] flex items-center justify-center m-auto">
      <div
        className="h-[80vh] bg-white border-2 text-opacity-90 shadow-2xl w-[80vw]
       md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2"
      >
        <div className=" flex flex-col gap-10 items-center justify-center w-[45.9vw] border-2">
          <div className="flex items-center justify-center flex-col ">
            <div className="flex items-center justify-center ">
              <h1 className="text-5xl font-bold md:text-6xl "> welcome</h1>
              <Image
                src="/assets/victory.svg"
                alt="Welcome Image"
                width={60}
                height={60}
              ></Image>
            </div>
            <p className="font-medium text-center">Fill in the details to get started with the best chat app!</p>
            <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default Auth;
