import { useState } from "react"
import { useEffect } from "react"
import Ajv, { JSONSchemaType } from "ajv"
import { Type } from "ajv/dist/compile/util"

const ajv = new Ajv({
    int32range:false
})

type Metadata = {
    title:string,url?:string,time:number,by:string,kids?:number[],score:number
}

export default function MyList(props){
    const [posts,setPosts] = useState<Metadata[]>([])
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    useEffect(()=>{ 
        fetch(url).then(res => res.json()).then(json=>{
            type IDArray = Array<number>
            const schema: JSONSchemaType<IDArray> = {
                type: "array",
                items: {
                    type: "integer"
                }
            }
            const validator = ajv.compile(schema)
            if(validator(json)) return json
            else throw new Error("Invalid data")
        }).then(json=>{
            const list = json.slice(0,10)
            const posts = Promise.all(list.map(id=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res=>res.json())))
            return posts;
        }).then(res=>{
            const schema :JSONSchemaType<Metadata[]> = {
                type:"array",
                items:{
                    type:"object",
                    properties: {
                        title:{
                            type:"string",
                        },
                        url:{
                            type:"string"
                        },
                        by:{
                            type:"integer"
                        },
                        time:{
                            type:"array",
                            items:{
                                type:"integer"
                            },
                            nullable:true
                        }
                },
                required:["by","score","time","title"]
                }
            }
            const validator = ajv.compile(schema)
            if(validator(posts)){return posts;}
            else{
                console.log(posts)
                throw new Error("Invalid data")
            }
        }).then(posts=>{
            setPosts(posts)
        }).catch(err=>console.log(err))
    },[])
    
    return (
        <div className="content">
            {posts.map((post,index) => <ListItem posts={post} key={index}></ListItem>) }
        </div>
    )
}
function ListItem(props){
    const posts = props.posts
    return (
        <div className="tmp" id="tmp">
            <span className="passage-id">{posts.score}</span>
            <span>
                <span>{posts.title} <a href="#">({posts.url===undefined? "Not Found":posts.url.split('/')[2]})</a></span><br></br>
                <span>by <span>{posts.by}</span> <span>{(parseInt((new Date().getTime()/1000-posts.time)/60,10)).toString()}</span> days ago | <span>{posts.descendants}</span> comments</span>
            </span>
        </div>
    )
}
