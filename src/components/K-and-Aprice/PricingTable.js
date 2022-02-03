import React from 'react';
import './K-and-A.css';

export default function PricingTable(props) {
    return <div class="demo py-20 fadeIN">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable">
                    <div class="pricingTable-header">
                        <i class="fa fa-adjust"></i>
                        <div class="price-value flex flex-col"> ₹0000 <span className='text-[1.4rem] line-through'>₹0000</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch A1</h3>
                    <div class="pricing-content">
                        <ul>
                            <li><b>1.</b> Content 1</li>
                            <li><b>2.</b> Some Content 2</li>
                            <li><b>3.</b> Other Content 3</li>
                            <li><b>4.</b> More Content 4</li>
                            <li><b>5.</b> Content 5</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="pricingTable green">
                    <div class="pricingTable-header">
                        <i class="fa fa-briefcase"></i>
                        <div class="price-value flex flex-col"> ₹0000 <span className='text-[1.4rem] line-through'>₹0000</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch A2</h3>
                    <div class="pricing-content">
                        <ul>
                            <li><b>1.</b> Content 1</li>
                            <li><b>2.</b> Some Content 2</li>
                            <li><b>3.</b> Other Content 3</li>
                            <li><b>4.</b> More Content 4</li>
                            <li><b>5.</b> Content 5</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                        <i class="fa fa-diamond"></i>
                        <div class="price-value flex flex-col"> ₹0000 <span className='text-[1.4rem] line-through'>₹0000</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch B1</h3>
                    <div class="pricing-content">
                        <ul>
                            <li><b>1.</b> Content 1</li>
                            <li><b>2.</b> Some Content 2</li>
                            <li><b>3.</b> Other Content 3</li>
                            <li><b>4.</b> More Content 4</li>
                            <li><b>5.</b> Content 5</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable red">
                    <div class="pricingTable-header">
                        <i class="fa fa-cube"></i>
                        <div class="price-value flex flex-col"> ₹0000 <span className='text-[1.4rem] line-through'>₹0000</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch B2</h3>
                    <div class="pricing-content">
                        <ul>
                            <li><b>1.</b> Content 1</li>
                            <li><b>2.</b> Some Content 2</li>
                            <li><b>3.</b> Other Content 3</li>
                            <li><b>4.</b> More Content 4</li>
                            <li><b>5.</b> Content 5</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
}
