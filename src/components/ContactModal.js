import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ContactModal(args) {
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal
        isOpen={args.modal}
        toggle={args.toggle}
        {...args}
        centered
        style={{ maxWidth: "65%" }}
      >
        <ModalHeader toggle={args.toggle}>Contact Us</ModalHeader>
        <ModalBody style={{ display: "flex" }}>
          <div
            className="cssc"
            style={{
              height: 300,
              flex: 0.7,
              display: "flex",
              gap: 7,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              name="fullname"
              className="c-inp"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="email"
              className="c-inp"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              className="c-inp"
              placeholder="Subject"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="c-msg"
            ></textarea>
            <div style={{ width: "100%" }}>
              <Button
                onClick={args.toggle}
                style={{
                  background: "black",
                  color: "white",
                  width: 100,
                  borderRadius: 25,
                }}
              >
                Cancel
              </Button>{" "}
              <Button
                onClick={args.toggle}
                style={{
                  background: "blue",
                  color: "white",
                  width: 100,
                  borderRadius: 25,
                  border: "none",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div
            className="container-fluid cs"
            id="contactImage"
            style={{
              flex: 0.3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 250,
              border: "none",
            }}
          >
            <img
              src={require("../images/contactimg.svg").default}
              className="img-fluid"
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ContactModal;
