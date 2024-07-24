import React, { Fragment, useState } from "react";
import PageSection from "../components/layout/PageSection";
import TechIconSelector from "../components/TechIconSelector";
import { HIRE_DEVELOPERS_TEAM_DATA } from "../data/hire_developer_team_page_data";
import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import Modal from "../components/layout/Modal";
import P from "../components/UI/P";

export default function HireDevelopersTeam() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
  });

  const [selectedTech, setSelectedTech] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    setModalText(
      `Thank you, ${enteredValues.name}. We will contact you at ${
        enteredValues.email
      } regarding developers skilled in ${selectedTech.join(", ")}.`
    );
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setEnteredValues({
      name: "",
      email: "",
    });
    setSelectedTech([]);
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <P>{modalText}</P>
        </Modal>
      )}
      <PageSection
        backgroundColor="whiteSection"
        margin="marginTopHeaderContent"
      >
        <TechIconSelector
          data={HIRE_DEVELOPERS_TEAM_DATA}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </PageSection>
      <PageSection
        backgroundColor="whiteSection"
        margin="marginTopBottom"
        alignItems="center"
      >
        <Form
          inputDirection="center"
          formData={enteredValues}
          onSubmit={submitFormHandler}
        >
          <Input
            input
            type="text"
            labelLineText="Full Name"
            name="name"
            value={enteredValues.name}
            setEnteredValues={setEnteredValues}
          />
          <Input
            input
            type="email"
            labelLineText="Email"
            name="email"
            value={enteredValues.email}
            setEnteredValues={setEnteredValues}
          />
        </Form>
      </PageSection>
    </Fragment>
  );
}
