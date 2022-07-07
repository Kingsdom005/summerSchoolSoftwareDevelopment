import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'
import MyList from './components/List';
import MyHead from './components/Head';
import MyNavigation from './components/Navigation'
import MyFooter from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <MyHead></MyHead>
      <MyNavigation></MyNavigation>
      <MyList></MyList>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
