import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-5xl text-center mb-10">FAQ</h2>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title border border-base-300 bg-base-100  text-xl font-medium peer-checked:text-xl p-7 ">
          When should you use the context API?
        </div>
        <div className="collapse-content border border-base-300 bg-base-100  text-xl  peer-checked:text-xl ">
          <p className="p-4">
            Context is primarily used when some data needs to be accessible by
            many components at different nesting levels.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title border border-base-300 bg-base-100  text-xl font-medium peer-checked:text-xl p-7 ">
          What is custom hook in react?
        </div>
        <div className="collapse-content border border-base-300 bg-base-100  text-xl  peer-checked:text-xl ">
          <p className="p-4">
            Custom React JS hooks are reusable functions that a React JS
            software developer can use to add special and unique functionality
            to the React applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title border border-base-300 bg-base-100  text-xl font-medium peer-checked:text-xl p-7 ">
          What is useMemo and useRef in Reactjs?
        </div>
        <div className="collapse-content border border-base-300 bg-base-100  text-xl  peer-checked:text-xl ">
          <p className="p-4">
            useMemo is a React Hook that lets you cache the result of a
            calculation between re-renders. <br />
            And useRef is a built-in React hook that accepts one argument as the
            initial value and returns a reference
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
