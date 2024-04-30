import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Menpage.css'

export default function Mencard() {
    const [mendata, setmendata] = useState([])


    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const apiurl = "http://localhost:3004/data";

        try {
            const response = await axios.get(apiurl);
            const Mens = response.data.find(category => category.category === 'MENS')

            setmendata(Mens ? Mens.Mensdata : [])



        } catch (error) {
            console.error('error fetching data:', error)
        }
    }

    return (
        <div className='firstdiv container fsd' style={{ overflow: "hidden", textDecoration: "none" }}>
            <h4 className='text-center mt-3 pt-5' style={{ color: "white" }}>---- &nbsp;Up To 50 Percent Off &nbsp; ----</h4> <br />
            <small style={{ color: "white" }}>8 items found</small> <br /> <small style={{ color: "white" }}>Category:MEN</small> <br />
            <small style={{ color: "white" }}>Click to card Show more Details</small>
            <div className="row">
                {mendata.map((item) => (
                    <div className='col-lg-4 col-md-6 col-sm-6' name="viewport" content="width=device-width, initial-scale=1">
                        <Link to={`/Menproductpage/${item.id}`}>
                            <div className="shell">
                                <div className="container">
                                    <div className="">
                                        <div className="">
                                            <div className="wsk-cp-product">
                                                <div className="wsk-cp-img">
                                                    <img src={item.img} alt="Product" className="img-responsive" />
                                                </div>
                                                <div className="wsk-cp-text">
                                                    <div className="category">
                                                        <span><a href="/">AddCart</a></span>
                                                    </div>
                                                    <div className="title-product">
                                                        <h3>{item.titlemain}</h3>
                                                    </div>
                                                    <div className="description-prod">
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <div className="wcf-left"><span className="price">MRP₹{item.MRP}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <p className='text-center mt-5' style={{ fontWeight: "bold" }}>Show More Product Go To Homepage</p>

            </div>
        </div>
    )
}
