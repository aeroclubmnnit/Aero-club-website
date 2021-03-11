import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import createHistory from "history/createBrowserHistory";
import Loading from "../../Animations/Loading";

export default function News() {

  const [news, SetNews] = useState([]);
  const [eventKey, setEventKey] = useState("");

  useEffect(() => {
    document.title = `Updates | ${process.env.REACT_APP_BASE_TITLE}`;
    fetch(`${process.env.REACT_APP_SERVER}/api/news`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetNews(data));

    const history = createHistory();
    if (history.location.state && history.location.state.key && news.length) {
      setEventKey(history.location.state.key);
      scroll.scrollTo(
        document
          .getElementById(history.location.state.key)
          .getBoundingClientRect().top
      );
      let state = { ...history.location.state };
      delete state.key;
      history.replace({ ...history.location, state });
    }
  }, [news]);

  return (
    <>
      <Loading time={2} />
      <div>
        <div className="pagesg">
          <div className="overlayg">
            <div className="pageTitleg titleBoldg">Updates</div>
          </div>
        </div>
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
            <div className="container" id="123456789">
              <Accordion
                activeKey={eventKey}
                onSelect={(e) => setEventKey(e)}
                style={{ margin: "1.5rem" }}
              >
                {news.map((singleNews) => (
                  <Card
                    key={singleNews.id}
                    id={singleNews.id}
                    style={{ padding: "0.15rem" }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <Card.Header style={{ cursor: "pointer" }}>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={singleNews.id}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <div>
                          {singleNews.title}
                          <em
                            className="float-right"
                            style={{ fontSize: "small" }}
                          >
                            {new Date(
                              singleNews.publishedAt
                            ).toLocaleDateString()}
                          </em>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={singleNews.id}>
                      <Card.Body
                        dangerouslySetInnerHTML={{ __html: singleNews.body }}
                      ></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
}
