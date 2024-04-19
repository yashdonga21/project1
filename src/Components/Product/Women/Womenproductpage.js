import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
// import $ from 'jquery';
import './Womenproductpage.css'


export default function Womenproductpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    fetch(`http://localhost:3004/data`)
      .then(res => res.json())
      .then(data => {
        const Womenproduct = findProductInCategory(data, 'Womens', id);

        const productToSet = Womenproduct || findProductInCategory(data, 'Womens', id);

        if (productToSet) {
          setProduct(productToSet);
        }
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const findProductInCategory = (data, category, productId) => {
    const categoryContainingProduct = data.find(cat => cat.category === category);
    if (categoryContainingProduct) {
      return categoryContainingProduct.Womendata.find(product => product.id === parseInt(productId));
    }
    return null;
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='container row'>
        <div className='otherimages col-2'>
          <img src={product.images.img1} alt="" />
          <img src={product.images.img2} alt="" />
          <img src={product.images.img3} alt="" />
        </div>
        <div className="mainimage col-6">
          <img src={product.img} alt="" />
        </div>
        <div className="details col-4">
          <p>{product.titlemain}</p>
          <p>{product.title}</p>
          <p>{product.rating}</p>
          <p>{product.Mrp}</p>

          <div className='offer'>
            <div>
            </div>
            <div>
            </div>
          </div>

          <div className='color'>
          </div>
          <div className='size'>
          </div>
          {/* <button>ADD TO BAG</button> */}
          {/* <button>BUY NOW</button> */}

          {/* <p>{product.productdetails.Bleach}</p> */}

        </div>

      </div>
      <div className='text-center' style={{ marginTop: '80px' }}>
        <h6>{product.buymore}</h6>
      </div>
      <a href="/Cartpage">
        <button onClick={() => addToCart(product)} className='btn btn-primary'>add to cart</button>
      </a>
    </>
  );
}