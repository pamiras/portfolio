import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                        
                        <Typist>
                          <h1>Hello world.</h1>
                          <Typist.Delay ms={500} /> 
                          <br /> 
                          <h1> I'm Pamira, <br /> lovely to meet you! </h1>
                        </Typist>

                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1dqroJmbxbtXI6JDWaWlbvgazqzFcDu2jKlzQo9_BMew/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I'm an ECE student<br /> @ UBC</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/presentation/d/1eFl-kKfkIqj2Eic_XELULOpavWW67ubv53rggVAl3Ys/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I also like<br/>being creative</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://pamiras.wixsite.com/myportfolio" target="_blank" rel="noopener noreferrer">View Design Portfolio <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
