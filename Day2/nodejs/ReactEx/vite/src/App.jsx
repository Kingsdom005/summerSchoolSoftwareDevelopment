// import { useState } from 'react'
// import { useEffect } from 'react'
import MyList from './components/List';
import MyHead from './components/Head';
import MyNavigation from './components/Navigation'
import MyFooter from './components/Footer';
import './index.css';
function App() {
  return (
    <div className='container'>
      <MyHead></MyHead>
      <MyNavigation></MyNavigation>
      <MyList></MyList>
      {/* <MyList posts={posts}></MyList> */}
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
