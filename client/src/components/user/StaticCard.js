import React from 'react';
import { Card, Button } from 'react-bootstrap';

const StaticCard = ({ title, description, deadline, buttonText, scholarshipURL }) => {
  const handleButtonClick = () => {
    window.location.href = scholarshipURL;  // Redirects to the URL in the same tab when the button is clicked
  };

  return (
    <Card style={{ width: '35rem', margin: '20px' }} className="custom-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Deadline to Apply:</strong> {deadline}</Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default StaticCard;