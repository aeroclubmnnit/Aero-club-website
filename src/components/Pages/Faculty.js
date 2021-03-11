import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/gallery/faculty1.jpeg";
import f2 from "../../images/gallery/faculty2.jpeg";
import f3 from "../../images/gallery/faculty3.jpeg";

export default function Faculty() {
  useEffect(() => {
    document.title = `Faculty | ${process.env.REACT_APP_BASE_TITLE}`;
  }, [])
  return (
    <>
      <Loading time={2} />
      <div className=" pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Faculty Incharge</div>
        </div>
      </div>
      <div className="faculty container">
        <div
          className="container rounded border d-flex flex-column flex-md-row justify-content-center 
        align-items-center my-5 shadow"
        >
          <div class="card mx-3 border col-10 col-md-5 col-lg-4 shadow">
            <img src={f2} class="card-img-top mt-3" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center text-uppercase">
                Dr. Venkateswara Rao Komma
              </h5>
              <p class="card-text text-center">
                Associate Professor, Department of Mechanical Engineering
              </p>
              <a
                href="http://www.mnnit.ac.in/images/newstories/2021/med/cv/Dr._V.R._Komma_Profile.pdf"
                class="btn btn-danger mx-auto"
                target="_blank"
              >
                Know More
              </a>
            </div>
          </div>

          <div className="content col-10 col-md-6 col-lg-7 mx-auto my-5 align-self-start">
            If you’re not making some notable mistakes along the way, you’re
            certainly not taking enough chances. <br /> Aeroclub and Astrowing
            of MNNIT are the places where one not only learns but most
            importantly make mistakes. <br /> From building planes and drones to
            understanding telescopes , from viewing and analysing celestial
            spheres to studying the mechanism of real life problems, the
            students never fail to propose innovative ideas. Under the umbrella
            of these clubs students have not only built numerous projects but
            have created a place for themselves by winning many events. They've
            cultivated themselves to use resources in advancement of the present
            day technology. I take pride in being the faculty incharge of such
            technical clubs where even failure is celebrated. I wish them all
            the success, may they conquer every kingdom they visit! <br />
            <br />
            <em className="float-right"> - Dr V.R. Komma</em>
          </div>
        </div>
        <div
          className="container rounded border d-flex flex-column flex-md-row justify-content-center 
          align-items-center my-5 shadow"
        >
          <div class="card mx-3 border col-10 col-md-5 col-lg-4 shadow">
            <img src={f1} class="card-img-top mt-3" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center text-uppercase">
                Dr. Rajesh Gupta
              </h5>
              <p class="card-text text-center">
                Professor, Electrical Engineering Department <br />
                Senior Member IEEE <br />
                President Student Activity Center <br />
              </p>
              <a
                href="http://www.mnnit.ac.in/images/newstories/2021/eed/CV_Rajesh_Gupta_Jan2021.pdf"
                class="btn btn-danger mx-auto"
                target="_blank"
              >
                Know More
              </a>
            </div>
          </div>

          <div className="content col-10 col-md-6 col-lg-7 mx-auto my-5 align-self-start">
            When it comes to aero club, it makes me feel that I am flying with
            my students. The aero club of MNNIT is known for its innovations in
            air. The engineering knowledge and skill, combined with
            multidisciplinary club members at MNNIT are responsible for
            executing high performance carriers in air . I find myself proud to
            say that our Aero Club has played a significant role in spreading
            and imparting these knowledge and skills since its foundation. These
            years of hard work and persistence has resulted in the completion of
            a number of projects and helped the club winning accolades in
            multiple national level events. The prosperity of the club was such
            that it resulted in an offshoot, Astrowing itself, which focuses
            entirely upon the field of Astronomy and core physics. In future, I
            hope, both the clubs will carry on their exertion,and will achieve
            success of astronomical proportions.
            <br />
            <br />
            <em className="float-right"> - Dr. Rajesh Gupta</em>
          </div>
        </div>
        <div
          className="container rounded border d-flex flex-column flex-md-row justify-content-center 
          align-items-center my-5 shadow"
        >
          <div class="card mx-3 border col-10 col-md-5 col-lg-4 shadow">
            <img src={f3} class="card-img-top mt-3" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center text-uppercase">
                Dr. D.K. Shukla
              </h5>
              <p class="card-text text-center">
                Associate Professor MED, Faculty In-charge
              </p>
              <a
                href="http://www.mnnit.ac.in/images/newstories/2021/med/cv/Dr._Dharmendra_Kumar_Shukla_Profile.pdf"
                class="btn btn-danger mx-auto"
                target="_blank"
              >
                Know More
              </a>
            </div>
          </div>

          <div className="content col-10 col-md-6 col-lg-7 mx-auto my-5 align-self-start">
            When praising one another, people often use the statement “Sky's the
            limit for you.”, but with the ceaseless success of our Aero Club,
            since its foundation in 2018, one has to admit that they have made
            the sky their home. Here, curious minds, from across the college,
            have come together, working across all the domains in the aerospace
            sector ranging from RC planes to design, from aerodynamic analysis
            to autonomous drones. The club has completed numerous projects,
            participated and won accolades in multiple national level events. If
            these weren’t the achievement enough, the club has also laid the
            path for the foundation of a separate branch, Astrowing, moving
            beyond the sky, focussing on the universe beyond the Earth’s
            atmosphere, and on the ever-alluring physics. Being a faculty
            in-charge to such a club is a matter of great pride and
            responsibility. I wish them the best of luck for their future
            endeavours.
            <br />
            <br />
            <em className="float-right"> - Dr. D.K. Shukla</em>
          </div>
        </div>
      </div>
    </>
  );
}
