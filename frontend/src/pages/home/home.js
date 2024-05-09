import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import CalendarComponent from '../../components/Calendar/CalendarComponent';
import '../home/home.css'; // You may want to create a separate CSS file for styling

function Home() {
  return (
    <div className="Home">
      <main className="main-container">
        <div className="wardrobe-tabs">
          {/* View wardrobe tab */}
          <div className="wardrobe-tab view-wardrobe-tab">
            <h3>Build your Collection</h3>
            <img src="/images/harvey.jpg" alt="Model" />
            <Link to="/addproduct">
              <button>Add Costume</button>
            </Link>
          </div>
          {/* Modify wardrobe tab */}
          <div className="wardrobe-tab modify-wardrobe-tab">
            <h3>Modify Wardrobe</h3>
            <img src="/images/image.png" alt="Model" />
            {/* Link to the UploadForm page */}
            <Link to="/update">
              <button>Modify</button>
            </Link>
          </div>
        </div>
        <CalendarComponent />
      </main>
      <button className="logout-button">Logout</button>
    </div>
  );
}

export default Home;
