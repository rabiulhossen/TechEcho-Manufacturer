import React from 'react'
import PageTitle from '../common/PageTitle'
import Bannner from './Bannner'
import Global from './Global'
import Part from './Parts/Part'
import Summary from './Summary'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className='my-5'>
<h1 className='mb-5 text-5xl font-serif	 text-zinc-900'>Welcome To Our Site

</h1>

{/* animation  */}

<h2 className='mb-5 mt-3 font-semiBold text-5xl font-serif	 text-yellow-300'>

<Typewriter options={{strings: ['Hardware Manufacturer', 'Nano Developer', 'Parts Manufacturer'
                              ],autoStart: true,loop: true,pauseFor:1500}}/>
</h2>


<PageTitle title="Home"></PageTitle>
<Bannner></Bannner>
<Part></Part>
<Summary />
<Global></Global>
    </div>
  )
}
