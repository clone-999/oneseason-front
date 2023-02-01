import React from 'react'

const FeaturedHome = ({featuredHome}) => {
  return (
    <div className="w-full p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative pb-48 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src={featuredHome?.photoMainUrl.replace("square60", "square960") } alt="" />
            </div>

            <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                <h2 className="mt-2 mb-2  font-bold">{featuredHome.name}</h2>
                <p className="text-sm"></p>
                <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">price</span>&nbsp;<span className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">{featuredHome.currency}</span>
                </div>
            </div>

            <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> Country Code {featuredHome.countryCode}
                </span>
                <span className="flex items-center">
                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> CheckIn: {featuredHome.checkin.fromTime}, CheckIn: {featuredHome.checkout.untilTime}
                </span>        
            </div>

            <div className="p-4 flex items-center text-sm text-gray-600">
                <strong className="ml-2">Review Score: {featuredHome.reviewScoreWord}</strong>
            </div>

        </a>
    </div>
  )
}

export default FeaturedHome