import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <div className="custom-footer">
        <footer className="container">
            <p className="float-right"><a href="#"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a></p>
            <p className="text-center">&copy; 2017-2018 Edunomics. All rights reserved.</p>
      </footer>
      </div> */}
         {/*footer */}
         <footer className="custom-footer-section text-center center-block">
        <div className="container">
          <div className="row">
          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">logo</h2>
            </div> */}

          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="custom-footer-social text-center center-block">
             <ul className="list-inline">
                <li className="list-inline-item">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-youtube" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </li>

            </ul>
            </div>
          </div> */}

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>Copyright &copy; 2018.All Rights Reserved.Designed By <strong>NEO404</strong></p>
          </div>


          </div>
        </div>
      </footer>

    {/* end foter */}
      </div>
    )
  }
}

export default Footer
