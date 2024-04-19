import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Menproductpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3004/data`)
      .then(res => res.json())
      .then(data => {
        const menproduct = findProductInCategory(data, 'MENS', id);

        const productToSet = menproduct || findProductInCategory(data, 'MENS', id);

        if (productToSet) {
          setProduct(productToSet)
        }
      })
      .catch(error => console.error('error fetching data:', error))
  }, [id]);




  const findProductInCategory = (data, category, productId) => {
    const categoryContainingProduct = data.find(cat => cat.category === category);

    if (categoryContainingProduct) {
      return categoryContainingProduct.Mensdata.find(product => product.id === parseInt(productId))
    }
    return null;
  };

  if (!product) {
    return <div>LOAding........</div>
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
          <p>{product.MRP}</p>

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
      <div className='text-center' style={{marginTop:'80px'}}>
        <h6>{product.buymore}</h6>
      </div>
    </>

  )
}
