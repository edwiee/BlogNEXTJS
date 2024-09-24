import React from 'react'
import Link from "next/link";

function Hero() {
  return (
    <div className="py-6 mt-5 max-w-2xl mx-auto px-4">
    <h1 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-4 text-start">
     Hey! I'm <span className="text-primary hover:underline"><a href="https://www.linkedin.com/in/edwinvs/">Edwin V S</a></span>.
     </h1>
     <p className="text-justify">I enjoy working with <span className="hover:underline"><Link href="https://nextjs.org">NextJS</Link></span> and crafting beautiful full stack experiences.<br /><br />
     This blog is my platform for sharing insights into web development, from front-end frameworks to back-end logic and everything in between. Let’s explore the latest in tech together!
     </p><br></br>
     <p className="text-sm text-start"><span className="text-primary"><a href="https://www.linkedin.com/in/edwinvs/">LinkedIn</a></span> • <span className="text-primary"><a href="https://github.com/edwiee">Github</a></span> • <span className="text-primary"><a href="https://x.com/edwiiy">Twitter</a></span></p>
   </div>
  )
}

export default Hero
