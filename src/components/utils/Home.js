import React from "react";
import Hometext from "./hometext.js";
import "../../css/home.css";

export default function Home() {
  return (
    <>
      <div>
        <div className="container-fluid text-center ">
          <div className="jumbotron">
            <img className="homologo" src={`../images/utils/logo-aero2.png`} />
            <h1 className="head">
              <Hometext />
            </h1>

            {/* <p className="text-center fontdes">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Fill in Contents</a></p> */}
          </div>
        </div>
      </div>
    </>
  );
}
