import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
export default function FirstPage({params}){
    const newSlug =params.slug;
    const newsItem= DUMMY_NEWS.find ((newsItem)=>newsItem.slug=== newSlug)
    if(!newsItem)
        {notFound();}
    return(
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}