import React from "react";
function Background(){
    return(
   <>
   <div className="w-full h-screen z-[2] fixed">
   <div className="flex justify-center text-xl text-zinc-600 w-full py-10 font-semibold  absolute top-[5%]">Documents.</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter text-zinc-900 font-semibold">
        Docs.
      </h1>
   </div>
    
   </>
    )
}

export default Background