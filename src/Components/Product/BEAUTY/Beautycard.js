import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Beautycard() {

    const [beautydata, setbeautydata] = useState([])


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
    return (
        <div className='container'>
            {beautydata.map((item) => (
                <Link to={`/Beautyproductpage/${item.id}`}>
                    <img src={item.img} alt="" />
                </Link>
            ))}

        </div>
    )
}
