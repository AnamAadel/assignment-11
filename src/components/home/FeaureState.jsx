import React from 'react'

function FeaureState() {
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Accuracy rate</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
      <p className="mt-1 text-gray-500">in fulfilling orders</p>
    </div>
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Startup businesses</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
      <p className="mt-1 text-gray-500">partner with Preline</p>
    </div>
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Happy customer</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
      <p className="mt-1 text-gray-500">this year alone</p>
    </div>
  </div>
</div>
  )
}

export default FeaureState