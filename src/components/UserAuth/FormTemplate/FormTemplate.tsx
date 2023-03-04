import { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
import "./FormTemplate.css";

export default function FormTemplate(props: any) {
  const { title, type } = props;
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const handleSubmit = () => {
    console.log("Email: " + email);
    console.log("Password: " + password);

    switch (type) {
      case "login":
        console.log("Login");
        break;
      case "register":
        console.log("Register");
        break;
      default:
        console.log("Unknown type");
    }
  };

  return (
    <div className="formTemplateContainer">
      <Typography variant="h4">{title}</Typography>
      <TextField
        label={"Email..."}
        type={"email"}
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label={"Password..."}
        type={"password"}
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        className="formButton"
        onClick={() => handleSubmit()}
      >
        Log in
      </Button>
    </div>
  );
}
