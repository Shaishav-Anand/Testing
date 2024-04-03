import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AllRoutes from './routes/AllRoutes'
import { createContext } from 'react'

const greeting = "Hello"
const authContext = createContext(greeting)

export default function App() {
  return (
    <>
        <Header />
        <div className="main">
        <AllRoutes />
        </div>
        <Footer />
    </>
   
  )
}
