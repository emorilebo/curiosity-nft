import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
              alt=""
            />
          </div>
          <div className='space-y-2 p-5 text-center'>
            <h1 className="text-4xl font-bold text-white">Xplorer Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of apes who are trying to explore the vast space of
              the planet.
            </h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div>
        <div>
          {/* Header */}

          {/* Content */}

          {/* Mint Button */}
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage
