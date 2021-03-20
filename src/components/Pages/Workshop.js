import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import "../../css/Event.css";
import { Link } from 'react-bootstrap';
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
        className='mb-5'
        fluid
        style={{
          background: "white",
          width: "100%",
          margin: "auto",
          paddingBottom: "1rem",
        }}>
        <div className="container">
          <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>Workshop Updates</h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <Accordion className="shadow rounded">
            {workshops.map(workshop => (
              <Card className="rounded" key={workshop.id}>
                <Card.Header style={{ cursor: "pointer" }}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={workshop.id}
                    style={{ fontSize: "1rem" }}
                  >
                    <div>
                      {workshop.name}
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={workshop.id}>
                  <Card.Body
                    className="border m-4 rounded"
                  >
                    <div className="mb-5"> <em>Published on : {new Date(workshop.date).toLocaleDateString()}</em> </div>
                    <div className="about" dangerouslySetInnerHTML={{ __html: workshop.about }}></div>
                    <a href={workshop.brochure}>Brochure Link</a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
            {workshops.length === 0 && (
              <h3 className="text-center mt-5">No Workshop Updates...!</h3>
            )}
          </Accordion>
        </div>
      </Jumbotron>
    </>
  );
}
