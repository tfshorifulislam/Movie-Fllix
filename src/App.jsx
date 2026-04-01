import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import MovieData from './Components/MovieData/MovieData'
import NavBar from './Components/Navbar/NavBar'
import MovieSection from './Components/MovieSection/MovieSection'
import TvShowsSection from './Components/TvShowsSection/TvShowsSection'
import SelectCarts from './Components/SelectCarts/SelectCarts'
import Footer from './Components/Footer/Footer'


const data = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const movieDataRes = data()

function App() {

  const menuItems = ['Home', 'Movies', 'TV Shows']
  const [section, setSection] = useState('Home')
  const [cartsData, setCartsData] = useState([])
  const [selectCarts, setSelectedCart] = useState(false)
  console.log(cartsData)
  // console.log(selectCarts)
  return (
    <div className='max-w-480'>
      <Hero menuItems={menuItems} section={section} setSection={setSection} setSelectedCart={setSelectedCart} />

      {!selectCarts && section === 'Home' && <MovieData movieDataRes={movieDataRes} cartsData={cartsData} setCartsData={setCartsData} selectCarts={selectCarts} setSelectedCart={setSelectedCart} />}
      {!selectCarts && section === 'Movies' && <MovieSection setSection={setSection} />}
      {!selectCarts && section === 'TV Shows' && <TvShowsSection setSection={setSection} />}
      {selectCarts === true && <SelectCarts cartsData={cartsData} setCartsData={setCartsData} setSection={setSection} setSelectedCart={setSelectedCart} />}

      <Footer menuItems={menuItems} />


    </div>
  )
}

export default App
