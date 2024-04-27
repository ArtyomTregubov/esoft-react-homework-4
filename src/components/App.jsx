import React from "react";
import Header from "./Header";
import WindowSize from "./WindowSize";
import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";
import UserList from "./UserList"

const App = () => {

  return (
    <div className="App">
    <Header/>
    <main>
        <section className="homework">
            <CountdownTimer/>
            <UserList/>
            <WindowSize/>
        </section>
    </main>
    <Footer/>
    </div>
    
  );
}

export default App;