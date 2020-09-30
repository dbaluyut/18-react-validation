import React, { useState } from "react"

import "./App.css"
import Form from "./Form"

function App() {
  const [nameText, setText] = useState("Cannot be blank")
  // const formList = [
  //   { label: "Name", type: "text", error: "Cannot be blank" },
  //   { label: "Email", type: "email", error: "Please enter a valid email" },
  //   { label: "Username", type: "text", error: "Cannot be blank" },
  //   { label: "Password", type: "password", error: "Cannot be blank" },
  //   { label: "Confirm Password", type: "password", error: "Cannot be blank" },
  //   { label: "Website", type: "text", error: "Please enter a valid url" },
  // ]
  return (
    <div>
      <div className="container">
        <Form />
      </div>
    </div>
  )
}

export default App
