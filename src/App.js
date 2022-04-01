import React from 'react';
import Review from './Review';
function App() {
  return(
    // appjs içerisinde pek bişey yapmadık
    // hazır css üzerine html tagleri oluşturduk
  <main>
    <section className="container">
      <div className="title">
        {/* capitalize */}
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </section>
    </main> 
)
}

export default App;
