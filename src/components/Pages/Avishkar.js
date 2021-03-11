import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Event.css";
import m from "../../images/utils/avishkar.png";

export default function Avishkar() {
    useEffect(() => {
        document.title = `Avishkar | ${process.env.REACT_APP_BASE_TITLE}`;
    }, [])

    return (
        <>
            <Loading time={2} />
            <section className="section1 pagese ">
                <div className="overlaye">
                    <div className="containere ">
                        <h1 className="titlee">
                            <div className="pageTitlee titleBolde">
                                {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                Avishkar
                {/* </div> */}
                            </div>
                        </h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev">
                                    <img
                                        src={m}
                                        alt="avishkar"
                                        srcset=""
                                        style={{ alignItems: "center" }}
                                    />
                                </div>
                            </div>
                            <div
                                className="text-wrapper"
                                style={{
                                    border: "2px solid white",
                                    borderRadius: "10px",
                                    padding: "10px",
                                }}
                            >
                                {/* <div > */}
                                <p className="texte">
                                    MNNIT's techno management festival Avishkar is held every year
                                    in the month of September. Equipped with technical and
                                    managerial events, Avishkar is the best platform for students
                                    to learn and build their CVs. With the teaching classes
                                    starting almost a month before the D-day, and being mentored
                                    by extremely capable seniors, it is indeed an opportunity for
                                    students to hone their skills and build a good network.
                                    Avishkar and Gnotalks go hand in hand and one is exposed to
                                    great personalities' heart touching and inspirational
                                    struggles and their journey.
                </p>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className=" pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Avishkar
                            </div>
                </div>
            </div> */}
            {/* <Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    {/* <div className="pageTitle titleBold">
                        AVISHKAR
                    </div> */}
                    {/* <div className="miniSep"></div> */}
                    <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                        <div class="sm:w-2/3 sm:mr-10">
                            <div class="text">
                                {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 class="font-bold text-3xl my-4 sm:text-4xl">
                                    <span class="text-indigo-600 font-bold cent">About the Event</span>
                                </h2>
                                <div className="bgBox phonev"
                                    style={{
                                        border: "3px solid rgb(204, 67, 67)",
                                        padding: "2px",
                                        borderRadius: "8px",
                                        margin: "2em",
                                        fontSize: "14px"

                                    }}
                                >
                                    <div style={{ padding: "10px" }}>
                                        <p class="text-gray-700 texte" style={{ fontSize: "16px" }}><i>
                                            MNNIT's techno management festival Avishkar is held every
                                            year in the month of September. Equipped with technical
                                            and managerial events, Avishkar is the best platform for
                                            students to learn and build their CVs. With the teaching
                                            classes starting almost a month before the D-day, and
                                            being mentored by extremely capable seniors, it is indeed
                                            an opportunity for students to hone their skills and build
                                            a good network. Avishkar and Gnotalks go hand in hand and
                                            one is exposed to great personalities' heart touching and
                      inspirational struggles and their journey.</i>
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bgBox"
                        style={{
                            border: "3px solid rgb(204, 67, 67)",
                            padding: "2px",
                            borderRadius: "8px",
                            margin: "2em",
                            fontSize: "14px"

                        }}
                    >
                        <div style={{ padding: "10px" }} className="texte">


                            <p class="text-gray-700" style={{ fontSize: "16px" }}><i>
                                All the college departments and technical clubs of MNNIT conduct multiple exciting competitions during Avishkar, which are open to students of MNNIT and students all across the nation. These competitions witness cut-throat competitors every year and truly bring alive the "Ideate, Innovate and Create" spirit amongst budding technocrats. </i>
                            </p>
                            <p class="text-gray-700" style={{ fontSize: "16px" }}><i>
                                Apart from these competitions, many inspiring talks by eminent people in the industry and academia and other activities also happen during Avishkar, enlightening and preparing its participants for many challenges that lie ahead.</i>
                            </p>
                            <p className="text-gray-700" style={{ textAlign: "justify" }}>
                                <i style={{ fontSize: "medium" }}>As a technical club, Aeroclub MNNIT organizes four events competitions during Avishkar under the name Aerodynamix:</i><br></br><br></br><ul className="ulprosang">
                                    <li><b>Phantom: </b>
This competition involves aircraft design and simulation using various software like Solidworks, Fusion 360, Ansys, OpenVSP, etc. It also requires building, flying, and executing multiple maneuvers with remote controlled aircraft. Many rounds in this event will grill you and test your knowledge of design.</li><br></br>
                                    <li><b>Guardian: </b>
This competition involves building and flying drones, executing various maneuvers, and writing controllers and codes for automating the drone and controlling them.</li><br></br>
                                    <li><b>Lost in Space: </b>
Astrowing, under Aeroclub, organizes the competition ‘Lost in Space’ in MNNIT. An enlightening yet fun event, LIS mainly deals with astronomy, space science, and theoretical aspects. For more details, refer to (Link)</li><br></br>
                                    <li><b>RC Airshow: </b>
Aeroclub organises an RC Airshow where professional aeromodellers amuse the audience with exciting planes, drones and flying skills. It is one of the most thrilling events to watch.</li><br></br>


                                </ul>
                            </p>

                        </div>
                    </div>


                    <div>
                        <p className="cent">
                            <a
                                class="btn btn-outline-dark btn-lg"
                                data-toggle="collapse"
                                href="#collapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample1"
                            >
                                Avishkar 2020
              </a>
                        </p>
                        {/* <div className="colarea"> */}
                        <div className="collapse colarea" id="collapseExample1">
                            <div className="content yearevent">
                                <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                    <div class="sm:w-2/3 sm:mr-10">
                                        <div class="text">
                                            {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                            <h5 class="font-bold text-3xl my-4 sm:text-4xl">
                                                <span class="text-indigo-300 font-bold">Avishkar 2020 was organised from 31st October - 3rd November 2020
</span>
                                            </h5>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>



                                        </div>
                                    </div>
                                </div>



                                <div className="text">
                                    <h3 class="font-bold text-3xl my-4 sm:text-4xl">
                                        <span class="text-indigo-300 font-bold">Competitions</span>
                                    </h3>
                                    <div
                                        className="miniSep"
                                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                    ></div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Smarthome} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Phantom
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* Home Automation event */}
                                                        <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/10Abr7pmeaTExusBIj7nUfmJrqrONJyfZ/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Daksha} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Guardian
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* Manual Robotics event */}
                                                        <br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1jQEeNsrdYRg-0XfcKEiw2SbWT9ZBULmn/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            Lost in Space
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* QuadCopter Frame construction and Flight Test */}<br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1DbkAoBGyDD5eRcRWVCJ-XSouIjnWyf-d/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            {/* </Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    <div>
                        <p className="cent">
                            <a
                                class="btn btn-outline-dark btn-lg"
                                data-toggle="collapse"
                                href="#collapseExample2"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample2"
                            >
                                Avishkar 2019
              </a>
                        </p>
                        {/* <div className="colarea"> */}
                        <div className="collapse colarea" id="collapseExample2">
                            <div className="content yearevent">
                                <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                    <div class="sm:w-2/3 sm:mr-10">
                                        <div class="text">
                                            {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                            <h5 class="font-bold text-3xl my-4 sm:text-4xl">
                                                <span class="text-indigo-300 font-bold">Avishkar 2019 was organised from 18th - 21st September 2019
</span>
                                            </h5>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>



                                        </div>
                                    </div>
                                </div>



                                <div className="text">
                                    <h3 class="font-bold text-3xl my-4 sm:text-4xl">
                                        <span class="text-indigo-300 font-bold">Competitions</span>
                                    </h3>
                                    <div
                                        className="miniSep"
                                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                    ></div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Smarthome} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Phantom
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* Home Automation event */}
                                                        <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1BB7Tllt9ua0ixwaXjLJaCa8zMgrM_72M/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Daksha} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Guardian
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* Manual Robotics event */}
                                                        <br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1v17A3EC_OF2UEX-B32bzc0QyNv54Fhkg/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            Lost in Space
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        {/* QuadCopter Frame construction and Flight Test */}<br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1atcwBaM5EoTfrCXJUu_eFphPkTy8Fr_w/view?usp=sharing"
                                                        className="btn btn-link btn-block"

                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}
