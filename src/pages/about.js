import React, { Component } from 'react'

class About extends Component {
  render() {
      return (
        <div id="about">
        <br />
        <br />
        <br />
          <div className="logo-section">
            <div className="column-z">
              <img src="/assets/teamphotos/FourCornersCrop.jpg" alt="logo"/>
            </div>
            <div className="column-x">
              <p>From the four corners of the United States, Four Corners: Queer Eye for the Straight Girl is comprised of four lovely Delta Unicorns, all (soon-to-be) graduates of the LEARN Academy in San Diego, CA. Our synergy, cameraderie, and distinct but complementary perspectives are what make us thrive. Four Corners is excited to add value and diversity to San Diego.</p>
            </div>
          </div>
          <section>
            <div className="column-y">
              <img src="/assets/teamphotos/SarahProctor.jpg" alt="Headshot woman"/>
              <h3>Sarah Proctor</h3>
              <p>Our resident wild-card, Sarah represents the NorthWest corner with her Idaho roots. A long career in upscale dining and bar management has equiped Sarah with the patience, determination, and organizational accumen that makes her a cornerstone of the Four Corners team.</p>
            </div>
            <div className="column-y">
              <img src="/assets/teamphotos/KevinKochanski.jpg" alt="Headshot man"/>
              <h3>Kevin Kochanski</h3>
              <p>Baltimore born and raised, Kevin represents the NorthEast corner on our team. After graduating from NYU, he remained in New York in the publishing industry, and relocated to San Diego in 2016 after several years managing data for a market research company in Atlanta.</p>
            </div>
          </section>
          <section>
            <div className="column-y">
              <img src="/assets/teamphotos/TriciaSykes.jpg" alt="Headshot woman"/>
              <h3>Tricia Sykes</h3>
              <p>Though Born in Boston, Tricia has called California home for most of her life and represents our SouthWest corner. With a degree from UCSD, Tricia brings a passion for change and service to the tech industry from her prior career as a health and wellness coach.</p>
            </div>
            <div className="column-y">
              <img src="/assets/teamphotos/CaitlinJohnson.jpg" alt="Headshot woman"/>
              <h3>Caitlin Johnson</h3>
              <p>After being raised in Georgia—our SouthEast corner—and residing in multiple places across the nation, Caitlin is proud to call San Diego home. Currently, Caitlin is a full-stack developer who is endeavoring to amplify her impact around the world through web development.</p>
            </div>
          </section>
        </div>
      )
  }
}
export default About
