import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Kidsproductpage.css'

export default function Kidsproductpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);



  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    fetch(`http://localhost:3004/data`)
      .then(res => res.json())
      .then(data => {
        const kidsproduct = findProductInCategory(data, 'KIDS', id);

        const productToSet = kidsproduct || findProductInCategory(data, 'KIDS', id);

        if (productToSet) {
          setProduct(productToSet);
        }
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);


  const findProductInCategory = (data, category, productId) => {
    const categoryContainingProduct = data.find(cat => cat.category === category);
    if (categoryContainingProduct) {
      return categoryContainingProduct.Kidsdata.find(product => product.id === parseInt(productId));
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
    <div>
      <div className="container my-5">
        <div className="row details-snippet1">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-2 mini-preview">
                <img className="img-fluid" src={product.images.img1} alt="Preview" />
                <img className="img-fluid" src={product.images.img2} alt="Preview" />
                <img className="img-fluid" src={product.images.img3} alt="Preview" />
                <img className="img-fluid" src={product.images.img4} alt="Preview" />
              </div>
              <div className="col-md-10">
                <div className="product-image">
                  <img className="img-fluid" src={product.img} alt="Main Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <div className="category"><span className="theme-text">Category:</span>{product.Ctgry}</div>
            <div className="title mt-3">{product.titlemain}</div>
            <div className="title mt-2" style={{ fontSize: "17px" }}><small>{product.title}</small></div>

            <div className="ratings my-2">
              <div className="stars d-flex">
                <div className="product_description rounded-pill bg-success px-2 d-flex align-items-center">
                  <span className="pe-1 text-light" style={{ fontSize: "15px", fontWeight: "bold" }}>{product.rating}</span>
                  <i className="fa-solid fa-star" style={{ color: "#fafafa", fontSize: "10px" }}></i>
                </div>
                <div className="ml-2">(4.2) 50 Reviews</div>
              </div>
            </div>
            <div className="price my-2">Rs.₹{product.MRP} <strike className="original-price"></strike></div>
            <div className="theme-text subtitle">Product Details</div>
            <div className="brief-description">
              <ul>
                <li><small> {product.productdetails.Bleach}</small></li>
                <li><small>{product.productdetails.packing}</small></li>
                <li><small>{product.productdetails.fitting}</small></li>
                <li><small>{product.productdetails.quality}</small></li>
                <li><small>{product.productdetails.code}</small></li>
                <li><small>Country Of Origin : &nbsp;{product.countryoforigion}</small></li>
                <li><small>{product.offer}</small></li>
                <li><small>{product.cd}</small></li>
                <li><small>{product.discount}</small></li>
                <li><small>Commodity:{product.cmdty}</small></li>
              </ul>

            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <Link to={'/Pay'}>
                  <a href="/">
                    <button className="btn addBtn btn-block">Buy now</button>
                  </a>
                </Link>
              </div>
              <div className="col-md-6">
                <a href="/Cartpage">
                  <button onClick={() => addToCart(product)} className='btn btn-primary'>Add To Basket</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center' style={{ marginTop: '80px' }}>
          <h6><hr />{product.buymore}<hr /></h6>
        </div>
        <div className="additional-details my-5 text-center">
          {/* <!-- Nav pills --> */}
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-tabs">
              <a className="nav-link active" data-toggle="tab" data-bs-toggle="tab" href="#home">RETURNS</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#menu2">OUR PROMISE</a>
            </li>
          </ul>





          {/* <!-- Tab panes --> */}
          <div className="tab-content mt-4 mb-3">
            <div className="tab-pane container active" id="home">
              <div className="description">{product.Returnpolicy}</div>
            </div>
            <div className="tab-pane container fade" id="menu2">
              <div className="specification">
                <p>{product.promise}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
