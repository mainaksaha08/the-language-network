import React from 'react'
import './Footer.css';
import { FaMedium } from 'react-icons/fa';



export default function Footer() {
    return (
        <div style={{ bottom: '0px', left: '0px' }}>
            <div className='bg-teal-400 w-full flex flex-row justify-evenly mt-32 px-10 py-3 h-14'>
                    <img src='/images/payments/amazon-pay-icon.svg'/>
                    <img src='/images/payments/bhim-pay-icon.svg'/>
                    <img src='/images/payments/finserv-icon.svg'/>
                    <img src='/images/payments/google-pay.svg'/>
                    <img src='/images/payments/paytm-icon.svg'/>
                    <img src='/images/payments/Razorpay.svg'/>
                    <img src='/images/payments/rupay-icon.svg'/>
                    <img src='/images/payments/upi-pay-icon.svg'/>
                </div>
            <div className="footer-contact">
                <span className='heading-1'>We're here to help</span>
                <span className='heading-2'>Get in touch with our student support team for any queries or specific needs.</span>
                <button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Contact Us</button>
            </div>
            <footer className="footer-section">
                <div className="container">


                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="/images/Logo-website.png" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <img src="/images/ISO9001-stamp.png" alt="img" />
                                        <img src="/images/Logo2.jpg" alt="img" style={{ paddingLeft: "10px" }} />
                                        <img src='/images/startupindia.png' alt='img' style={{ width: '37%', paddingTop: '16px', paddingLeft: '10px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Company</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Pricing</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">English Pricing</a></li>
                                        <li><a href="#">French Pricing</a></li>
                                        <li><a href="#">Spanish Pricing</a></li>
                                        <li><a href="#">German Pricing</a></li>
                                        <li><a href="#">Mandarin Pricing</a></li>
                                        <li><a href="#">Japanese Pricing</a></li>
                                        <li><a href="#">Korean Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Press</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021 The Language Network - All Right Reserved </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#"><img src='/images/facebook.svg' /></a></li>
                                        <li><a href="#"><img src='/images/instagram.svg' /></a></li>
                                        <li><a href="#"><img src='/images/linkedin.svg' /></a></li>
                                        <li><a href="#"><img src='/images/envelope-fill.svg' /></a></li>
                                        <li><a href="#"><img src='/images/pinterest.svg' /></a></li>
                                        <li><a href="#"><img src='/images/youtube.svg' /></a></li>
                                        <li><a href="#"><FaMedium style={{ color: '#000', fontSize: '17px' }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
