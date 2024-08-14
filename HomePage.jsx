import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import employees from '../images/employees.png';
import managers from '../images/managers.png';
import Footer from './Footer';

const homePageStyles = {
  container: {
    marginTop: '3rem',
  },
  header: {
    fontSize: '2.5rem',
    color: '#343a40',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#495057',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#61dafb',
    borderColor: '#61dafb',
    color: '#282c34',
    marginTop: '1rem',
    borderRadius: '20px',
  },
  hr: {
    borderColor: '#61dafb',
    margin: '3rem 0',
  },
};

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container" style={homePageStyles.container}>
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <h1 style={homePageStyles.header}>Welcome to Project Management Tool</h1>
            <p style={homePageStyles.text}>
              A project management tool is a powerful tool designed to help individuals and teams efficiently
              organize, track, and accomplish their tasks and projects. By centralizing tasks in one place, it
              allows users to easily create, assign, and prioritize assignments, ensuring that nothing falls
              through the cracks. With features such as deadlines, reminders, and progress tracking, the system
              promotes accountability and keeps everyone on the same page.
            </p>
            <p style={homePageStyles.text}>
              Additionally, the system's data analytics provide valuable insights into productivity trends,
              enabling users to identify areas for improvement and optimize their workflows. Whether for personal
              use or within organizations, a task management system enhances productivity, reduces stress, and
              empowers individuals and teams to achieve their goals efficiently.
            </p>
            <Link to="/user/login" className="btn" style={homePageStyles.button}>
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img src={employees} alt="Employees" style={homePageStyles.image} />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={managers} alt="Managers" style={homePageStyles.image} />
          </div>
          <div className="col-md-8">
            <h1 style={{ ...homePageStyles.header, marginLeft: '2rem' }}>
              Handle Multiple Projects Efficiently
            </h1>
            <p style={{ ...homePageStyles.text, marginLeft: '2rem' }}>
              Handling multiple projects efficiently is a skill that requires effective organization, prioritization,
              and time management. The key to success lies in establishing a systematic approach to balance and
              execute tasks across various projects. Breaking down each project into manageable tasks, setting clear
              deadlines, and prioritizing based on urgency and importance can help prevent feeling overwhelmed.
            </p>
            <p style={{ ...homePageStyles.text, marginLeft: '2rem' }}>
              Utilizing project management tools, such as online project management tool, can centralize all
              project-related information, enabling seamless collaboration and progress tracking. Regularly reviewing
              and updating project status, communicating with stakeholders, and adapting to changing circumstances
              ensures that all projects stay on track.
            </p>
            <Link to="/user/login" className="btn" style={{ ...homePageStyles.button, marginLeft: '2rem' }}>
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <hr style={homePageStyles.hr} />
      <Footer />
    </div>
  );
};

export default HomePage;
