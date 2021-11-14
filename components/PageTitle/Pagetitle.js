import React from 'react'

function Pagetitle({ children }) {
    return (
        <h1 className="text-3xl py-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {children}
      </h1>
    )
}

export default Pagetitle
