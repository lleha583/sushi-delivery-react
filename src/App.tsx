import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'

function App() {

  return (
    <>
      <Header />
      <div className='root_children'>
        <Outlet />
      </div>
    </>
  )
}

export default App
