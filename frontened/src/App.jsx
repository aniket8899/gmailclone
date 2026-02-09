import './App.css'
import Inbox from './components/Inbox'
import Navbar from './components/Navbar'
import Sidebars from './components/Sidebars'

function App() {


  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebars />
        <Inbox />

      </div>
    </div>
  )
}

export default App
