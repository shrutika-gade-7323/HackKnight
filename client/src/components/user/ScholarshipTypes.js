import React from "react";
import { Card, Button , Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom"

const ScholarshipTypes = () => {



  return (
    <>
      <section id="services">
        <div className="container service-section">
          <br />
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Merit Based Scholarship</span>
                    <p>
                    Scholarships awarded based on academic excellence and achievements.
                    </p>
                    <Link to={"/merit-based-scholarships"}>
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Need Based Scholarship</span>
                    <p>
                    Financial aid provided to students from economically disadvantaged backgrounds.
                    </p>
                    <Link to={"/need-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>International Scholarships</span>
                    <p>
                    Scholarships for students to study abroad, offered by foreign governments or organizations.
                    </p>
                    <Link to={"/international-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Minority Scholarship</span>
                    <p>
                    Scholarships aimed at supporting students from minority communities.
                    </p>
                    <Link to={"/minority-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Research Scholarship</span>
                    <p>
                    Funding provided to support students & researchers in academic research endeavors.
                    </p>
                    <Link to={"/research-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }}>
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>All Scholarships</span>
                    <p>
                    A collection of internship opportunities available to students across different fields & disciplines.
                    </p>
                    <Link to="/view-scholarships">
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
