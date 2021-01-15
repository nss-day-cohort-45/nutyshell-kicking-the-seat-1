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
