import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className=''>

            <footer>
                <div className='maindiv col-12 col-lg-12 col-md-12  col-md-12'>


                    {/* first div */}

                    <div className='fisrtdiv  d-none d-md-block d-lg-block d-sm-block' style={{ backgroundColor: ' #2c4152', color: 'white', textAlign: 'center', fontFamily: '' }}>
                        <h3 style={{ color: '#e7d20d' }}>AJIO CARES</h3>
                        <p style={{ textTransform: 'uppercase' }}>we do not ask for  your  bank  account  or card  details  verbally  or telephonically. <br />
                            we also  do not  ask  for money  to participate in any  of our offers  or run  any  lucky  draws
                        </p>
                    </div>




                    {/* second div */}

                    <div className='seconddiv d-flex text-center gap-5 col-12 col-lg-12 col-md-12  col-md-12' style={{ justifyContent: 'center' }}>

                        <div>
                            <div className="logo" style={{ fontSize: '2rem' }}>
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className="tag">
                                <p>EASY EXCHANGE</p>
                            </div>
                        </div>

                        <div>
                            <div className="logo1" style={{ fontSize: '2rem' }}>
                                <i class="fa-solid fa-hand-holding-heart"></i>



                            </div>
                            <div className="tag1">
                                <p>100% HANDPICKED</p>
                            </div>
                        </div>

                        <div>
                            <div className="logo2" style={{ fontSize: '2rem' }}>
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                            <div className="tag2">
                                <p>ASSURED QUALITY</p>
                            </div>
                        </div>

                    </div>



                    {/* third div  */}



                    <div className="list thirddiv col-12 col-lg-12 col-md-12  col-md-12">


                        <div className='list1'>
                            <p>Ajio</p>

                            <a target='_blank' rel='noreferrer' href='/'>Who We Are</a>
                            <a target='_blank' rel='noreferrer' href='/'>Join Our Team</a>
                            <a target='_blank' rel='noreferrer' href='/'>Terms & Conditions</a>
                            <a target='_blank' rel='noreferrer' href='/'>We Respect Your Privacy</a>
                            <a target='_blank' rel='noreferrer' href='/'>Fees & Payments</a>
                            <a target='_blank' rel='noreferrer' href='/'>Returns & Refunds Policy</a>
                            <a target='_blank' rel='noreferrer' href='/'>Promotions Terms & Conditions</a>

                        </div>


                        <div className='list2'>
                            <p>Help</p>
                            <a target='_blank' rel='noreferrer' href="/">Track Your Order</a>
                            <a target='_blank' rel='noreferrer' href="/">Frequently Asked Questions</a>
                            <a target='_blank' rel='noreferrer' href="/">Returns</a>
                            <a target='_blank' rel='noreferrer' href="/">Cancellations</a>
                            <a target='_blank' rel='noreferrer' href="/">Payments</a>
                            <a target='_blank' rel='noreferrer' href="/">Customer Care</a>
                            <a target='_blank' rel='noreferrer' href="/">How Do I Redeem My Coupon</a>
                        </div>


                        <div className='list3'>


                            <p>Shop By</p>
                            <a target='_blank' rel='noreferrer' href="/Mencard">Men</a>
                            <a target='_blank' rel='noreferrer' href="/Womencard">Women</a>
                            <a target='_blank' rel='noreferrer' href="/Kidscard">Kids</a>
                            <a target='_blank' rel='noreferrer' href="/">Indie</a>
                            <a target='_blank' rel='noreferrer' href="/Cartpage">Stores</a>
                            <a target='_blank' rel='noreferrer' href="/Newbrand">New Arrivals</a>
                            <a target='_blank' rel='noreferrer' href="/Trend">Brand Directory</a>
                            <a target='_blank' rel='noreferrer' href="/">Home</a>
                            <a target='_blank' rel='noreferrer' href="/">Collections</a>
                        </div>


                        <div className='list4'>
                            <p>Follow Us</p>
                            <a target='_blank' rel='noreferrer' href="/">Facebook</a>
                            <a target='_blank' rel='noreferrer' href="/">Instagram- AJIOlife</a>
                            <a target='_blank' rel='noreferrer' href="/">Instagram- AJIO LUXE</a>
                            <a target='_blank' rel='noreferrer' href="/">Twitter</a>
                            <a target='_blank' rel='noreferrer' href="/">Pinterest</a>

                        </div>


                    </div>



                    {/* fourthdiv */}

                    <div className='fourthdiv col-12 col-lg-12 col-md-12  col-md-12'>

                        <div className="pymentmethod d-flex justify-content-between">
                            <p style={{ marginLeft: '40px' }}>Payment Methods</p>
                            <p style={{ marginRight: '40px' }}>  Secure System</p>
                        </div>

                        <div className="paymentlogo d-flex justify-content-between container" style={{ marginLeft: '30px' }}>

                            <div className="mastercardlogo">
                                <i className="fa-brands fa-cc-visa p-2" style={{ fontSize: "35px" }}></i>
                                <i className="fa-brands fa-cc-mastercard p-2" style={{ fontSize: "35px" }}></i>
                            </div>
                            <div className='d-flex gap-3'>
                                <div>
                                    <i className="fa-solid fa-lock" style={{ fontSize: '27px' }}></i>
                                </div>
                                <div className='' style={{ marginRight: '-60px' }}>
                                    <p style={{ fontSize: '10px' }} className=''>256 BIT <br />
                                        <span style={{ fontSize: '10px' }}>ENCRYPTION</span>
                                    </p>
                                </div>
                            </div>

                        </div>




                    </div>






                </div>
            </footer>


        </div>
    )
}
