
import './App.css'
import Mainbox from './components/main/Mainbox'
import Navbar from './components/main/Navbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {


  return (
    <>
      <Sidebar />
      <div className='flex-1 min-h-100vh relative' style={{ paddingBottom: '15vh' }}>
        <Navbar />
        <Mainbox />
      </div>
    </>
  )
}

export default App
