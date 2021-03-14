import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/alumni/sunil saini.jpg";
import f2 from "../../images/alumni/Surendra Singh Jayant.jpg";
import f3 from "../../images/alumni/SHREY Dixit.jpg";
import f4 from "../../images/alumni/Robin Zachariah.jpg";
import f5 from "../../images/alumni/rahul thakur.jpg";
import f6 from "../../images/alumni/Mohammed Maaz Latifee.jpg";
import f7 from "../../images/alumni/Vaibhav Jha.jpg";
import f8 from "../../images/alumni/Soumya Khanna.jpeg";
import f9 from "../../images/alumni/Aman Sharma(1).jpg";
import f10 from "../../images/alumni/sarita chaudhary1.jpeg";
import f11 from "../../images/alumni/unnamed.jpg";
import f12 from "../../images/alumni/Kishan Tiwari.jfif";
import f13 from "../../images/alumni/Aniket Kumar.jpg";

export default function Alumni() {
  useEffect(() => {
    document.title = `Alumni | ${process.env.REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      name: "Sunil Kumar saini",
      yearOfGraduation: 2019,
      presentOrganisation: "John Deere India Pvt. Ltd.",
      presentLocation: "Indore, Madhya Pradesh",
      yourLinkedinId: "https://www.linkedin.com/in/sunilsaini233601",
      yourContactInformationEmail: "sunilnit22@gmail.com",
      yourContactInformationPhoneNumber: 8003238261,
      aPhotoForWebsiteOfYourself: f1,
    },
    {
      name: "Surendra Singh Jayant",
      yearOfGraduation: 2019,
      presentOrganisation: "Hindalco",
      presentLocation: "Hirakud",
      yourLinkedinId: "https://www.linkedin.com/in/ssjayant",
      yourContactInformationEmail: "surendramnnit@hotmail.com",
      yourContactInformationPhoneNumber: 7704874507,
      aPhotoForWebsiteOfYourself: f2,
    },
    {
      name: "Shrey Dixit",
      yearOfGraduation: 2020,
      yourLinkedinId: "linkedin.com/in/shrey-dixit",
      yourContactInformationEmail: "shreydixit99@gmail.com ",
      aPhotoForWebsiteOfYourself: f3,
    },
    {
      name: "Robin John Zachariah",
      yearOfGraduation: 2020,
      presentOrganisation: undefined,
      presentLocation: "Kochi, India",
      yourLinkedinId: "www.linkedin.com/in/robin-john-zachariah",
      yourContactInformationEmail: "robinjohnzachariah@gmail.com",
      yourContactInformationPhoneNumber: 7388342800,
      aPhotoForWebsiteOfYourself: f4,
    },
    {
      name: "Rahul Thakur",
      yearOfGraduation: 2020,
      presentOrganisation: "Addverb Technologies",
      presentLocation: "Noida",
      yourLinkedinId: "Rahulkrt",
      yourContactInformationEmail: "Rahulkmrthakur24@gmail.com",
      aPhotoForWebsiteOfYourself: f5,
    },
    {
      emailAddress: "maaz.latifee2@gmail.com",
      name: "Mohammed Maaz Latifee",
      yearOfGraduation: 2020,
      presentOrganisation: "Infosys",
      presentLocation: "Abu Dhabi",
      yourLinkedinId: "linkedin.com/in/mohammed-maaz-latifee-0a3375169",
      yourContactInformationEmail: "maaz.latifee2@gmail.com",
      yourContactInformationPhoneNumber: "+91 7753848547",
      aPhotoForWebsiteOfYourself: f6,
    },
    {
      emailAddress: "vaibhavjha904@gmail.com",
      name: "Vaibhav Kumar Jha",
      yearOfGraduation: 2020,
      presentOrganisation: "Capgemini India",
      presentLocation: "Kharagpur",
      yourContactInformationEmail: "vaibhavjha904@gmail.com",
      yourContactInformationPhoneNumber: 8310731383,
      yourLinkedinId: "https://www.linkedin.com/in/vaibhav-jha-49745b166",
      aPhotoForWebsiteOfYourself: f7,
    },
    {
      emailAddress: "soumyakhanna17997@gmail.com",
      name: "Soumya Khanna",
      yearOfGraduation: 2020,
      presentOrganisation: "Bajaj Auto Limited",
      presentLocation: "Akurdi, Pune",
      yourLinkedinId: "https://www.linkedin.com/in/soumya-khanna-20169040",
      yourContactInformationEmail: "soumyakhanna17997@gmail.com",
      aPhotoForWebsiteOfYourself: f8,
    },
    {
      emailAddress: "sharmaaman0571@gmail.com",
      name: "Aman sharma",
      yearOfGraduation: 2020,
      presentOrganisation: "Hero motocorp",
      presentLocation: "Gurgaon",
      yourContactInformationEmail: "sharmaaman0571@gmail.com",
      yourLinkedinId: "https://www.linkedin.com/in/aman-sharma-910598149",
      yourContactInformationPhoneNumber: "08218289118",
      aPhotoForWebsiteOfYourself: f9,
    },
    {
      emailAddress: "saritachaudhary2507@gmail.com",
      name: "Sarita Chaudhary",
      yearOfGraduation: 2020,
      presentOrganisation: "Resonance Eduventures Pvt. Ltd.",
      presentLocation: "Kota",
      yourLinkedinId: " https://www.linkedin.com/in/sarita-chaudhary-b92170137/",
      yourContactInformationEmail: "saritachaudhary2507@gmail.com",
      yourContactInformationPhoneNumber: "+919554559909",
      aPhotoForWebsiteOfYourself: f10,
    },
    {
      emailAddress: "bhuvanjhamb29@gmail.com",
      name: "Ashwini Kumar",
      yearOfGraduation: 2018,
      aPhotoForWebsiteOfYourself: f11,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Kishan Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "TSAW Drones",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
      yourContactInformationEmail: "kishan@tsaw.tech",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: f12,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Aniket Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "Assistant Manager, Maruti Suzuki",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/aniket-tiwari/",
      yourContactInformationPhoneNumber: 7905461842,
      aPhotoForWebsiteOfYourself: f13,
    },
  ];

  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Our Alumni</div>
        </div>
      </div>
      <div class="container alumni-container mb-5">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  Batch 2020
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse show">
              <div class="panel-body">
                <div
                  className="container"

                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2020 && (
                          <div
                            class="card card-item shadow"
                            style={{ width: "17rem", minHeight: "25rem" }}
                          >
                            <img
                              class="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                class="card-title text-center text-uppercase"
                                style={{ minHeight: "4rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                class="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation
                                  ? member.presentOrganisation
                                  : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                              </p>

                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i class="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  Batch 2019
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
                <div
                  className="container"

                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2019 && (
                          <div
                            class="card card-item shadow"
                            style={{ width: "17rem", minHeight: "25rem" }}
                          >
                            <img
                              class="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                class="card-title text-center text-uppercase"
                                style={{ minHeight: "4rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                class="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation}
                              </p>
                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i class="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  2018 & Previous Batches
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">
                <div
                  className="container"

                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2018 && (
                          <div
                            class="card card-item shadow rounded"
                            style={{ width: "17rem", minHeight: "25rem" }}
                          >
                            <img
                              class="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                class="card-title text-center text-uppercase"
                                style={{ minHeight: "4rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                class="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation}
                              </p>
                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i class="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
