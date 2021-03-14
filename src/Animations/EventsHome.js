import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Eventhome.css";
export default function EventHome() {
  const [news, SetNews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/news/public`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetNews(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="pages">
        <div className="jumbotron overlay" style={{ marginBottom: "0" }}>
          <div
            className="pageTitle titleBold headingc white-headingc"
            style={{ color: "white", marginBottom: "10px" }}
            data-aos="fade-down"
          >
            Updates
          </div>
          <div className="miniSep"></div>
          <div
            className="containernews leftText pageTextCont"
            style={{ background: "transparent" }}
            data-aos="fade-down"
          >
            <div className="tickerv-wrap" data-aos="zoom-in-down">
              <ul>
                {news.map((singleNews) => (
                  <div
                    style={{ padding: "10px", cursor: "pointer" }}
                    key={singleNews.id}
                    onClick={() => {
                      history.push({
                        pathname: "/news",
                        state: {
                          key: singleNews.id,
                        },
                      });
                    }}
                  >
                    <li className="font-change1" style={{ fontSize: "21px" }}>
                      {singleNews.title}
                      <span
                        className="float-right font-change2"
                        style={{ fontSize: "15px" }}
                      >
                        {" "}
                        ~{" "}
                        {new Date(singleNews.publishedAt).toLocaleDateString()}
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <p className="cent">
              <a
                className="btn btn-danger"
                href="/news"
                role="button"
                style={{ marginTop: "20px" }}
              >
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
