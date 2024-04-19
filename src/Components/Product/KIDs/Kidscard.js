import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Kidscard() {
    const [kidsdata, setkidsdata] = useState([])


    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const apiurl = "http://localhost:3004/data";

        try {
            const response = await axios.get(apiurl);
            const kids = response.data.find(category => category.category === 'KIDS')

            setkidsdata(kids ? kids.Kidsdata : [])



        } catch (error) {
            console.error('error fetching data:', error)
        }
    }

    return (
        <div className='container'>
            {kidsdata.map((item) => (
                <Link to={`/Kidsproductpage/${item.id}`}>
                    <img src={item.img} alt="" />
                </Link>
            ))}
        </div>
    )
}
