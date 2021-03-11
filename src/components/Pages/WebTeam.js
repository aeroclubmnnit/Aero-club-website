import React, { useEffect } from 'react'
import Loading from '../../Animations/Loading';
import f1 from "../../images/coordinators&Nontech/Abhinav Anand.png";
import f2 from "../../images/coordinators&Nontech/Ishan Gupta.jpeg";
import f3 from "../../images/coordinators&Nontech/Parnab Ghosh.jpeg";

export default function WebTeam() {
    useEffect(() => {
        document.title = `Webteam | ${process.env.REACT_APP_BASE_TITLE}`
    }, [])


    const members = [
        {
            name: "Abhinav Anand",
            year: "2nd",
            branch: "Information Technology",
            photo: f1,
            linkedinId: "https://www.linkedin.com/in/abhinav-anand-33b7a3204/",
        },
        {
            name: "Ishan Gupta",
            year: "2nd",
            branch: "Computer Science and Engg.",
            photo: f2,
            linkedinId: "https://www.linkedin.com/in/ishan-gupta100/",
        },
        {
            name: "Parnab Ghosh",
            year: "2nd",
            branch: "Electronics and Comm. Engg.",
            photo: f3,
            linkedinId: "https://www.linkedin.com/in/parnab-ghosh-57326118b/",
        },
    ]


    return (
        <>
            <Loading time={2} />
            <div className="pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">Web Team</div>
                </div>
            </div>

            <div className="container alumni-container">
                <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                        (member, i) =>
                            <div
                                class="card card-item shadow"
                                style={{ width: "17rem", minHeight: "29rem", height: "35rem" }}
                                key={i}
                            >
                                <img
                                    class="card-img-top card-alumni"
                                    src={`${member.photo}`}
                                    alt="Card image cap"
                                />
                                <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                    <h5 class="card-title text-center text-uppercase">
                                        {member.name}
                                    </h5>
                                    <p class="text-center">
                                        {member.branch}

                                    </p>
                                    <p class="card-text text-center">{member.year} year</p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <a href={member.linkedinId} target="_blank">
                                            <i class="fab fa-linkedin fa-3x mx-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                    )}
                </div>
            </div>
        </>
    )
}
