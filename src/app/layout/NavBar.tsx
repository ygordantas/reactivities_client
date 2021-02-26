import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
  showForm: () => void;
  cancelSelected: (selected: undefined) => void;
  isFormOpen: boolean;
}

export default function Navbar({
  showForm,
  cancelSelected,
  isFormOpen,
}: Props) {
  function clearForm() {
    cancelSelected(undefined);
    !isFormOpen && showForm();
  }
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={clearForm} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
