import Sidebar from "./Sidebar";

const Bundlers = () => {
  return (
    <div className="w-full flex font-jakarta">
      <Sidebar />
      <div className=" relative  top-20 overflow-x-hidden w-9/12">
        {/*  bundlers intro   */}
        <div className="p-4">
          <h1 className="text-4xl font-bold py-4">Bundlers</h1>
          <p>
            These bundlers are responsible for doing lot of things. these
            bundlers gives us access to lot of superpowers in React-create-app
            bundlers they use is webpack
          </p>
          <p>some Bundlers are = Webpack , Parcel , vite etc.</p>
        </div>

        {/*  bundler and npm */}
        <div className="p-4 flex flex-col gap-6">
          <h1 className="text-4xl font-bold">What is Bundler?</h1>
          <p>
            it is package . package is like a module of js file if we want to
            have package in our app then we use package manager in our app of
            package manager is npm.
          </p>
          <h1 className="text-4xl font-bold"> Why we use package manager?</h1>
          <p className="leading-7">
            when we use package manager it manages all our installed packages
            bcoz we need lot of things , we need to remove, minify things , we
            want to manage packages , React app is a huge app which does not
            just run on react there arelot of superpowers which we need and
            these superpowers comes fromdiffernet packages and these packages
            comes by using npm.Because our React app is powered by lots of
            things lot of packages , suppose we have to minify it we have to
            bundle things updatingwe have to remove console logs for that w need
            lot of helper packages and these helper packages comes inside npm.
          </p>
        </div>

        {/*  iginiting our app with parcel */}
        <div className="p-4">
          <h1 className="text-4xl font-bold">
            Let's iginite our App with parcel
          </h1>
        </div>

        {/*  install parcel */}
        <div className="p-4">
          <h1>1 - Install parcel as Dev-dependency</h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>npm install -D parcel</p>
          </div>
        </div>

        {/*  dependency vs dev-dependency */}
        <div className="p-4">
          <h1 className="text-4xl font-bold py-4">
            Dependeny vs Dev Dependency
          </h1>
          <ul className="flex justify-between gap-4 list-disc w-full">
            <li className="w-10/12">
              Dependency - is an object that contains the library , which our
              project require for production environment and function
              effectively eg. - Tailwind , Bootstrap , React etc.
            </li>
            <li className="w-10/12">
              Dev Dependency - are those packages that we use only for project
              development eg. - Babel , Webpack , Parcel etc.
            </li>
          </ul>
        </div>

        {/*  package.json and pacage-lock.json */}
        <div className="p-4">
          <h1 className="text-4xl font-bold py-4">
            Important things about package-lock.json
          </h1>
          <ul className="list-decimal">
            <li>package-lock.json is ver important file</li>
            <li>It locks the version </li>
            <li>
              It maintains hash of it as well this hash ensures that what
              exactly parcel version is in my system is exactly same as in
              production environment , it maintains the integrity
            </li>
          </ul>
          <p className="bg-green-200 py-4 font-bold">
            if i have my package-lock i can regenrate my node_modules exactly
            same and u should not upload it in git we will generate node_modules
            on our server bcoz node_modules are heavy so dont upload them in git
            a well as on your server
          </p>
        </div>
        {/*  instal react */}
        <div className="p-4">
          <h1>2 - Install React </h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>npm install react</p>
          </div>
        </div>

        {/*  instal react - dom */}
        <div className="p-4">
          <h1>3 - Install React-Dom </h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>npm install react-dom</p>
          </div>
        </div>

        {/*  executing inde.html with parcel */}
        <div className="p-4">
          <h1>3 - Executing index.html with parcel </h1>
          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <p>npx parcel index.html </p>
          </div>
          <p>
            execute pracel with entrypoint as index.html this will create a
            developent build for us and host us server
          </p>
        </div>

        {/*  parcel features */}
        <div className="p-4">
          <h1 className="text-4xl font-bold">Parcel Features</h1>
          <ul className="flex flex-col gap-3 p-4">
            <li>
              <span className="text-xl font-bold">
                HMR -Hot Module Replacement{" "}
              </span>
              - parcel will keep track of all files which are updating . if u
              change anything in ur file parcel will reflects anything changes
            </li>
            <li>
              <span className="text-xl font-bold">FIle Watcher Algorithm</span>-
              parcel uses file watcher algorithm written in c++ it keeps track
              of all files which are changing Real time and it tells server to
              re-load
            </li>
            <li>
              <span className="text-xl font-bold">Parcel Cache</span>- parcel is
              using parcel cache for HMR and File Watcher Algorithm
            </li>
            <li>
              <span className="text-xl font-bold">Dist Folder</span>- parcel
              keeps the file minifed for us when we use npx parcel build
              index.html parcel minfies files for us and push them inside distt
              folder thus making develpment build to upload
            </li>
            <li>
              <span className="text-xl font-bold">Bundling</span>- parcel bundle
              our all files thus reducing the space and makes our app super fast
            </li>
            <li>
              <span className="text-xl font-bold">Minfiying</span>- parcel
              minfiy files for us it removes the extra spaces and removes
              console logs fr us
            </li>
            <li>
              <span className="text-xl font-bold">
                Development and Production Build
              </span>
              - parcel gives us develpoment build and production build
              separately for us so we can work in diffenrent environments easily
            </li>
            <li>
              <span className="text-xl font-bold">Image Optimisation</span>-
              parcel optimises all of our images it cahces our images for faster
              accessing
            </li>
            <li>
              <span className="text-xl font-bold">HTTPs Server</span>- parcel
              gives us https server out of box just type npx parcel index.html
              --https
            </li>
            <li>
              <span className="text-xl font-bold">Zero Config Bundler</span>-
              parcel is a zero config bundler it dont need any extra config to
              run just install it and gives entrypoint parcel does everything on
              its own
            </li>
            <li>
              <span className="text-xl font-bold">Tree Shaking</span>- parcel
              uses tree shaking algorithm it removes unwanted code
            </li>
          </ul>
        </div>

        {/*  code */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">React App</h1>

          <div className="bg-slate-200 p-4 my-4 text-slate-600 rounded-lg">
            <pre>
              <h1>import &#123;react &#125; from "react"</h1>
              <h1>import &#123;react-dom &#125; from "react-dom/client"</h1>
              <br />
              <h1>
                const root = reactdom.create(document.getElementById("root");
              </h1>
              <h1>root.render(&lt;h1&gt; Hello World &lt;h1&gt;);</h1>
            </pre>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Bundlers;
