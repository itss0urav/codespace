import React from "react";
import Navbar from "./navbar";

function ReactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto py-10">
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-6">Introduction to React</h1>
          <p className="text-lg mb-6">
            React is a popular JavaScript library for building user interfaces.
            It was developed and open-sourced by Facebook. React allows
            developers to create reusable UI components, making it easier to
            manage complex applications. React follows a declarative and
            component-based approach, where UI is broken down into smaller,
            manageable parts.
          </p>
          <p className="text-lg mb-6">Key concepts of React include:</p>

          {/* Virtual DOM */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">Virtual DOM:</h2>
            <p>
              React uses a Virtual DOM, a lightweight copy of the actual DOM.
              When state or data changes, React calculates the difference
              (diffing) between the Virtual DOM and the real DOM, updating only
              the necessary parts. This approach results in efficient and
              performant rendering of UI changes.
            </p>
          </div>

          {/* Components */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">Components:</h2>
            <p>
              Components are the building blocks of React applications. Each
              component represents a part of the UI, and they can be nested to
              create complex interfaces. React components can be classified into
              functional components and class components. Functional components
              are simple functions that receive props and return JSX, while
              class components extend the React class and use a render method.
            </p>
            <p>Here's an example of a functional component:</p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;`}
            </pre>
          </div>

          {/* State and Props */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">State and Props:</h2>
            <p>
              React components can have two types of data: state and props.
              Props (short for properties) are used to pass data from a parent
              component to a child component. They are read-only and cannot be
              modified by the child component. On the other hand, state is used
              to store data that can change within a component. By using the
              `useState` hook, functional components can now manage state.
            </p>
            <p>
              Here's an example of a component that uses both props and state:
            </p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>{props.message}</p>
    </div>
  );
}

export default Counter;`}
            </pre>
          </div>

          {/* JSX (JavaScript XML) */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">JSX (JavaScript XML):</h2>
            <p>
              React uses JSX, a syntax extension for JavaScript that allows
              developers to write HTML-like code within JavaScript. JSX
              simplifies the creation of React elements and makes the code more
              readable. Babel, a popular JavaScript compiler, transpiles JSX
              into regular JavaScript.
            </p>
            <p>Here's an example of JSX in a React component:</p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React from "react";

function Greeting() {
  return <h1>Hello, JSX!</h1>;
}

export default Greeting;`}
            </pre>
          </div>

          {/* React Hooks */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">React Hooks:</h2>
            <p>
              React Hooks are functions that allow developers to use state and
              other React features in functional components. Prior to Hooks,
              state management was only possible with class components. The most
              common Hooks include `useState`, `useEffect`, `useContext`, and
              `useReducer`. Hooks enable better code organization and
              reusability, reducing the need for class components.
            </p>
            <p>Here's an example of using the `useState` Hook:</p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;`}
            </pre>
          </div>

          {/* React Router */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">React Router:</h2>
            <p>
              React Router is a popular library that provides navigation and
              routing capabilities to React applications. It allows developers
              to build single-page applications (SPAs) with multiple views, each
              having its own URL. React Router simplifies navigation between
              different pages while maintaining a seamless user experience.
            </p>
            <p>Here's an example of using React Router in an app:</p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;`}
            </pre>
          </div>

          {/* React Context */}
          <div className="bg-white rounded-lg p-4 shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">React Context:</h2>
            <p>
              React Context is a feature that allows data to be passed through
              the component tree without having to pass props explicitly at
              every level. It is useful when you want to share data across
              components that are not directly related (e.g., theme, user
              authentication). By creating a Context, data can be provided at
              the top of the component tree and consumed anywhere in the tree.
            </p>
            <p>Here's an example of using React Context:</p>
            <pre className="bg-gray-200 p-2 mt-2">
              {`import React, { createContext, useContext } from "react";

// Create a Context
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="light">
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  // Consume the Context value
  const theme = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === "light" ? "#f0f0f0" : "#333" }}>
      {/* Navbar content */}
    </nav>
  );
}

function Content() {
  // Consume the Context value
  const theme = useContext(ThemeContext);

  return (
    <main style={{ color: theme === "light" ? "#333" : "#f0f0f0" }}>
      {/* Page content */}
    </main>
  );
}

export default App;`}
            </pre>
          </div>

          {/* ... (other concepts) */}
        </div>
      </div>
    </div>
  );
}

export default ReactPage;
