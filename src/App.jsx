import './App.css'
import Hero from './Components/Hero/Hero'
import MovieData from './Components/MovieData/MovieData'
import NavBar from './Components/Navbar/NavBar'


const data = async ()=>{
  const res = await fetch('/data.json')
  return res.json()
}

const movieDataRes = data()

function App() {


  return (
    <div className='max-w-480'>
      <Hero />
      <MovieData movieDataRes={movieDataRes} />
    </div>
  )
}

export default App
