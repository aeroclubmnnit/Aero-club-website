import React, { useEffect, useState } from "react";
import Loading from "../../Animations/Loading";
import "../../css/news.css";
import "../../css/Alumni.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Achievements() {
  const [data, setData] = useState([]);
  document.title = `Achievements | ${REACT_APP_BASE_TITLE}`;
  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/achievement/year`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Our Achievements</div>
        </div>
      </div>

      <div className="container alumni-container mb-5 col-9">
        <div className="panel-group mb-5" id="accordion" role="tablist" aria-multiselectable="true">
          {data.map(datum => (
            <div className="panel panel-default" key={datum._id}>
              <div className="panel-heading" >
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${datum._id}`} aria-expanded="true" aria-controls={`collapse${datum._id}`} >
                    {datum._id < 2017
                      ? "Before 2017"
                      : `${datum._id}-${datum._id - 1999}`}
                  </a>
                </h4>
              </div>
              <div id={`collapse${datum._id}`} className="panel-collapse collapse show in" role="tabpanel" aria-labelledby={`${datum._id}`}>
                <div className="panel-body">
                  <div className="container" style={{ color: "white" }}>
                    {datum.achievements.map((achievement) => (
                      <div className="ml-2 ml-md-5" key={achievement._id}>
                        <ul style={{ listStyle: "initial" }}>
                          <li className="my-5 achievement">
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "large", color: "white" }}
                              dangerouslySetInnerHTML={{
                                __html: achievement.desc,
                              }}
                            ></div>
                            <div
                              className="mt-4"
                              style={{ color: 'black' }}
                            >
                              <p className="font-weight-bold d-inline">
                                TEAM MEMBERS :{" "}
                              </p>
                              {achievement.team.map((member, i) => (
                                <p className="d-block" style={{ fontWeight: '500' }} key={i}><ul><li>{member.name}</li></ul> </p>
                              ))}
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
