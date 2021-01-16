import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { InfoSection } from '../../components'
import app from '../../images/app.svg'
import logo from '../../images/react.svg'
import prog from '../../images/dev.svg'
import vre from '../../images/vr.svg'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} img={logo} />
            <InfoSection {...homeObjTwo} img={prog}/>
            <InfoSection {...homeObjThree} img={app}/>
            <InfoSection {...homeObjFour} img={vre}/>
        </>
    )
}

export default Home
