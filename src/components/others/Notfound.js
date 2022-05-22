import React from 'react'
import error from '../../resources/img/404.jpg'

export default function Notfound() {
  return (
    <div>
<h1 className="text-yellow-400">OOPS! Not Found</h1>
<img src={error} alt="" />
    </div>
  )
}
