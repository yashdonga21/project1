import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Firstdiv from './Homepage/Firstdiv';
import Seconddiv from './Homepage/Seconddiv/Seconddiv';
import Shervanicard from './Product/SHERVANI/Shervanicard';
import { Link } from 'react-router-dom';




export default function Homepage() {
    return (
        <div>
            <Header />
            <Firstdiv />
            <Seconddiv />
            <Shervanicard />






            <div className="fifth mt-5">
                <div className='imagecart w-100 h-100'>
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-21032024-discoveronlinestores-Z21-header.jpg" alt="" />
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-21032024-discoveronlinestores-Z21-Ajiogold.jpg" alt="" />
                </div>


                <div className="brand">
                    <Link to={'/Trend'}>
                        <img className='i1' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z20-surfselectshop-trends.jpg" alt="/" />
                    </Link>


                    <Link to={'/Newbrand'}>
                        <img className='i1' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z20-surfselectshop-upcomingbrands.jpg" alt="/" />
                    </Link>


                    <Link to={'/Inter'}>
                        <img className='i1' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z20-surfselectshop-internationalbrands.jpg" alt="/" />
                    </Link>




                    <Link to={'/Snekr'}>
                        <img className='i1' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z20-surfselectshop-sneakerhood.jpg" alt="/" />
                    </Link>



                </div>
                <div className="ajiolux">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-21032024-discoveronlinestores-Z21-ajioluxe.jpg" alt="" />
                </div>
            </div>






            <Footer />
        </div >
    )
}
