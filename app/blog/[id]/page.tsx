type Props={
    params:{
        id:string
    }
}
export function generateMetadata({params:{id}}:Props){
    return {
        title: id
    }
    }
async function getData(id:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

export default async function  Post({params:{id}}:Props){
    const post= await getData(id)

    return <div>{post.body}</div>

}