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

        <h3 className="text-2xl mt-4 font-bold">Familiar Adobe Software:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <li className="shadow-lg rounded-md bg-white p-4 transform hover:scale-105 transition-transform">
            <a href="https://www.adobe.com/in/products/premiere.html">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1024px-Adobe_Premiere_Pro_CC_icon.svg.png"
                alt="Adobe Premiere Pro"
                className="w-16 h-16 mx-auto mb-2"
              />
            </a>
            <p className="text-lg text-center">Adobe Premiere Pro</p>
          </li>
          <li className="shadow-lg rounded-md bg-white p-4 transform hover:scale-105 transition-transform">
            <a href="https://www.adobe.com/in/products/photoshop.html">
              <img
                src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/photoshop.svg"
                alt="Adobe Photoshop"
                className="w-16 h-16 mx-auto mb-2"
              />
            </a>
            <p className="text-lg text-center">Adobe Photoshop</p>
          </li>
          <li className="shadow-lg rounded-md bg-white p-4 transform hover:scale-105 transition-transform">
            <a href="https://www.adobe.com/in/products/aftereffects.html">
              <img
                src="https://www.adobe.com/content/dam/cc/us/en/products/ccoverview/ae_cc_app_RGB.svg"
                alt="Adobe After Effects"
                className="w-16 h-16 mx-auto mb-2"
              />
            </a>
            <p className="text-lg text-center">Adobe After Effects</p>
          </li>
        </ul>

        <div class="container mx-auto p-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold">Connect with me:</h3>
            <p class="text-center mt-2">
              I'm actively seeking new opportunities and connections in the web
              development industry.
            </p>
            <div class="mt-4 space-y-2">
              <a
                href="https://www.instagram.com/itssourav.dev/"
                class="inline-block mx-2 px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600"
              >
                <img
                  src="https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logo=Instagram&logoColor=white"
                  alt="Instagram"
                  class="mr-2 inline-block align-middle"
                />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/itssourav/"
                class="inline-block mx-2 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
              >
                <img
                  src="https://img.shields.io/badge/-LinkedIn-2867B2?style=flat-square&logo=linkedin&logoColor=white"
                  alt="LinkedIn"
                  class="mr-2 inline-block align-middle"
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/itss0urav"
                class="inline-block mx-2 px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-900"
              >
                <img
                  src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white"
                  alt="GitHub"
                  class="mr-2 inline-block align-middle"
                />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="container mx-auto p-8">
          <h3 class="text-2xl font-bold mt-4">Languages and Tools:</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            <a
              href="https://www.w3.org/html/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="HTML5"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">HTML5</p>
            </a>
            <a
              href="https://www.w3schools.com/css/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="CSS3"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">CSS3</p>
            </a>
            <a
              href="https://tailwindcss.com/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Tailwind CSS</p>
            </a>
            <a
              href="https://git-scm.com/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="Git"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Git</p>
            </a>
            <a
              href="https://www.photoshop.com/en"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                alt="Photoshop"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Photoshop</p>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">JavaScript</p>
            </a>
            <a
              href="https://www.mongodb.com/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">MongoDB</p>
            </a>
            <a
              href="https://expressjs.com"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="Express.js"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Express.js</p>
            </a>
            <a
              href="https://reactjs.org/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">React</p>
            </a>
            <a
              href="https://nodejs.org"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Node.js"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Node.js</p>
            </a>
            <a
              href="https://firebase.google.com/"
              class="m-1 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="Firebase"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-center">Firebase</p>
            </a>
          </div>
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
