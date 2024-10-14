import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import { useEffect } from "react"
import { checkAuth } from "./store/userSlice"
import { store } from "./store"

function App() {
  
  useEffect(() => {
    
    store.dispatch(checkAuth())
  }, [])

  return (
    <>
      <Header />
      <div className='root_children'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
