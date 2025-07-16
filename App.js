
import React from "react";
import ReactDOM from 'react-dom/client';


/*
  const heading = React.createElement("h1", { id: "heading" }, "hello world from react");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  */

  /*const parent = React.createElement("div", { id: "parent" },[
                React.createElement("div",{id:"child"},[
             React.createElement("h1",{key: 1},"I'm an h1 tag"),
             React.createElement("h1",{key:2},"I'm an h2 tag"),
            ]),
                
                React.createElement("div",{id:"child2"},[
             React.createElement("h1",{key:3},"I'm an h1 tag"),
             React.createElement("h1",{key:4},"I'm an h2 tag"),
  ]),
]);
  console.log(parent);
   const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);*/
  /* const Title=() => (
    <h1 className="head" tabIndex="5">
      Namesthe React
      </h1>
   );
   const HeadingComponent = () => (
    <div id="container">
      {Title()}
      <Title></Title>
      <Title/>
      <h1 className="heading">Namesthe React funcdamental component</h1>
    </div>
   );

   const root= ReactDOM.createRoot(document.getElementById("root"));
   root.render(<HeadingComponent/>);*/

   
 

import Header from "./src/components/Header";
import Body from "./src/components/Body";

   const AppLayout = () => {
      return (
       <div className="app">
          <Header/>
          <Body/>
      </div>
    );
  };

  const root= ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);
