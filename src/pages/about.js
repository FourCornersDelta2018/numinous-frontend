import React, { Component } from 'react'

class About extends Component {
  render() {
      return (
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className="logo-section">
            <div className="column-x">
              <a id="about-numinous">
                About Numinous
              </a>
              <p>Numinous is a visual experience, allowing you to explore the roads less traveled by discovering unsung destinations the world over. The Numinous home page immediately invites exploration by presenting an enticing photo gallery of these destinations with no labels. Click on a photo to learn more about that destination, including high level attributes that help define the experience that destination offers.
              <br />
              <br />
              At the heart of the Numinous is the My Epic page. As a registered user, you can add any location to your own list of dream destinations to create a scrapbook of travel goals, or edit that list by removing saved desinations. Once a robust My Epic page is created, an understanding of what is important in your next vacation will begin to materialize. Return to the home page and filter the opening gallery by attributes to continue to build your own Epic.</p>
            </div>
          </div>
          <br />
          <hr width="740px" color="#1565c0"></hr>
          <div className="logo-section">
            <div className="column-z">
              <img src="/assets/teamphotos/FourCornersCrop.jpg" alt="logo"/>
            </div>
            <div className="column-x">
              <p>From the four corners of the United States, Four Corners: Queer Eye for the Straight Girl is comprised of four lovely Delta Unicorns, all (soon-to-be) graduates of the LEARN Academy in San Diego, CA. Our synergy, camaraderie, and distinct but complementary perspectives are what make us thrive. Four Corners is excited to add value and diversity to San Diego.</p>
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
