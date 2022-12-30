import React from 'react'
import Row from '../components/Row'
import requests from '../requests'

const Home = () => {
  return (
    <>
    {/* Mockup/Design/Outline/Layout */}
      {/* Navbar */}
      {/* Banner */}
      {/* Row */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* Row */}
      {/* Row */}

    </>
  )
}

export default Home