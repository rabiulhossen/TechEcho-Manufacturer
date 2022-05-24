import React from 'react'
import PageTitle from '../common/PageTitle'
import Bannner from './Bannner'
import Global from './Global'
import Part from './Parts/Part'
import Summary from './Summary'

export default function Home() {
  return (
    <div className='my-5'>
<h1 className='mb-5 fw-bold text-5xl font-serif	 text-zinc-900'>Welcome To Our Site</h1>
<PageTitle title="Home"></PageTitle>
<Bannner></Bannner>
<Part></Part>
<Summary />
<Global></Global>
    </div>
  )
}
