
import { lazy, Suspense } from 'react'
import './App.css'
//import Mainbox from './components/main/Mainbox'
import Navbar from './components/main/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const Mainbox = lazy(() => import('./components/main/Mainbox'))
const Sidebar = lazy(() => import('./components/sidebar/Sidebar'))

function App() {


  return (
    <>
      <div className='hidden md:block'>
        <Suspense fallback={<div>Loading....</div>}>
          <Sidebar />
        </Suspense>
      </div>
      <div className='flex-1 min-h-100vh relative overflow-y-auto' style={{ paddingBottom: '15vh' }}>

        <Navbar />

        <Suspense fallback={<div>Loading....</div>}>
          <Mainbox />
        </Suspense>
      </div>
    </>
  )
}

export default App
