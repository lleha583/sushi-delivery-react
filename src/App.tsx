import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App() {
  console.log('update app')


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
