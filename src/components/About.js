import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About QouteSnap</h1>
            <p>
                Welcome to <strong>QouteSnap</strong>, your go-to source for daily inspiration and motivation! Our web app generates random quotes to uplift your spirits and spark your creativity.
            </p>
            <p>
                Our mission is to provide you with a moment of reflection and positivity, one quote at a time. Whether you're looking for wisdom from historical figures, insights from modern thinkers, or just a bit of encouragement to get through the day, QouteSnap has something for everyone.
            </p>
            <h2>How It Works</h2>
            <p>
                QouteSnap leverages modern web technologies to deliver a seamless user experience. Our app is built using <a href='https://react.dev' target='_blank'><strong>React</strong></a> for a dynamic and responsive interface. We fetch quotes from a  <a href="https://ron-swanson-quotes.herokuapp.com/v2/quotes">public API</a> to ensure a diverse range of inspirational content.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Random quotes displayed in a visually appealing card format</li>
                <li>Responsive design for optimal viewing on any device</li>
                <li>Easy-to-use interface for browsing and saving quotes</li>
                <li>Frequent updates with new and fresh quotes</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
                We'd love to hear from you! If you have any questions, suggestions, or feedback, please feel free to reach out to us at <a href="mailto:aryanak9163@gmail.com">aryanak9163@gmail.com</a>.
            </p>
            {/* provide the linkedIn and github links to the site */}
            <h2>Follow Us</h2>
            <p>
                Stay connected with us on social media for the latest updates and news:
            </p>
            <ul>
                <li><a href="https://www.linkedin.com/in/aryanji/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/developeraaryan" target="_blank">GitHub</a></li>
            </ul>
            <h2>Thank You</h2>
            <p>
                Thank you for visiting QouteSnap. We hope our quotes bring a bit of brightness to your day!
            </p>

        </div>
    );
};

export default About;
