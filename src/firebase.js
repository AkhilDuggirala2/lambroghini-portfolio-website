import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVL31JDi6wGx-u3DBfyjYrERbJNCEaSBI",
  authDomain: "lambroghini-portfolio-website.firebaseapp.com",
  projectId: "lambroghini-portfolio-website",
  storageBucket: "lambroghini-portfolio-website.appspot.com",
  messagingSenderId: "70607604045",
  appId: "1:70607604045:web:02ea57b40d912c60fd0f04",
};

const app = initializeApp(firebaseConfig);

export default app;
