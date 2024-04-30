import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Shervanicard.css'

export default function Shervanicard() {

    const [shervanidata, setshervanidata] = useState([])


    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const apiurl = "http://localhost:3004/data";

        try {
            const response = await axios.get(apiurl);
            const shervani = response.data.find(category => category.category === 'Shervani')

            setshervanidata(shervani ? shervani.Shervanidata : [])



        } catch (error) {
            console.error('error fetching data:', error)
        }
    }
    return (
        <div>
            <div className='firstdiv shervanicd' style={{ overflow: "hidden", textDecoration: "none" }}>
                <h1 className='text-center' style={{color:"white", marginTop:"40px",fontFamily:"cursive"}}>Level Up Your Festive Look <br /> <small>Ethnicwear that's bright, stylish & unique</small></h1>
                <div className="row">
                    {shervanidata.map((item) => (
                        <div className='col-lg-3 col-md-6 col-sm-6' name="viewport" content="width=device-width, initial-scale=1">
                            <Link to={`/Shervaniproductpage/${item.id}`}>
                                <div className="shell1">
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
                </div>
            </div>
        </div>
    )
}
