import axios from 'axios'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState([])
  const [query, setQuery] = useState("Mountain")

  const handleMountain=()=>{
    setQuery('Mountain');
    getImages();
  }
  const handleBeach=()=>{
    setQuery('Beach');
    getImages();
  }
  const handleBirds=()=>{
    setQuery('Birds');
    getImages();
  }
  const handleFood=()=>{
    setQuery('Food');
    getImages();
  }

  const getImages = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=AjkjT188d7B5Lu0Npz-UtzMAQEclU-U2A5ZkkokuBAo`)
      .then((response) => {
        setImage(response.data.results);
        console.log(response.data.results);
      })
  }



  return (
    <>
      <div className="app">
        <h1>SnapShot</h1>
        <div className='container my-2'>
          <div className='row'>
            <div className="col-4">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Your Query" aria-label="Search Your Query" aria-describedby="basic-addon2" onChange={(e) => { setQuery(e.target.value) }} />
                <span class="input-group-text material-symbols-outlined" id="basic-addon2" style={{ cursor: 'pointer' }} onClick={getImages}>
                  search
                </span>
                <br />

              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='extraBtn'>
          <button type="button" class="btn btn-warning" onClick={handleMountain}>Mountain</button>
          <button type="button" class="btn btn-warning" onClick={handleBeach}>Beachs</button>
          <button type="button" class="btn btn-warning" onClick={handleBirds}>Birds</button>
          <button type="button" class="btn btn-warning" onClick={handleFood}>Food</button>
        </div>



        <div className="container">
          <div className="row">
            {
              image.map((value, index) => {
                return (
                  <div className="col-4">
                    <div class="card" style={{ width: '18rem' }}>
                      <img src={value.urls.small} class="card-img-top" alt="..." />

                    </div>
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
