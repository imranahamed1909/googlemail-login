import Webcam from "react-webcam";
import Pusher from "pusher-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ConnectingPage() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      push("/verification", { replace: true });
    }, 3000);
  }, []);

  return (
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
      <div class="border rounded-md w-10/12 md:w-[28rem] mx-auto md:px-10 py-12 mt-10 pt-10 flex justify-center items-center">
        <h1 class="text-2xl font-medium text-center">Please wait...</h1>
        <span class="loading loading-dots loading-sm mt-4 ml-1"></span>
        <span class="loading loading-dots loading-sm mt-4"></span>
      </div>

      {/* <Webcam
        audio={false}
        className="object-cover min-h-screen w-screen lg:w-auto"
        
      /> */}
    </div>
  );
}
