import React, { Fragment, useState } from "react";
import classes from "./Contact.module.css";
import Map from "../components/UI/Map";
import Form from "../components/UI/Form";
import PageSection from "../components/layout/PageSection";
import H2 from "../components/UI/H2";
import P from "../components/UI/P";
import Input from "../components/UI/Input";
import { Link } from "react-router-dom";
import CheckBox from "../components/UI/CheckBox";
import Modal from "../components/layout/Modal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitFormHandler = (event) => {
    event.preventDefault();
    setModalText(
      `Thank you, ${enteredValues.name}. We will contact you at ${enteredValues.email}`
    );
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setEnteredValues({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <P>{modalText}</P>
        </Modal>
      )}
      <PageSection
        margin="marginTopHeaderContent"
        flexDirection="column"
        alignItems="flexStart"
      >
        <H2>Contact</H2>
        <P>Have any questions? We'd love to hear from you.</P>
      </PageSection>
      <PageSection margin="marginTop">
        <Form onSubmit={submitFormHandler} inputDirection="column">
          <Input
            input={true}
            labelLineText="Full Name"
            name="name"
            value={enteredValues.name}
            setEnteredValues={setEnteredValues}
          />
          <Input
            input={true}
            labelLineText="Email"
            name="email"
            value={enteredValues.email}
            setEnteredValues={setEnteredValues}
          />
          <Input
            input={true}
            labelLineText="Phone"
            name="phone"
            value={enteredValues.phone}
            setEnteredValues={setEnteredValues}
          />
          <Input
            input={true}
            labelLineText="Subject"
            name="subject"
            value={enteredValues.subject}
            setEnteredValues={setEnteredValues}
          />
          <Input
            textarea={true}
            labelLineText="How can we help?"
            name="message"
            value={enteredValues.message}
            setEnteredValues={setEnteredValues}
          />
          <CheckBox>
            I agree to the processing of personal data in accordance with the
            <Link to="/contact"> Security Policy</Link>,
            <Link to="/contact"> Privacy Policy</Link>, and
            <Link to="/contact"> Cookie Policy</Link>
          </CheckBox>
        </Form>
        <Map />
      </PageSection>
      <div className={classes.zegaImage}>
        <img
          src="https://www.zegasoftware.com/storage/pages/big/contact_contact_ca7a.jpg"
          alt="zegaimg"
        />
      </div>
    </Fragment>
  );
}
