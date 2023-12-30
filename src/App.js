/*

* parcel create server for you.
* HMR - HOT MODULE REPLACEMENT.

* parcel : KEEP TRACK OF ALL THE FILES THAT YOUR ARE UPDATING
* with the help of{File Watcher algorithm}.(written in C++).
* BUNDLING
* MINIFY
* Cleaning our code
* manages Dev and Production Build
* Super Fast build algorith
* Image Optimization as images take longer time to load on a website.
* Caching(reducing the load on backend resources and network congestion) while development.
* compatible with older version of browser.
* It Enables to work on HTTPS on Dev machine.
* parcel Manages port number
* Consistent Hashing Algorithm uses to cache things up.
* Zero Configuration.
* Tree shaking - removing unwanted code.

* We have our package manager which handles and takes care of Transitive Dependencies of our code..


* dist folder -> dist create faster development version of our project and servers it on the server.

*/

import React from "react";
// import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";

// default import
// import Title from "./components/Header";

//named import - curly bracket is important

import {Title,Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


// React.createElement => Object => HTML(DOM)

/**
 *   First this React.createElement function() give you an object,
 * Then this oject goes inside const heading
 * Then this object is rendered as HTML in your DOM.

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h2",
  },
  "Bye Everyone!"
);
*/
// const heading = createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h2",
//     },
//     "Namaste Everyone!"
//   );
//instead of upper code write in JSX

//************************************************************************ */\
// JSX - JavaScript XML -
//it is an html like syntax but not an HTML

// JSX - Uses react.createElement behind the scene.
// * babel converts JSX to React.createElement

// JSX was developed by Facebook Developers,
// In JSX tabIndex="" -> written like this in camel case.
// while in HTML tab-Index="1"

// Below code is not html
// Browser doesn;t understand these code.
// Babel Understand these code.**

// const heading2 = (
//   <h1 id="title" key="h2" >
//     Namaste React Bhiayo!
//   </h1>
// );

// if we convert above code into functional component :

// we can call it in two ways as below :
//<Title/>
// {Title()}

// if we have to call react element in FunctionalComponent then:

// {heading} :-> this is the syntax to call it.

// const HeaderComponent=()=>{
//   return(<div>
//     {heading2} here it is react element call
//     <title/> here is functiona Component call called Composing Component.
//     {title()}
//     <h1>Namaste React Funtional Component</h1>
//     <h2>This is a h2 tag</h2>
//   </div>);
// };

/**Write all this using react:
        <div class="header" >
        <h1>Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>**/

// **Every thing is a COMPONENT in React.
// 1. Functional Component-is a new way of writing code.
// 2. Class Based Component-is old way of writing code.


// config driven UI




//JSX can only have one parent.
// So react give us acces to React.Fragement or (<> </>) which is a component and coming from react library.
//  <ResturantCard resturant = {resturantList[0]}/>
// ----React------------Props inside react-> props is properties.




// <> </> ]-> this is React.Fragment -> they wrap the elements in a/Single root.
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element inside the root
// root.render(heading2);

// when i have to render "Functional Component" follow < /> the syntax inside bracket.
root.render(<AppLayout />);
