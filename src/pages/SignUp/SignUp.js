import React from 'react'
import { homeObjThree, homeObjFour } from './Data'
import { InfoSection} from '../../components'
import app from '../../images/app.svg'
import vre from '../../images/vr.svg'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjThree} img={app}/>
            <InfoSection {...homeObjFour} img={vre}/>
        </>
    )
}

export default Home
