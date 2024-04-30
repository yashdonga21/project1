import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Womencard.css'

export default function Womencard() {
    const [womendata, setwomendata] = useState([])


    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const apiurl = "http://localhost:3004/data";

        try {
            const response = await axios.get(apiurl);
            const Womens = response.data.find(category => category.category === 'Womens')

            setwomendata(Womens ? Womens.Womendata : [])



        } catch (error) {
            console.error('error fetching data:', error)
        }
    }

    return (
        <div className='container fsd1'>
            <h4 className='text-center mt-3' style={{ color: "black" }}>----&nbsp;Up To 50 Percent Off&nbsp;----</h4> <br />
            <small style={{ color: "black" }}>10 items found</small> <br /> <small style={{ color: "black" }}>Category:WOMEN</small> <br />
            <small style={{ color: "black" }}>Click to card Show more Details</small>
            <div className="row">
                {womendata.map((item) => (
                    <div className="col-lg-4  col-md-6 col-sm-6"  name="viewport" content="width=device-width, initial-scale=1">
                        <Link to={`/Womenproductpage/${item.id}`}>
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
                                                        <span><a href="/Cartpage">AddCart</a></span>
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
                <p className='text-center mt-2 smp' style={{ fontWeight: "bold" ,color:"white"}}>Show More Product Go To Homepage</p>

            </div>
        </div>
    )
}
