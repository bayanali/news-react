import React from 'react';
import './footer.css';
import logo from '../../images/logo.png';
import ListItems from './li';
import Form from './form'


const footer = () => {
    return (

      <footer className = "page-footer">
          <div className = "container">
              <div className = "row">
                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                      <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>

                  <div className = "col-md-1">
                    <ListItems/>
                  </div>
              </div>

              <br/><br/><br/>

              <div className = "row">
                  <div className = "col-md-2">
                    <div className = "edit-logo">
                        <img src= {logo} className = "img-fluid"/>
                    </div>
                  </div>

                  <div className = "col-md-4 offset-md-1">
                      <h5>Find <em>NEWSEXTRA</em> around the world</h5>
                      <h6>Select country from the list</h6><br/>
                        <select>
                            <option value ="Egypt">EGYPT</option>
                            <option value ="Saudi Arabia">SAUDI ARABIA</option>
                       </select>
                  </div>

                  <div className = "col">
                      <h5>Follow us on</h5>
                      <h6>Social media channels</h6>

                      <div className = "icons"><br/>
                          <div className = "row">
                              <div className = "col-1">
                                  <a className = "fa fa-facebook" href="#"> </a>
                              </div>
                              <div className = "col-1">
                                  <a className = "fa fa-twitter" href="#"> </a>
                              </div>
                              <div className = "col-1">
                                  <a className = "fa fa-linkedin" href="#"> </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className = "col">
                      <h5>Get the best of <em>NEWSEXTRA</em></h5>
                      <h6>Sign up for our newsletter</h6><br/>
                      <Form/>
                  </div>
              </div>
          </div>
      </footer>

    )
};

export default footer;
