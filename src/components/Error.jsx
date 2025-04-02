import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

  const err = useRouteError()

  console.log(err)

  return (
    <div className='items-center justify-center flex flex-col h-screen font-semibold text-2xl'>
      <h1 className='pb-5'>404: Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>{err?.data}</p>
      {/* <p>Error: {err.}</p> */}

    </div>
  )
}

export default Error