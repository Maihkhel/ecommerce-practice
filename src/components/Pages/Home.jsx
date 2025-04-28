import React from 'react'
import Hero from '../herosection/Hero'
import LatestCollection from '../latest_collections/LatestCollection'
import Bestseller from '../bestseller/Bestseller'
import Newsletter from '../forms/Newsletter'
// import AllProducts from '../../assets/AllProducts'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Newsletter/>
      {/* <AllProducts/> */}
    </div>
    
  )
}

export default Home