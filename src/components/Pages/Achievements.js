import React, { useEffect, useState } from "react";
import Loading from "../../Animations/Loading";
import "../../css/news.css";
import '../../css/Achievements.css'
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { EmojiEvents } from '@material-ui/icons'

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);
  document.title = `Achievements | ${REACT_APP_BASE_TITLE}`;
  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/achievement`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAchievements(data)
      });
  }, []);
  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Our Achievements</div>
          <div className="py-2">
            <p
              className="font-italic text-center my-5 quote"
              style={{ fontSize: "1.5rem" }}
            >
              "Only those who attempt the absurd can achieve the impossible" ~ Albert Einstein
              
          </p>
          </div>
        </div>
      </div>
      <div className="container my-5 col-11 col-md-12">
        <VerticalTimeline>
          {
            achievements.map(achievement => (
              <VerticalTimelineElement
                key={achievement.id}
                className="vertical-timeline-element--work"
                contentStyle={{ boxShadow: 'rgb(167, 166, 166) 0px 0px 20px -3px', color: 'black', }}
                date={`${new Date(achievement.date).toLocaleString('default', { month: 'long' })}, ${new Date(achievement.date).getFullYear()}`}
                iconStyle={{ background: 'red', color: '#fff' }}
                icon={<EmojiEvents />}
              >
                <div className='my-4'>
                  <div className="vertical-timeline-element-title achievement-title text-center" dangerouslySetInnerHTML={{
                    __html: achievement.desc,
                  }}></div>
                  <div className='text-center achievement-member'>
                    <p>Team Members : </p>
                    {
                      achievement.team.map((member, i) => (
                        <p className="d-inline team" key={i}>
                          {
                            <>{
                              member.lurl ?
                                <a href={member.lurl} target="_blank">{member.name} </a>
                                : member.name
                            }
                              {i !== achievement.team.length - 1 ? ', ' : null}
                            </>
                          }
                        </p>
                      ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </div>

    </>
  );
}
