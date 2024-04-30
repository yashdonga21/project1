import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Beautycard.css'

export default function Beautycard() {

    const [beautydata, setbeautydata] = useState([])
    const [activeCircle, setActiveCircle] = useState(null);
    const [activeImage, setActiveImage] = useState(null);


    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const apiurl = "http://localhost:3004/data";

        try {
            const response = await axios.get(apiurl);
            const beauty = response.data.find(category => category.category === 'BEAUTY')

            setbeautydata(beauty ? beauty.Beautydata : [])



        } catch (error) {
            console.error('error fetching data:', error)
        }
    }





    useEffect(() => {
        const circleElements = document.querySelectorAll('.color-option');

        circleElements.forEach((circle) => {
            circle.addEventListener('click', (e) => {
                const target = e.target;
                if (target.classList.contains('circle')) {
                    setActiveCircle(target);
                    setActiveImage(target.id);
                }
            });
        });

        return () => {
            circleElements.forEach((circle) => {
                circle.removeEventListener('click', () => { });
            });
        };
    }, []);

    useEffect(() => {
        if (activeCircle) {
            activeCircle.classList.add('active');
            document.querySelector(`.main-images.${activeImage}`).classList.add('active');
        }
    }, [activeCircle, activeImage]);
    return (
        <div className='container bds'>
            <h4 className='text-center mt-4 pt-5' style={{ color: "white" }}>---- &nbsp;Up To 30 Percent Off &nbsp;----</h4> <br />
            <small style={{ color: "white" }}>8 items found</small> <br /> <small style={{ color: "white" }}>Category:BEAUTY</small> <br />
            <small className='clickhere' style={{ color: "white" }}>Click to card Show more Details</small>
            <div className="row">
                {beautydata.map((item) => (
                    <div className="col-lg-4 col-md-6 col-sm-6"  name="viewport" content="width=device-width, initial-scale=1">
                        <Link to={`/Beautyproductpage/${item.id}`}>
                            <div className="product-card">
                                <div className="main-images">
                                    <img id="blue" className="blue active" src={item.img} alt="blue" />
                                </div>
                                <div className="shoe-details mt-3">
                                    <span className="shoe_name">{item.titlemain}</span>
                                    <p className=' text-truncate'>{item.title}</p>
                                </div>
                                <div className="color-price">
                                    <div className="price">
                                        <span className="price_num">Rs.₹{item.MRP}</span>
                                        <span className="price_letter"></span>
                                    </div>
                                </div>
                                <div className="button">
                                    <div className="button-layer"></div>
                                    <button>View Details</button>
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
