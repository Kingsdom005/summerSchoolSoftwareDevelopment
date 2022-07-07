export default function MyList(props){
    const posts = props.posts
    return (
        <div className="content">
        {posts.map((item,index) => {
            return (
            <div className="tmp" id="tmp" key={index}>
            <span className="passage-id">{item.score}</span>
            <span>
                <span>{item.title} <a href="#">({item.url===undefined? "Not Found":item.url.split('/')[2]})</a></span><br></br>
                <span>by <span>{item.by}</span> <span>{parseInt((new Date().getTime()/1000-item.time)/60,10)}</span> days ago | <span>{item.descendants}</span> comments</span>
            </span>
            </div>
            )
        }) }
        </div>
    )
}
function ListItem(props){
    const posts = props.posts
    return (
        posts.map((item,index) => {
            <div className="tmp" id="tmp" key={index}>
                <span className="passage-id">{item.score}</span>
                <span>
                    <span>{item.title} <a href="#">({item.url===undefined? "Not Found":item.url.split('/')[2]})</a></span><br></br>
                    <span>by <span>{item.by}</span> <span>{parseInt((new Date().getTime()/1000-item.time)/60,10)}</span> days ago | <span>{item.descendants}</span> comments</span>
                </span>
            </div>
        })
    )
}