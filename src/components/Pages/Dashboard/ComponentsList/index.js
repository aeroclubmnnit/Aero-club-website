import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Loading from "../../../../Animations/Loading";
import CompCard from "./CompCard";

export default function CompIssue() {

  const [components, setComponents] = useState([]);
  const [types, setTypes] = useState([]);
  const [key, setKey] = useState("electronics");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/api/component/filter`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
        console.log(data);
        setTypes(Object.keys(data));
      });
  }, []);

  return (
    <div className="container">
      <Loading />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {types.map((type) => (
          <Tab eventKey={type} title={type.toUpperCase()} key={type}>
            <div className="d-flex flex-wrap">
              {components[type].map((comp) => (
                <CompCard comp={comp} />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
