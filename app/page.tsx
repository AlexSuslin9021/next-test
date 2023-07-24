'use client'



import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter()

  return <>
  <h2>   Hello, Next.js!</h2>
    <button type="button" onClick={() => router.push('/blog')}>
      blog
    </button>
  </>
}
