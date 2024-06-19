import React from 'react';
import { StyledHomePage } from './Homepage.styled.js';
import FeaturedTasks from '../../components/FeaturedTasks/FeaturedTasks';
import Navbar from "../../components/Navbar/Navbar.jsx"

const HomePage = ({ toggleTheme, theme }) => {
  return (
    <StyledHomePage>
        {/* <Navbar toggleTheme={toggleTheme} themeMode={theme} /> */}
      <h1>Welcome to CrowdTag!</h1>
      <p>Welcome to <strong>CrowdTag</strong>, where you can contribute to exciting projects and help train AI models by completing simple tasks!</p>
      <hr />
      <section>
        <h2>Get Started</h2>
        <p><strong>Join our community of contributors and start making a difference today!</strong></p>
        <a href="/signup">Sign Up Now</a>
      </section>
      <hr />
      <section>
        <h2>Explore Tasks</h2>
        <h3>Discover Exciting Projects</h3>
        <p>Browse through a variety of tasks across different categories and choose the ones that interest you the most.</p>
        <a href="/tasks">Explore Tasks</a>
      </section>
      <hr />
      <section>
        <h2>Earn Rewards</h2>
        <h3>Contribute and Earn</h3>
        <p>Complete tasks and earn rewards for your valuable contributions.</p>
        <a href="/rewards">Learn More</a>
      </section>
      <hr />
      <section>
        <h2>Featured Tasks</h2>
        <h3>Start Contributing Now!</h3>
        <FeaturedTasks />
      </section>
      <hr />
      <section>
        <h2>Why CrowdTag?</h2>
        <ul>
          <li><strong>Make a Difference:</strong> Your contributions directly impact the development of AI technologies.</li>
          <li><strong>Flexible Work:</strong> Work on tasks anytime, anywhere, and earn rewards at your own pace.</li>
          <li><strong>Community Engagement:</strong> Connect with other contributors, share insights, and learn from each other.</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Join Us Today!</h2>
        <p>Sign up now and start contributing to exciting AI projects!</p>
      </section>
    </StyledHomePage>
  );
};

export default HomePage;
