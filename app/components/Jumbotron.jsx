// import modules
import React from 'react'

// jumbotron components
const Jumbotron = () => {
  return (
    <div className="relative flex flex-col text-white items-center justify-center" style={{ height: "92vh" }}>
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/jumbotron.jpg')] bg-cover bg-center"></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-2">WELCOME TO THE WESLEY</h1>
        <h1 className="text-2xl md:text-6xl font-bold">METHODIST CHURCH MEDAN</h1>
        <p className="md:text-xl mt-4">We are glad to have you here.</p>
      </div>
    </div>
  )
}

export default Jumbotron
