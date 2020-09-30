import React, { useState } from "react"
import validator from "validator"
import "./App.css"

function Form() {
  //EMAIL STATE
  const [emailText, setEmailText] = useState("")
  const [emailLabelMessage, setEmailLabelMessage] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(true)
  //NAME STATE
  const [nameText, setNameText] = useState("")
  const [nameLabelMessage, setNameLabelMessage] = useState("")
  const [nameIsEmpty, setNameIsEmpty] = useState(true)
  //USERNAME STATE
  const [usernNameText, setUserNameText] = useState("")
  const [userNameLabelMessage, setUserNameLabelMessage] = useState("")
  const [userNameIsEmpty, setUserNameIsEmpty] = useState(true)

  //PASSWORD STATE
  const [passwordText, setPasswordText] = useState("")
  const [passwordLabelMessage, setPasswordLabelMessage] = useState("")
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(true)

  //CONFIRM PASSWORD STATE
  const [confirmPasswordText, setConfirmPasswordText] = useState("")
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState("")
  const [confirmPasswordIsEmpty, setconfirmPasswordIsEmpty] = useState(true)

  //WEBSITE STATE
  const [websiteText, setWebsiteText] = useState("")
  const [websiteLabelMessage, setWebsiteLabelMessage] = useState("")
  const [websiteIsValid, setWebsiteIsValid] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    //EMAIL INPUT CHECK IF ISEMAIL
    if (!validator.isEmail(emailText)) {
      setEmailLabelMessage(" - Please enter a valid email")
      setEmailIsValid(false)
    }
    //NAME INPUT CHECK IF EMPTY
    if (nameText.length === 0) {
      setNameLabelMessage(" - Cannot be blank")
      setNameIsEmpty(false)
    } else {
      setNameIsEmpty(true)
    }
    //USERNAME INPUT CHECK
    if (usernNameText.length === 0) {
      setUserNameLabelMessage(" - Cannot be blank")
      setUserNameIsEmpty(false)
    } else {
      setUserNameIsEmpty(true)
    }
    //PASSWORD INPUT CHECK
    if (passwordText.length === 0) {
      setPasswordLabelMessage(" - Cannot be blank")
      setPasswordIsEmpty(false)
    } else {
      setPasswordIsEmpty(true)
    }
    //CONFIRM PASSWORD INPUT CHECK
    if (confirmPasswordText.length === 0) {
      setConfirmPasswordLabel(" - Cannot be blank")
      setconfirmPasswordIsEmpty(false)
    } else if (passwordText.value == confirmPasswordText.value) {
      setConfirmPasswordLabel(" - Must match password")
      setconfirmPasswordIsEmpty(false)
    } else {
      setconfirmPasswordIsEmpty(true)
    }
    //CONFIRM WEBSITE URL
    if (!validator.isURL(websiteText)) {
      setWebsiteLabelMessage(" - Please enter a valid url")
      setWebsiteIsValid(false)
    }
    //CLEAR INPUTS
    setEmailText("")
    setNameText("")
    setUserNameText("")
    setPasswordText("")
    setConfirmPasswordText("")
    setWebsiteText("")
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <h1>Profile Form - All fields required</h1>
      <div>
        <label
          id="name-label"
          htmlFor="name"
          className={nameIsEmpty ? "" : "red-text"}
        >
          Name {nameLabelMessage}
        </label>
        <br />
        <input
          id="name"
          className={nameIsEmpty ? "" : "red-border"}
          placeholder="Name - Cannot be blank"
          type="text"
          onChange={(e) => setNameText(e.target.value)}
        ></input>
      </div>
      <div>
        <label
          htmlFor="email"
          className="label"
          className={emailIsValid ? "" : "red-text"}
        >
          Email {emailLabelMessage}
        </label>
        <br />
        <input
          id="email"
          className={emailIsValid ? "" : "red-border"}
          placeholder="Email - Cannot be blank"
          type="email"
          onChange={(e) => setEmailText(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="username" className={userNameIsEmpty ? "" : "red-text"}>
          Username {userNameLabelMessage}
        </label>
        <br />
        <input
          id="username"
          className="input"
          placeholder="Username - Cannot be blank"
          type="text"
          className={userNameIsEmpty ? "" : "red-border"}
          onChange={(e) => setUserNameText(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password" className={passwordIsEmpty ? "" : "red-text"}>
          Password {passwordLabelMessage}
        </label>
        <br />
        <input
          id="password"
          className={passwordIsEmpty ? "" : "red-border"}
          placeholder="Password - Cannot be blank"
          type="password"
          onChange={(e) => setPasswordText(e.target.value)}
        ></input>
      </div>
      <div>
        <label
          htmlFor="confrim-password"
          className={confirmPasswordIsEmpty ? "" : "red-text"}
        >
          Confirm Password {confirmPasswordLabel}
        </label>
        <br />
        <input
          id="confrim-password"
          className={confirmPasswordIsEmpty ? "" : "red-border"}
          placeholder="Confirm Password - Cannot be blank"
          type="password"
          onChange={(e) => setConfirmPasswordText(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="website" className={websiteIsValid ? "" : "red-text"}>
          Website {websiteLabelMessage}
        </label>
        <br />
        <input
          id="website"
          className={websiteIsValid ? "" : "red-border"}
          placeholder="Website - Please enter valid url"
          type="url"
          onChange={(e) => setWebsiteText(e.target.value)}
        ></input>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
