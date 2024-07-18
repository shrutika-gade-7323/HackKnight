import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import StaticCard from './StaticCard'; // Adjust the import path based on your folder structure
import meritScholarshipData from './data/meritScholarshipData'; // Assuming scholarship data is in a separate file

const MeritBased = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter scholarships based on the search term
  const filteredScholarships = meritScholarshipData.filter((scholarship) =>
    scholarship.scholarshipName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Search Bar Section */}
      <Row className="justify-content-md-center mb-4">
        <Col md="6">
          <Form className="position-relative">
            <FormControl
              type="text"
              placeholder="Search Scholarships..."
              className="me-2 rounded-pill pl-4" // Adding padding left for the icon
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="position-absolute top-50 start-0 translate-middle-y ms-2">
              {/* You can use text or another icon library here */}
              &#x1F50D; {/* Unicode for the magnifying glass icon */}
            </span>
          </Form>
        </Col>
      </Row>

      {/* Scholarships Section */}
      <Row xs={1} md={2} className="g-4">
        {filteredScholarships.map((scholarship) => (
          <Col key={scholarship._id}>
            <StaticCard
              title={scholarship.scholarshipName}
              description={scholarship.description}
              deadline={scholarship.deadline}
              scholarshipURL={scholarship.scholarshipURL}
              buttonText="View Details"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeritBased;
