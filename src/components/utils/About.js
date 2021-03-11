import React from 'react'
import '../../css/About.css'
import { Button, Container, Jumbotron } from 'react-bootstrap'

export default function About() {
    return (
        // <div className="jumbotron">
        <section>
        <div className="grid-flex">
          <div className="col col-image" style={{backgroundImage: 'url(https://scontent.fpat2-2.fna.fbcdn.net/v/t1.0-9/57852671_373889363215608_4849523753748529152_o.jpg?_nc_cat=101&ccb=3&_nc_sid=cdbe9c&_nc_ohc=gKTa9FdeU_0AX_PbQ1L&_nc_ht=scontent.fpat2-2.fna&oh=68602943dcc3757224cc0cf543d2af99&oe=6058BCAF)'}} data-aos="zoom-in">
          </div>
          <div className="col col-text">
            <div className="Aligner-item">
            <div className="pageTitle titleBold headingc white-headingc" style={{marginBottom:'5px', color:'white'}} data-aos="fade-down">ABOUT US</div>
            <div className="miniSep" style={{marginBottom:'10px'}} ></div>
              <p className="abttxt" data-aos="zoom-in" style={{paddingBottom:'10px'}}> AeroClub MNNIT, established in 2018, is a student body congregating students from various branches of our college.
                    Here we work across all the domains in the aerospace sector ranging from RC planes to design, from aerodynamic analysis to autonomous drones, and then to astronomy. Equipped with all the obligatory facilities, we have completed 50+ projects, participated and won accolades in multiple national level events. Our club has also been the birthplace of a startup: TSAW, in the drone sector, which is gaining ground in the field and as a company.
                    We are closely working with the industries and are well-versed in Aerospace technology with our members regularly acquiring jobs with lucrative packages in tech giants, internships in IITs, research labs and organisations like ISRO, TATA Aerospace and various tech companies.
                    We have 3+ years of experience in the robotics and aerospace sector, carried out and mentored many projects and are excited to help you propel your journey into the world of aerospace.
                {/* <cite>- Maya Angelou</cite> */}
              </p>
            </div>
          </div>
        </div>
        
      </section>

    )
}
