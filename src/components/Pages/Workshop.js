import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import "../../css/Event.css";
import Loading from "../../Animations/Loading";
import m from "../../images/utils/Jigyasa_logo.png";

export default function Workshop() {
  useEffect(() => {
    document.title = `Jiygasa | ${process.env.REACT_APP_BASE_TITLE}`;
  }, [])

  const [workshops, SetWorkshops] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/workshop`, {
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
              <div className="text-wrapper">
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
        }}
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
      </Jumbotron>
    </>
  );
}
