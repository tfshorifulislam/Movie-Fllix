import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import MovieData from './Components/MovieData/MovieData'
import NavBar from './Components/Navbar/NavBar'
import MovieSection from './Components/MovieSection/MovieSection'
import TvShowsSection from './Components/TvShowsSection/TvShowsSection'
import SelectCarts from './Components/SelectCarts/SelectCarts'


const data = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const movieDataRes = data()

function App() {

  const [section, setSection] = useState('Home')
  const [cartsData, setCartsData] = useState([])
  const [selectCarts, setSelectedCart] = useState(false)
  // console.log(cartsData)
  // console.log(selectCarts)
  return (
    <div className='max-w-480'>
      <Hero section={section} setSection={setSection} />

      {section === 'Home' && <MovieData movieDataRes={movieDataRes} cartsData={cartsData} setCartsData={setCartsData} selectCarts={selectCarts} setSelectedCart={setSelectedCart} />}
      {section === 'Movies' && <MovieSection />}
      {section === 'TV Shows' && <TvShowsSection />}
      {selectCarts === true && <SelectCarts cartsData={cartsData} />}


    </div>
  )
}

export default App
