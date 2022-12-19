import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function SignIn(args) {
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={args.modal} toggle={args.toggle} {...args} centered>
        <ModalHeader toggle={args.toggle}>Login</ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <div
            style={{
              width: "70%",
              gap: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
            }}
          >
            <input className="c-inp" type="text" placeholder="Email" />

            <input className="c-inp" type="password" placeholder="Password" />
            <Button
              onClick={args.toggle}
              style={{
                background: "blue",
                color: "white",
                width: 100,
                borderRadius: 25,
              }}
            >
              Login
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SignIn;
