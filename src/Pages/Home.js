import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom';
import Banner from "../Images/banner.jpeg"
import "../Styles/HeaderStyle.css";
  const Home = () => {
    return (
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
            <h2>Taste the world, online</h2>
            <p>Best Food In Pakistan</p>
            <Link to="/menu">
              <button>Click For Order</button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Home;