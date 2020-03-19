import React from 'react';
import '../styles/WelcomeJumbo.css';

function WelcomeJumbo() {
  return (
    <div class="jumbotron text-center">
      <h3 class="display-5">Welcome to Name!</h3>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <a class="btn btn-primary btn-lg " href="/" role="button">Sign up</a>
    </div>
  );
}

export default WelcomeJumbo;
