import React from 'react'
import Navbar from './Component/Navebar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Allrooms from './Pages/Allrooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './Component/HotelReg'
import Layout from './Pages/Hotelowner/Layout'
import Dasfboard from './Pages/Hotelowner/Dasfboard'
import AddRoom from './Pages/Hotelowner/AddRoom'
import ListRoom from './Pages/Hotelowner/ListRoom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      {false && <HotelReg />}

      <div className='min-h-[70vh]'>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Allrooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          <Route path='/owner' element={<Layout />}>
          <Route index element={<Dasfboard />}/>
          <Route path='add-room' element={<AddRoom />}/>
          <Route path='list-room' element={<ListRoom />}/>

          </Route>

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App