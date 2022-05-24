import React from 'react'
import PageTitle from '../common/PageTitle'
import Aboutme from './Aboutme'
import PortfoliBanner from './PortfoliBanner'

export default function MyPortfolio() {
  return (
    <div>
<h1 className='font-serif font-semibold text-slate-900 text-3xl m-5'>Details About Me</h1>
<PageTitle title="My Portfolio" />
<PortfoliBanner />
<Aboutme></Aboutme>
    </div>
  )
}
