import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './list/List'
import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'

const App = () => {
  return (

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/hotels" element={<List/>} />
  {/*  This will move to you to hotel when you are  in the exact path
  */}
  <Route path="/hotels/:id" element={<Hotel/>} />
  {/* This will move you to the hotel after the wherever path you like to go, :id indicate to any path realted move you to this Hotel path */}
  // this moves you to the Hotel if you go wherever in the website.
</Routes>
</BrowserRouter> 
    )
}

export default App