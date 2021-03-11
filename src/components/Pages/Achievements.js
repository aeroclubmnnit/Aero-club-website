import React, { useEffect, useState } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";

export default function Achievements() {
  const [data, setData] = useState([]);
  document.title = `Achievements | ${process.env.REACT_APP_BASE_TITLE}`;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/achievement/year`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
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
        <div className="panel-group mb-5" id="accordion">
          {data.map((datum, i) => (
            <div className="panel panel-default" key={datum._id}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    className={`accordion-toggle ${i !== 0 ? "collapsed" : null
                      }`}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={`#collapse${datum._id}`}
                  >
                    {datum._id < 2017
                      ? "Before 2017"
                      : `${datum._id}-${datum._id - 1999}`}
                  </a>
                </h4>
              </div>
              <div
                id={`collapse${datum._id}`}
                className={`panel-collapse collapse ${i === 0 ? "show" : null}`}
              >
                <div className="panel-body">
                  <div className="container">
                    {datum.achievements.map((achievement) => (
                      <div className="ml-2 ml-md-5" key={achievement._id}>
                        <ul style={{ listStyle: "initial" }}>
                          <li className="my-5 achievement">
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "large" }}
                              dangerouslySetInnerHTML={{
                                __html: achievement.desc,
                              }}
                            ></div>
                            <div
                              className="mt-4"
                              style={{ fontSize: "medium !important" }}
                            >
                              <p className="font-weight-bold d-inline">
                                Team members :{" "}
                              </p>
                              {achievement.team.map((member) => (
                                <p className="d-inline">{member.name}, </p>
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
