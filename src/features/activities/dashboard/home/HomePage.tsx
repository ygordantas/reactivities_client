import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Container>
      <h1>Home page</h1>
      <Link to="/activities">Activities</Link>
    </Container>
  );
}
