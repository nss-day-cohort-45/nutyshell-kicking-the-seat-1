// Author: Rickie
// Purpose: To verify if the user is active, and to display the user's nutshell if logged in. If else, then display the login and register form.

import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"
import { Nutshell } from "../Nutshell.js"

export const userIsVerified = () => {
  const userIsActive = sessionStorage.getItem('activeUser')
  if (userIsActive) {
      Nutshell()
  } else {
      LoginForm()
      RegisterForm()
  }
}
