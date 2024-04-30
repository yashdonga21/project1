import React, { useState } from 'react';
import './Pay.css';

const Pay = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

    const payment = () => {
        setIsLoading(true);
        setIsPaymentSuccess(false);
        setTimeout(() => {
            setIsLoading(false);
            setIsPaymentSuccess(true);
        }, 3000);
    };

    const hide = () => {
        setIsPaymentSuccess(false);
    };

    return (
        <div>
            {isLoading && (
                <div className="first-loader">
                    <div class="hourglassBackground">
                        <div class="hourglassContainer">
                            <div class="hourglassCurves"></div>
                            <div class="hourglassCapTop"></div>
                            <div class="hourglassGlassTop"></div>
                            <div class="hourglassSand"></div>
                            <div class="hourglassSandStream"></div>
                            <div class="hourglassCapBottom"></div>
                            <div class="hourglassGlass"></div>
                        </div>
                    </div>
                </div>
            )}

            {!isPaymentSuccess && !isLoading && ( // Only render the card section if not loading and not payment success
                <div className="debitcard">
                    <section className="add-card page">
                        <form className="form">
                            <label htmlFor="name" className="label">
                                <span className="title">Card holder full name</span>
                                <input className="input-field" type="text" name="input-name" title="Input title" placeholder="Enter your full name" />
                            </label>
                            <label htmlFor="serialCardNumber" className="label">
                                <span className="title">Card Number</span>
                                <input id="serialCardNumber" className="input-field" type="text" name="input-name" title="Input title" placeholder="0000 0000 0000 0000" maxLength="12" />
                            </label>
                            <div className="split">
                                <label htmlFor="ExDate" className="label">
                                    <span className="title">Expiry Date</span>
                                    <input id="ExDate" className="input-field" type="text" name="input-name" title="Expiry Date" placeholder="01/23" />
                                </label>
                                <label htmlFor="cvv" className="label">
                                    <span className="title"> CVV</span>
                                    <input id="cvv" className="input-field" type="text" name="cvv" title="CVV" placeholder="CVV" maxLength="3" />
                                </label>
                            </div>
                            <input className="checkout-btn" type="button" value="Payment" onClick={payment} />
                        </form>
                    </section>
                </div>
            )}

            {isPaymentSuccess && (
                <div className="debitpayment d-flex justify-content-center align-items-center">
                    <div className="Paymentcard" style={{ border: '1px solid', borderColor: '#b5a8a8' }}>
                        <button type="button" className="dismiss" onClick={hide}>×</button>
                        <div className="header">
                            <div className="image">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000"
                                            d="M20 7L9.00004 18L3.99994 13"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="content">
                                <span className="title">Order validated</span>
                                <p className="message">Thank you for your purchase. Your package will be delivered within 2 days of your purchase.</p>
                            </div>
                            <div className="actions">
                                <button type="button" className="history" onClick={hide}>Ok</button>
                                <button type="button" className="track">Track my package</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pay;







