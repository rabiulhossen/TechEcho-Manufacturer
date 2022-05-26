import React from "react";

export default function Blogs() {
  return (
    <div>
      <h1 className="text-zinc-800 font-serif font-bold my-8 text-2xl">
        This is Blog section
      </h1>

      <h1 className="font-bold text-lg">
        {" "}
        <code>Q1:</code>
        How will you improve the performance of a React Application?
      </h1>
      <label
        htmlFor="my-modal-1"
        className="btn modal-button bg-secondary text-black hover:text-white mb-8 mt-2 "
      >
        Show Answer
      </label>

      {/* <!-- Put this part before --> */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl pl-5">
          <p className="pt-4 pb-3 font-medium font-serif">
            {" "}
            <code className="">Answer:</code> I will boost performance of a
            React Application in many ways.Some of these are written below:
          </p>
          <li className="text-justify pl-8">
            Keeping component state local where necessary
          </li>
          <li className="text-justify pl-8">
            Avoid using Index as Key for map
          </li>
          <li className="text-justify pl-8">Consider Server-side Rendering</li>
          <li className="text-justify pl-8">
            Analyzing and Optimizing Your Webpack Bundle Bloat
          </li>
          <li className="text-justify pl-8">
            CSS Animations Instead of JS Animations
          </li>
          <li className="text-justify pl-8">
            Avoid Async Initialization in
            <code>componentWillMount()</code>{" "}
          </li>
          <h3 className="font-bold text-lg mt-3">I hope You Understand!</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-1" className="btn bg-primary text-slate-900">
              Close!
            </label>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-lg">
        {" "}
        <code>Q2:</code>
        What are the different ways to manage a state in a React application?
      </h1>
      <label
        htmlFor="my-modal-2"
        className="btn modal-button bg-secondary text-black hover:text-white mb-8 mt-2 "
      >
        Show Answer
      </label>

      {/* <!-- Put this part before --> */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl pl-5">
          <p className="pt-4 pb-3 font-medium font-serif">
            {" "}
            <code className="">Answer:</code>There are many ways to manage a
            state in a React application.among of them:
          </p>
          <li className="text-justify pl-8">
            <span className="font-bold">Redux:</span> The first on our list is
            Redux; It has been around for a while, pretty much the first
            react-based state management library.
          </li>
          <li className="text-justify pl-8">
            {" "}
            <span className="font-bold">Recoil:</span>
            Recoil seems to be the newest tool on the state management
            community— A community with tons of excellent libraries like
            Context, Mobx, and Redux, etc.
          </li>
          <li className="text-justify pl-8">
            {" "}
            <span className="font-bold">React Hooks:</span>Hooks is one of the
            most outstanding features ever added to the React library since its
            creation. Hooks brought ‘state’ to functional components.
          </li>

          <h3 className="font-bold text-lg mt-3">I hope You Understand!</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-2" className="btn bg-primary text-slate-900">
              Close!
            </label>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-lg">
        {" "}
        <code>Q3:</code>
        How does prototypical inheritance work?
      </h1>
      <label
        htmlFor="my-modal-3"
        className="btn modal-button bg-secondary text-black hover:text-white mb-8 mt-2 "
      >
        Show Answer
      </label>

      {/* <!-- Put this part before --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl pl-5">
          <p className="pt-4 pb-3 font-medium font-serif">
            {" "}
            <code className="">Answer:</code>First Prototypical inheritance
            means a feature in javascript used to add methods and properties in
            objects which an object can inherit the properties and methods of
            another object.
          </p>

          <li className="text-justify pl-8">
            Prototypal Inheritance can be used not only to inherit properties
            from other objects but methods as well.
          </li>

          <h3 className="font-bold text-lg mt-3">I hope You Understand!</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-3" className="btn bg-primary text-slate-900">
              Close!
            </label>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-lg">
        {" "}
        <code>Q4:</code>
        What is a unit test? Why should write unit tests?{" "}
      </h1>
      <label
        htmlFor="my-modal-4"
        className="btn modal-button bg-secondary text-black hover:text-white mb-8 mt-2 "
      >
        Show Answer
      </label>

      {/* <!-- Put this part before --> */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl pl-5">
          <p className="pt-4 pb-3 font-medium font-serif">
            {" "}
            <code className="">Answer:</code>UNIT TESTING is a type of
            application testing where individual units or components of a app
            are tested. The purpose is to validate that each unit of the
            software code performs as expected.
          </p>

          <li className="text-justify pl-8">
            There are the principle reasons to perform Unit Testing in software
            engineering :
          </li>
          <li className="text-justify pl-8">Accepttance Testing.</li>
          <li className="text-justify pl-8">System Testing.</li>
          <li className="text-justify pl-8">Inegration Testing</li>

          <h3 className="font-bold text-lg mt-3">I hope You Understand!</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-4" className="btn bg-primary text-slate-900">
              Close!
            </label>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-lg">
        {" "}
        <code>Q5:</code>
        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
      </h1>
      <label
        htmlFor="my-modal-10"
        className="btn modal-button bg-secondary text-black hover:text-white mb-8 mt-2 "
      >
        Show Answer
      </label>

      {/* <!-- Put this part before --> */}
      <input type="checkbox" id="my-modal-10" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl pl-5">
          <p className="pt-4 pb-3 font-medium font-serif">
            {" "}
            <code className="">Answer:</code> I use [products, setProducts] = useStatee([]) there are many reasons
          </p>

          <li className="text-justify pl-8">
            There are the principle reasons to state change in react application.without this you can not change data from ui.this hooks render data for user.
          </li>
          

          <h3 className="font-bold text-lg mt-3">I hope You Understand!</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-10" className="btn bg-primary text-slate-900">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
