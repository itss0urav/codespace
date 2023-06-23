import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-center">
          <img
            src="https://media.discordapp.net/attachments/979241917852303370/1112399216027906139/Vanilla-1s-285px_1.gif?width=356&height=177"
            alt="Codespace"
          />
        </h1>
        <h3 className="text-center">
          A passionate web developer from Kerala, India
        </h3>

        <p className="text-center">
          <img
            src="https://komarev.com/ghpvc/?username=itss0urav&label=Profile%20views&color=0e75b6&style=flat"
            alt="Profile views"
          />
        </p>

        <h2 className="text-center mt-4 mb-2">
          🌱 Currently learning MERN Stack
        </h2>

        <div className="flex justify-center">
          <img
            src="https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif"
            alt="Code Animation"
            className="w-80 h-auto"
          />
        </div>

        <p className="text-center mt-4">
          <samp className="text-lg">
            I am a passionate web developer with a keen interest in creating
            dynamic and interactive web applications. I love to explore new
            technologies and constantly learn to enhance my skills.
          </samp>
        </p>

        <p className="text-center mt-2">
          <samp className="text-lg">
            Feel free to connect with me or check out my projects on GitHub.
          </samp>
        </p>

        <h3 className="text-lg mt-4">Familiar Adobe Software:</h3>
        <ul className="ml-6">
          <li>Adobe Premiere Pro</li>
          <li>Adobe Photoshop</li>
          <li>Adobe After Effects</li>
        </ul>

        <h3 className="text-lg mt-4">Connect with me:</h3>
        <div className="flex justify-center mt-2">
          <a href="https://www.instagram.com/itsclashgod/">
            <img
              src="https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logo=Instagram&logoColor=white"
              alt="Instagram"
              className="w-6 h-6 mx-1"
            />
          </a>
        </div>

        <h3 className="text-lg mt-4">Languages and Tools:</h3>
        <div className="flex flex-wrap justify-center mt-2">
          <a href="https://www.w3.org/html/" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.w3schools.com/css/" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              className="w-8 h-8"
            />
          </a>
          <a href="https://tailwindcss.com/" className="m-1">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="Tailwind CSS"
              className="w-8 h-8"
            />
          </a>
          <a href="https://git-scm.com/" className="m-1">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="Git"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.photoshop.com/en" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
              alt="Photoshop"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="m-1"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.mongodb.com/" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
              className="w-8 h-8"
            />
          </a>
          <a href="https://expressjs.com" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="Express.js"
              className="w-8 h-8"
            />
          </a>
          <a href="https://reactjs.org/" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React"
              className="w-8 h-8"
            />
          </a>
          <a href="https://nodejs.org" className="m-1">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Node.js"
              className="w-8 h-8"
            />
          </a>
          <a href="https://firebase.google.com/" className="m-1">
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="Firebase"
              className="w-8 h-8"
            />
          </a>
        </div>

        <p className="text-center mt-4">
          <samp className="text-lg">
            Let's build amazing web experiences together!
          </samp>
        </p>
      </div>{" "}
    </div>
  );
};

export default About;
