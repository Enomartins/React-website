import React from 'react'
import { homeObjOne, homeObjFour } from './Data'
import { InfoSection, Pricing } from '../../components'
import logo from '../../images/react.svg'
import vre from '../../images/vr.svg'

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjOne} img={logo} />
            <InfoSection {...homeObjFour} img={vre}/>
        </>
    )
}

export default Home
