import React from 'react'
import FeaturedHome from './FeaturedHome'

function FeaturedHomes({featuredHomes}) {
  return (
    <div className='max-w-[1140px] m-auto w-full px-4 py-6'>
        <h2 className='text-center text-gray-700 p-4'>Featured Holiday Homes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-1'>
            {featuredHomes?.map((featuredHome) => <FeaturedHome key={featuredHome.id} featuredHome={featuredHome} />)}
        </div>
    </div>
  )
}

export default FeaturedHomes