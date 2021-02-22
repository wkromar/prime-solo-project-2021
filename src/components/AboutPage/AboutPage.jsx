import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="userInfo">
        <p>
          Welcone To Snackr. The main advantages of this app is to discover new
          food items to minimize time spent in grocery and convenience stores
          looking around through countless options to keep you and your close
          one safe.
        </p>
        <p>
          You may create your own list of saved snacks if you wish to keep your
          curiosity picks at your fingertips.
        </p>
        <p>This App was created using these technologies:</p>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>PostGres</li>
          <li>Redux</li>
          <li>Saga</li>
          <li>Github</li>
          <li>VsCode</li>
          <li>SASS</li>
        </ul>
        <p>
          If you have any questions please forward them to WKromar12@gmail.com
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
