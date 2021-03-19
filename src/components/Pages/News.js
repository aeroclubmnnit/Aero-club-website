import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Container, Jumbotron } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import createHistory from "history/createBrowserHistory";
import Loading from "../../Animations/Loading";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import "../../css/news.css";

export default function News() {

  const [news, SetNews] = useState([]);
  const [eventKey, setEventKey] = useState("");

  useEffect(() => {
    document.title = `Updates | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/news/public`, {
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
          }}>
          <Container>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" activeKey={eventKey}
              onSelect={(e) => setEventKey(e)}
              style={{ margin: "1.5rem" }}>
              {news.map((singleNews, i) => (
                <div className="panel panel-default" key={singleNews.id}
                  style={{ padding: "0.15rem" }}
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <div className="panel-heading" role="tab" id="headingOne"
                    eventKey={singleNews.id}
                    style={{ fontSize: "1.3rem" }}>
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${singleNews.id}`} aria-expanded="false" aria-controls={`collapse${singleNews.id}`} >
                        {/* <div> */}
                        {singleNews.title}

                        {/* </div> */}
                      </a>
                    </h4>
                  </div>
                  <div id={`collapse${singleNews.id}`} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" eventKey={singleNews.id}>
                    <div className="panel-body my-3 mx-4">
                      <em
                        style={{ fontSize: "small" }}
                      >
                        Published on ~ {new Date(
                        singleNews.publishedAt
                      ).toLocaleDateString()}
                      </em>
                    </div>
                    <div className="panel-body my-5 mx-4" dangerouslySetInnerHTML={{ __html: singleNews.body }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
}
