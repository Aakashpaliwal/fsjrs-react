import React, { Component } from 'react'
import './Home.css';
export class Home extends Component {
  state = {
    user_name: "",
     email : "",
     subject : "",
     message : ""
 
   };
   change  = e => {
     this.setState ({
       [e.target.name]: e.target.value
     });
   };
   onSubmit = e =>
   {
       e.preventDefault();
       console.log(this.state);
       this.setState ({
        user_name: "",
        email : "",
        subject : "",
        message : ""
     
       })
   };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
      <div className="slider-custom" id="home">
        <div className="">
          <div className="">
            <div className="">
            <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../images/banner1.jpg')} alt="Los Angeles" className="img-fluid"/>
      <div class="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={require('../images/banner2.jpg')} alt="Chicago" className="img-fluid"/>
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={require('../images/banner3.jpg')} alt="New York" className="img-fluid"/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
            </div>
          </div>
        </div>

      </div>



    {/* END SLIDER HERE */}
    {/*welcome content */}
      <div className="welcome-content" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p className="header-para">WHAT MAKES US DIFFERENT</p>
              <h2 className="text-center">About <span className="custom-h2">US</span></h2>
              <hr className="below-header-hr"></hr>
              <p className="below-para"><em>We are committed to ensure success of our clients</em></p>
            </div>
          </div>
          <div className="row second-custom-row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>We are company with the team of experts who has experience in design and development of websites, e-commerce solutions, custom web applications and mobile applications. We are strong advocate of customer satisfaction. After development we remain constantly in touch with you offering highest support. We also provide excellent quality SEO service.</p>
           <p className="below-sec-row-para"><em>We are committed to ensure success of our clients.</em></p>
           <ul>
              <li>Website Development</li>
              <li>Mobile Application</li>
              <li>Search Engine Optimization</li>
              <li>Support & Maintenance</li>
             </ul>
            </div>
            </div>
          </div>
        </div>
     


    {/* ende welcome content */}
    {/*custom-middle-contetn */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-padd">
                <div className="custom-left-content">
                <h1>Build your website for free.&nbsp;&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i></h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-padd">
                <div className="custom-right-content text-center center-block">
                <button type="button" className="btn btn-success custom-right-btn">Click Here</button>
                </div>
            </div>
          </div>
        </div>

    {/*end custom-middle-content */}
     {/*software solutions */}
     <div className="software-solution" id="portfolio">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p className="header-para">SOFTWARE SOLUTIONS</p>
              <h2 className="text-center"><span className="custom-h2">We</span> Carefully handle all  <span className="custom-h2">Projects</span></h2>
              <hr className="below-header-hr"></hr>
              <p className="below-para"><em>We go the extra mile.</em></p>
            </div>

            </div>

            <div className="row custom-second-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work1.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work6.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
            </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work3.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
            </div>
            </div>
          </div>
          </div>
      {/*end softwae solutions */}  
    {/* offer section */}
        <div className = "offer-content" id="service">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center">Our  <span className="custom-h2">Services</span></h2>
              <hr className="below-header-hr"></hr>
            </div>

            </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>App Development</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-rocket fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>Graphic design</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>Creative Idea</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>

              <div className="row custom-featured-row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>Marketing</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>Awesome Support</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="custom-offer-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <i className="fa fa-flask fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padding">
                      <h4>Brand Design</h4>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>



              </div>





          </div>
        </div>



    {/* end offer section */}
    {/* Pricing plan
      <div className="pricing-content" id="price">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">Pricing Table</h2>
              <hr className="below-header-hr"></hr>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>basic plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>silver plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>gold plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>
          </div>
        </div>
      </div>
 */}

    {/*end pricing plan*/}
    {/*get in touch*/}
      <div className="contact-content" id="contact">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">Get In Touch</h2>
              <hr className="below-header-hr"></hr>
            </div>
          </div>  

          <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center custom-headers">
              <h2 className="text-center">Find  <span className="custom-h2">Us</span></h2>
              <hr className="below-header-hr"></hr>
              <p className="below-para"><em>At one of our service centres.</em></p>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1536779156056" frameborder="0" allowfullscreen></iframe>
             </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 custom-headers">
              <h2 className="text-center">Leave  <span className="custom-h2">a message</span></h2>
              <hr className="below-header-hr"></hr>
              <p className="below-para"><em>We will give you the help you need.</em></p>
             <div className="custom-form">
             <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

             </div>
              </div>


          </div>
          <div className="row custom-second-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
              <h4>Phone</h4>
              <p>512-423-7896</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <h4>Email</h4>
              <p>johndoe@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <h4>Address</h4>
              <p>1739 - Bubby - Drive</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    {/*end get in touch */}
          
          </div>
        
      </div>
    )
  }
}
export default Home