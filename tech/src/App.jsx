import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Posts from './Posts';

const App = () => {
  useEffect(() => {
    ;
  }, []);

  const [hasPosts, setHasPosts] = useState(true);

  const loadMorePosts = () => {
    // Implement your load more posts logic here
    console.log('Load more posts');
  };

  return (
    <div style={{ background: '#343a40', minHeight: '100vh', color: 'white' }}>

      {/* Navbar */}
      <NavBar />
      {/* Main Content */}
      <div className="container mt-5">
        <h1>Welcome to Tech2xplore</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="slider-container">
              <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img src="vite.svg" className="d-block w-100" alt="Image 1" />
                  </div>
                  <div className="carousel-item active">
                    <img src="vite.svg" className="d-block w-100" alt="Image 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="vite.svg" className="d-block w-100" alt="Image 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="content">
              <div className="slider">
                <div className="search-div">
                  <form action="/search" method="post">
                    <input type="text" name="keyword" className="text-input" placeholder="Search..." />
                  </form>
                </div>
                <div className="section topics">
                  <h2>Topics</h2>
                  <hr className="black-hr" />
                  <ul style={{ listStyle: 'none' }}>
                    <li style={{ color: '#5c5b5b', textDecoration: 'double', fontWeight: 'bolder' }}>
                      <a href="/filter/category/Coding" className="tag color--0">Coding</a>
                      <hr />
                    </li>
                    <li style={{ color: '#5c5b5b', textDecoration: 'double', fontWeight: 'bolder' }}>
                      <a href="/filter/category/Technology" className="tag color--1">Technology</a>
                      <hr />
                    </li>
                    <li style={{ color: '#5c5b5b', textDecoration: 'double', fontWeight: 'bolder' }}>
                      <a href="/filter/category/Robotics" className="tag color--2">Robotics</a>
                      <hr />
                    </li>
                    <li style={{ color: '#5c5b5b', textDecoration: 'double', fontWeight: 'bolder' }}>
                      <a href="/filter/category/News" className="tag color--3">News</a>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="container" style={{ marginLeft: '5%' }}>
        <div className="page-content">
          <h1 className="recent-posts-title text-center">Recent Posts</h1>
          <div className="posts-list" id="post-container">
            {hasPosts ?
              <Posts /> :
              <div className="alert alert-dark text-center">
                <h2>Posts Are Currently Not Available</h2>
              </div>
            }
          </div>
          <div style={{ width: '62%', marginLeft: '19%', display: 'none' }} className="alert alert-warning text-center" role="alert" id="alertMessage">
            <span id="content">First Login Please! You are redirected at Login Page In 3 Seconds ...</span>
          </div>
        </div>
        <div className="justify-content-center mt-5 mb-5" style={{ display: 'none' }} id="loader">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <button id="load-more" style={{ width: '62%', marginLeft: '19%' }} onClick={loadMorePosts}>Load More</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;