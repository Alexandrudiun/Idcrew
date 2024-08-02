
import React from 'react'
import '../../components/about/about.css'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className="about-container">
      <a href="#" class="btn-shine">About Us</a>
      <div className="about-wrapper">

        <div className="alex">
          <section className="education" id="education">
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020 - 2024</div>
                <div className="timeline-content">
                  <h3>Highschool</h3>
                  <p>Ovidius Theoretical Highschool Constanta</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024 - present </div>
                <div className="timeline-content">
                  <h3>Politehnica University of Bucharest</h3>
                  <p>Faculty of Automatic Control and Computer Science
                    <br /> <br /> Automatic control and systems engineering
                  </p>
                </div>
              </div>
              
            </div>
          </section>
        </div>
        
        <div className="card">
          <img src={profile} alt="" />
          <div className="card__content">
            <p className="card__title">Who we are ?</p>
            <p className="card__description">I&D Crew, comprised of Ionescu Andrei and Dinu Alexandru, is a talented full-stack developer team based in Constanța, Romania. We are students at the University of Politehnica Bucharest (UPB) and have a proven track record of success, having won numerous hackathons and completed significant projects. Together, we specialize in creating comprehensive and efficient web solutions, ensuring a seamless integration of front-end design and back-end functionality.</p>
          </div>
        </div>

        <div className="andrei">
        <section className="education" id="education">
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020 - 2024</div>
                <div className="timeline-content">
                <h3>Highschool</h3>
                <p>Ovidius Theoretical Highschool Constanta</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024 - present</div>
                <div className="timeline-content">
                  <h3>Politehnica University of Bucharest</h3>
                  <p>Faculty of Engineering in Foreign Languages
                    <br /><br />
                    Computers and information technology
                  </p>
                </div>
              </div>
              
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default About
