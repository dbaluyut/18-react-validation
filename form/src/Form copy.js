import React, { useState } from "react"
import validator from "validator"
import "./App.css"

function Form() {
  //THIS IS STATE TO TOGGLE ERR WHEN TYPING IN INPUT

  const [isBlank, setIsBlank] = useState(true)
  const formList = [
    { label: "Name", type: "text", error: " - Cannot be blank" },
    { label: "Email", type: "email", error: " - Please enter a valid email" },
    { label: "Username", type: "text", error: " - Cannot be blank" },
    { label: "Password", type: "password", error: " - Cannot be blank" },
    {
      label: "Confirm Password",
      type: "password",
      error: " - Cannot be blank",
    },
    { label: "Website", type: "url", error: " - Please enter a valid url" },
  ]

  // const [emailText, setEmailText] = useState("")
  // const [nameText, setNameText] = useState("")
  // const [usernNameText, setUserNameText] = useState("")
  // const [passwordText, setPasswordText] = useState("")
  // const [confirmPasswordText, setConfirmPasswordText] = useState("")
  // const [websiteText, setWebsiteText] = useState("")

  function handleChange() {}

  return (
    <>
      <form>
        {formList.map((obj) => {
          return (
            <>
              <div>
                <label
                  id={"label-" + obj.label}
                  className="label"
                  htmlFor={obj.label}
                >
                  {obj.label} {isBlank && obj.error}
                </label>

                <input
                  id={obj.label}
                  className="input"
                  type={obj.type}
                  onChange={(e) => {
                    if (e.target.value !== "" && obj.type == "text") {
                      let sel = e.target
                      sel.style.border = "1px solid white"
                      document.getElementById(
                        `label-${obj.label}`
                      ).style.color = "white"
                    } else {
                      let sel = e.target
                      sel.style.border = "1px solid red"
                      document.getElementById(
                        `label-${obj.label}`
                      ).style.color = "red"
                    }
                    if (e.target.value !== "" && obj.type == "email") {
                      if (validator.isEmail(e.target.value)) {
                        let sel = e.target
                        sel.style.border = "1px solid white"
                        document.getElementById(
                          `label-${obj.label}`
                        ).style.color = "white"
                      } else {
                        let sel = e.target
                        sel.style.border = "1px solid red"
                        document.getElementById(
                          `label-${obj.label}`
                        ).style.color = "red"
                      }
                    }
                    if (e.target.value !== "" && obj.type == "url") {
                      if (validator.isURL(e.target.value)) {
                        let sel = e.target
                        sel.style.border = "1px solid white"
                        document.getElementById(
                          `label-${obj.label}`
                        ).style.color = "white"
                      } else {
                        let sel = e.target
                        sel.style.border = "1px solid red"
                        document.getElementById(
                          `label-${obj.label}`
                        ).style.color = "red"
                      }
                    }
                  }}
                ></input>
              </div>
            </>
          )
        })}

        {/* <div id="name-div">
          <label id="name-label" htmlFor="name" className="label">
            Name - Cannot be blank
          </label>
          <br />
          <input
            id="name"
            className="input"
            placeholder="Name - Cannot be blank"
            type="text"
            // onChange={function (e) {
            //   if (e.target.value !== "") {
            //     e.target.style.border = "1px solid white"
            //     document.getElementById("name-div").style.color = "white"
            //     document.getElementById("name-label").innerHTML = "Name"
            //     document.getElementById("name-label").style.color = "white"
            //   } else {
            //     e.target.style.border = "1px solid red"
            //     document.getElementById("name-div").style.color = "red"
            //     document.getElementById("name-label").style.color = "red"
            //     document.getElementById("name-label").innerHTML =
            //       "Name - Cannot be blank"
            //   }
            // }}
            onChange={}
          ></input>
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <br />
          <input
            id="email"
            className="input"
            placeholder="Email - Cannot be blank"
            type="email"
          ></input>
        </div>
        <div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <br />
          <input
            id="username"
            className="input"
            placeholder="Username - Cannot be blank"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <br />
          <input
            id="password"
            className="input"
            placeholder="Password - Cannot be blank"
            type="password"
          ></input>
        </div>
        <div>
          <label htmlFor="confrim-password" className="label">
            Confirm Password
          </label>
          <br />
          <input
            id="confrim-password"
            className="input"
            placeholder="Confirm Password - Cannot be blank"
            type="password"
          ></input>
        </div> */}
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
