
import React from "react";
import './../styles/App.css'; 

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <Router>
        {/* Navigation links */}
        <Navigation />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
