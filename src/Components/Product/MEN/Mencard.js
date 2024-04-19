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
        <div className='row firstdiv' style={{ overflow: "hidden", textDecoration: "none" }}>
            {mendata.map((item) => (
                <div className=''>
                    <Link to={`/Menproductpage/${item.id}`}>
                        <div className="shell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
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
        </div>
    )
}
