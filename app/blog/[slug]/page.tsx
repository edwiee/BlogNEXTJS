import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";


export const revalidate = 30;


async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
    "currentSlug": slug.current,
    title,
    content,
    titleImage
  }[0]`;
  
  const data = await client.fetch(query);
  
  return data;
}


export default async function BlogArticle({ params }: { params: { slug: string } }) {
  
  const data: fullBlog = await getData(params.slug);
  
  return (
    <div className="min-h-screen flex flex-col">
      
      <article className="flex-grow flex flex-col max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-5 py-8 sm:py-12">
        
        <header className="mb-8 sm:mb-16 text-center">
          
          {/* <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-indigo-900 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
          
          </div> */}
          
          <h1 className="text-start mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {data.title}
          </h1>
          
          <div className="relative w-full h-[20vh] sm:h-[20vh] md:h-[30vh] mb-8 sm:mb-3 rounded-xl overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-indigo-500/20">
            
            <Image
              src={urlFor(data.titleImage).url()}
              alt="Blog cover image"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>    
        </header>
        
        <div className="text-justify flex-grow prose prose-lg dark:prose-invert prose-indigo mx-auto w-full max-w-6xl overflow-y-auto text-sm">
          
          <PortableText value={data.content} />
    
        </div>
        <footer className="mt-16 sm:mt-24 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Thanks for reading! | <Link className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200" href="/blog">
                More Articles
              </Link>
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/edwiee" aria-label="Share on GitHub" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                <SiGithub size={18} />
              </a>
            </div>
          </div>
          {/* <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            
              <a className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200" href="/blog">
                More Articles
              </a>
         
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200">
              Back to Top
            </a>
          </div> */}
        </footer>
      </article>
    </div>
  );
}