import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30;
async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
  title,
    subtitle,
    "currentSlug": slug.current,
    content,
    titleImage,
    _createdAt
}`;

const data = await client.fetch(query);
return data;
}

export default async function Home() {
  const data:simpleBlogCard[] = await getData();
  // console.log(data)
  return (
    <div className="py-6 mt-5 max-w-2xl mx-auto px-4">
     {/* {data.map((post, idx)=>(
      <Card key={idx}>
        <Image src={urlFor(post.titleImage).url()} alt="BlogImage" width={500} height={500}
        className="rounded-t-lg h-[200px] object-cover"
        />
        <CardContent className="mt-5">
          <h3 className="text-md line-clamp-2 font-semibold">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400">{post.subtitle}</p>
          <Button asChild className="w-full mt-7">
            <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>
     ))} */}
     {data.map((post, idx)=>(
      <div key={idx} className="mb-6">
        <h2 className="text-start font-extrabold"><Link href={`/blog/${post.currentSlug}`}><span className="hover:underline">{post.title}</span></Link></h2>
        <p className="text-sm mt-1">{post.subtitle}</p>
        <p className="text-xs text-muted-foreground mt-2">{post._createdAt}</p>
      </div>
     ))}
    </div>
  );
}
