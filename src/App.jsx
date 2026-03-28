import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import MovieData from './Components/MovieData/MovieData'
import NavBar from './Components/Navbar/NavBar'
import MovieSection from './Components/MovieSection/MovieSection'
import TvShowsSection from './Components/TvShowsSection/TvShowsSection'


const data = async ()=>{
  const res = await fetch('/data.json')
  return res.json()
}

const movieDataRes = data()

function App() {

  const [section, setSection] = useState('Home')

  return (
    <div className='max-w-480'>
      <Hero section={section} setSection={setSection} />
      
      {section === 'Home' && <MovieData movieDataRes={movieDataRes} />}
      {section === 'Movies' && <MovieSection />}
      {section === 'TV Shows' && <TvShowsSection />}
      
      
    </div>
  )
}

export default App
