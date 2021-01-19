import React from 'react'
import { homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { InfoSection, Pricing } from '../../components'
import app from '../../images/app.svg'
import prog from '../../images/dev.svg'
import vre from '../../images/vr.svg'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjThree} img={app}/>
            <InfoSection {...homeObjTwo} img={prog}/>
            <Pricing />
            <InfoSection {...homeObjFour} img={vre}/>
        </>
    )
}

export default Home
