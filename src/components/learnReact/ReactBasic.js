import Sidebar from "./Sidebar";

const ReactBasic = () => {
  return (
    <div className="w-full flex font-jakarta">
      <Sidebar />

      <div className=" relative  top-20 overflow-x-hidden">
        {/*  what is react div */}
        <div className="p-4 b">
          <h1 className="text-4xl font-bold ">What is React?</h1>
          <p>React is a js library whoose sole purpose is to create frontend</p>
        </div>

        <h1 className="text-3xl font-bold p-4"> React vs JS</h1>
        {/*  comparison of js vs react */}
        <div className="w-11/12 mx-auto justify-between  flex p-4 text-md">
          {/*  js */}
          <ul className="flex flex-col gap-4 list-disc w-7/12">
            <li>Based on Imperative approach</li>
            <li>
              U have to tell everything from 0 to 100 step by step in details
            </li>
            <li>updating dom by js is a heavy operation</li>
            <li>length code for manipulating the dom</li>
          </ul>
          {/*  react */}
          <ul className="flex flex-col gap-4 list-disc w-7/12">
            <li>Based on declarative approach</li>
            <li>
              u only have to tell end state to react it do everything on its own
            </li>
            <li>
              here dom manipulating is not a heavy operation bcoz of react
              reconcialation
            </li>
            <li>code is short and easy for manipulating the dom</li>
          </ul>
        </div>

        {/*  using with cdn links */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Using react with CDN links</h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <pre>
              &lt; script crossorigin
              src="https://unpkg.com/react@18/umd/react.development.js" &gt;&lt;
              /script&gt;
            </pre>
            <pre>
              &lt; script crossorigin
              src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
              &gt;&lt; /script&gt;
            </pre>
          </div>
        </div>

        {/*  creating our 1st element */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Creating our First Element</h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>
              const heading = React.createElement("h1" , &#123; &#125;, "hello
              world!");
            </p>
            <p>root.render(heading);</p>
          </div>
        </div>

        {/* making root and rendering it */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Defining our root</h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>
              const root = ReactDOM.createRoot(document.getElementById("root));
            </p>
            <p>root.render(heading);</p>
          </div>
        </div>

        {/*  explanation of react and react dom */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Explanation</h1>
          <div className="flex flex-col gap-2">
            <p>
              <span className="underline"> ReactDOM</span> - is responsible for
              all DOM operations
            </p>
            <p>
              <span className="underline"> createRoot</span> - whatever you pass
              inside it becomes the root of app , it tells React that this is
              root and whatever i want to render will render insdie root
            </p>
          </div>
        </div>

        {/*  creating multiple elements in a parent */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Creating Mutliple Elements </h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>
              const heading = React.createElement("h1" , &#123; &#125;, "hello
              world!");
            </p>
            <p>
              const heading2 = React.createElement("h3" , &#123; &#125; , "hello
              world2!"
            </p>
            <p>
              const container = React.createElement("div" , &#123; &#125; ,
              [heading . heading2])
            </p>
            <p>root.render(container);</p>
          </div>
          <h1>This will put heading and heading2 inside div(container)</h1>
        </div>

        {/*  react.create element explanation */}
        <div className="p-4 leading-7">
          <p>
            <span className="underline"> React.createElement </span> - is not
            user firendly we have to write too much code in here , so thats why
            JSX comes in picture
          </p>
          <p>
            React was initially built with React.createELement API this is core
            of react , JSX makes our life more easy
          </p>
          <p>
            If we keeo on writing like this then our whole index.html file will
            go on 1000-2000 lines , so better wayy is to split our app in
            differemt files and use JXS
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactBasic;
