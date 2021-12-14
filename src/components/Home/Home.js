 import React from 'react'
 import "./Home.css"
 const Home = () => {
     return (
        <div className="hero">
          <div class="card bg-white text-black border-0"  > 
            <img src="/assets/book1.jpg" class="card-img height-50px" alt="Background"
            margin="200px"
            width="100%"
            height="650px"
            margin="200px"
            style={{padding: "12px"}}
            />
            <div class="card-img-overlay d-flex flex-column justify-content-center"  >
              <div classname="container">
                <h5 class="card-title display-3 fw-bolder mb-0">NEW COLLECTION</h5>
                <p class="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                </p>
              </div>
            </div>
          </div>
      </div>    
     )
 }
 
 export default Home
 