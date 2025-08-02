import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { app } from "./firebaseauth.js";

const auth = getAuth(app);

document.getElementById("submitSignUp").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "homepage.html";
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("submitSignIn").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});