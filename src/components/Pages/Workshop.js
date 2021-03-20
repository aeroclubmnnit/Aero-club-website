import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import "../../css/Event.css";
import {Link} from 'react-bootstrap';
import Loading from "../../Animations/Loading";
import m from "../../images/utils/Jigyasa_logo.png";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Workshop() {
  useEffect(() => {
    document.title = `Jiygasa | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const [workshops, SetWorkshops] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/workshop`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetWorkshops(data));
  }, []);


  return (
    <>
      <Loading time={2} />
      <section className="section1 pagese ">
        <div className="overlaye">
          <div className="containere ">
            <h1 className="titlee">
              <div className="pageTitlee titleBolde">
                {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                Jigyasa
                {/* </div> */}
              </div>
            </h1>
            <div className="content-wrapper">
              <div className="img-wrapper">
                <div className="img imgev">
                  <img
                    src={m}
                    alt="jigyasa"
                    srcSet=""
                    style={{ alignItems: "center" }}
                  />
                </div>
              </div>
              <div className="text-wrapper" style={{ border: "2px solid white", borderRadius: "10px", padding: "10px", textAlign: "justify" }}>
                <p className="texte">
                  Jigyasa is the workshop venture of the Technical clubs of
                  MNNIT, namely Robotics, Astrowing and AeroClub, motivated by
                  the desire to supplement education with the present day
                  industry requirements, thus making the participants future
                  ready with a STEM mindset.
                </p>
                <p className="texte">
                  The workshops under Jigyasa will help the students in
                  acknowledging real-life applications of science/engineering,
                  through various projects, activities and interactive sessions.
                  Hence, by emphasizing on innovation and imagination, this
                  workshop will incite in their minds, a profound technical
                  temperament and fascination towards STEM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Jumbotron
        fluid
        style={{
          background: "white",
          width: "100%",
          margin: "auto",
          paddingBottom: "1rem",
        }}>
        <Container>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" activeKey={workshops}
            onSelect={(e) => SetWorkshops(e)}
            style={{ margin: "1.5rem" }}>
            {workshops.map((singleNews, i) => (
              <div className="panel panel-default" key={singleNews.id}
                style={{ padding: "0.15rem" }}
                data-aos="fade-up"
                data-aos-duration="1000">
                <div className="panel-heading" role="tab" id="headingOne"
                  eventKey={singleNews.id}
                  style={{ fontSize: "1.3rem" }}>
                  <h6 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${singleNews.id}`} aria-expanded="false" aria-controls={`collapse${singleNews.id}`} >
                      {singleNews.title}
                      <div className="panel-body" dangerouslySetInnerHTML={{ __html: singleNews.about }} style={{width: "70%"}}></div>
                      <div className="panel-body">
                        <em
                          style={{ fontSize: "small" }}
                        >
                          --  {new Date(
                          singleNews.date
                        ).toLocaleDateString()}
                        </em>
                      </div>
                    </a>
                    
                  </h6>
                </div>
                <div id={`collapse${singleNews.id}`} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" eventKey={singleNews.id}>

                  <a className="panel-body" dangerouslySetInnerHTML={{ __html: singleNews.brochure }} style={{color:"white"}}>Brochure Link</a>

                </div>
              </div>
            ))}

          </div>

        </Container>
      </Jumbotron>

      {/* <Jumbotron
        fluid
        style={{
          background: "white",
          width: "100%",
          margin: "auto",
          paddingBottom: "1rem",
        }}
        className='my-5'
      >
        <Container>
          <div className="container">
            <Accordion>
              {workshops.map((singlews) => (
                <Card key={singlews.id}>
                  <Card.Header style={{ cursor: "pointer" }}>
                    <Accordion.Toggle as={Card.Header} eventKey={singlews.id}>
                      <div>
                        {singlews.name}
                        <em
                          className="float-right"
                          style={{ fontSize: "10px" }}
                        >
                          -on
                          {new Date(singlews.date).toLocaleDateString()}
                        </em>
                        <div
                          dangerouslySetInnerHTML={{ __html: singlews.about }}
                        ></div>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={singlews.id}>
                    <Card.Body
                      dangerouslySetInnerHTML={{ __html: singlews.brochure }}
                    ></Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </div>
        </Container>
      </Jumbotron> */}
    </>
  );
}
