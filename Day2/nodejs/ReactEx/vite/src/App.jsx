import { useState } from 'react'
import { useEffect } from 'react'
import List from './components/List';
import MyHead from './components/Head';
import MyNavigation from './components/Navigation'
import './index.css';
function App() {
  const [posts,setPosts] = useState([])
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  useEffect(()=>{ 
    fetch(url).then(res => res.json()).then(json=>{
      const list = json.slice(0,10)
      Promise.all(list.map(id=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res=>res.json()))).then(posts=>{setPosts(posts)})
  })},[])
  return (
    <div className='container'>
      <MyHead></MyHead>
      <MyNavigation></MyNavigation>
      <List posts={posts}/>
    </div>
  )
}

export default App
