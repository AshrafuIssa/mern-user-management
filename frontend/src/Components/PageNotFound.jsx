import React from 'react'

function PageNotFound({requestedUrl}) {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>{requestedUrl} is not found</p>
    </div>
  )
}

export default PageNotFound