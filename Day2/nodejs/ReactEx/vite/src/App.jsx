import { useState } from 'react'
import { useEffect } from 'react'
import './index.css';
function App() {
  const [postDatas,setPostDatas] = useState([])
  const URL = function (num) {
    return `https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`
  }
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  useEffect(()=>{
    fetch(url).then(res => {var a = res.json();return a;}).then(json=>{
      for(let i=0;i<10;i++){
        fetch(URL(json[i])).then(res => {return res.json()}).then(dt=>{
          postDatas.push(dt)
          console.log(postDatas)
        })  
      }
  },[])

  // fetch(url).then(res => {var a = res.json();return a;}).then(json=>{
  //   var list = json.slice(0,10)
  //   var posts = list.map(item => fetch(URL(item)).then(res => {return res.json()}).then(dt=>{
  //     postDatas.push(dt)
  //     console.log(postDatas)
  //   })).then(posts=>setPostDatas(posts))
    
  // Promise.all(posts)
  // for(let i=0;i<5;i++){
  //   fetch(URL(json[i])).then(res => {return res.json()}).then(dt=>{
  //     postDatas.push(dt)
  //     console.log(postDatas)
  //   })
  // }
  })
  return (
      <div className='container'>
        {/* 头部 */}
        <nav>
          <div>
            <div className='nav-l'>
              <img alt='Vlogo' src='/img/1.png'></img>
              <ul>
                <li>Top</li>
                <li>New</li>
                <li>Show</li>
                <li>Ask</li>
                <li>Jobs</li>
              </ul>
              <div className='nav-r pointer'>Build with Vue.js</div>
            </div>
          </div>
        </nav>
      {/* 第二横栏 */}
      <div className="m">
          <div><span className="pointer gray">&lt; prev</span>&nbsp;&nbsp;1/25&nbsp;&nbsp;<span className="pointer">more &gt;</span></div>
      </div>
      {/* 内容栏 */}
      <div className="content">
        {postDatas.map((item,index) => {
          return (
          <div className="tmp" id="tmp" key={index}>
            <span className="passage-id">{item.score}</span>
            <span>
                <span>{item.title} <a href="#">({item.url.split('/')[2]})</a></span><br></br>
                <span>by <span>{item.by}</span> <span>{parseInt((new Date().getTime()/1000-item.time)/60,10)}</span> days ago | <span>{item.descendants}</span> comments</span>
            </span>
          </div>
          )
        }) }
      </div>
    </div>

  )
}

export default App
