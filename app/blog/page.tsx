import {Metadata} from 'next'
import Link from "next/link";

export const metadata = {
    title: 'Blog',

}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export default async function Page() {
    const posts = await getData()
    return <>
        <h1>Blog</h1>
        <ul>
            {posts.map((p:any)=> {
                return <li key={p.id}>
                <Link href={`/blog/${p.id}`} >{p.title}</Link>
            </li>})}
        </ul>

    </>
}
type PostsType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}