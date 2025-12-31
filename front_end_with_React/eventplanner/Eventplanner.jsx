import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer'; //Import Footer

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/*Section for describing the purpose of the app*/}
            <section className='description'>
                    {/*Brief introduction or marketing message*/}
                    <p>
                        Plan and organize your events effortlessly with Event Planner.
                        From birthdays to corporate meetings, we've got you covered.
                    </p>
                    {/*Primary call-to-action button*/}
                    <button className='get-started-button'>Get Started</button>
                </section>
                <section className='events_categories'>
                    {/*Event categories content*/}
                    <ul>
                        <h2>Social Events:</h2>
                        <li>Birthday parties</li>
                        <li>Anniversary celebrations</li>
                        <li>Wedding receptions</li>
                        <li>Baby showers</li>
                        <li>Graduation parties</li>
                        <li>Family reunions</li>
                    </ul>
                    <ul>
                        <h2>Entertainment Events:</h2>
                        <li>Concerts</li>
                        <li>Music festivals</li>
                        <li>Film screenings</li>
                        <li>Comedy shows</li>
                        <li>Art exhibitions</li>
                        <li>Cultural events</li>
                    </ul>
                    <ul>
                        <h2>Community Events:</h2>
                        <li>Fundraising events</li>
                        <li>Charity galas</li>
                        <li>Volunteer drives</li>
                        <li>Neighbourhood block parties</li>
                        <li>Community festivals</li>
                        <li>Cultural celebrations</li>
                    </ul>
                </section>
                <section className='features'>
                    {/*Features content*/}
                    <h2>Features:</h2>
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management </li>
                        <li>Real-time collaboration </li>
                        <li>Reminders and notifications</li>
                    </ul>
                </section>
                <section className='testimonials'>
                    {/*Testimonials content*/}
                    <h2>Testimonials</h2>
                    <div className='testimonial'>
                        <p>"Event planner made organizing my wedding a breeze. Highly recommended!"</p>
                        <p className='authour'>- Emily Johnson</p>
                    </div>
                    <div className='testimonial'>
                        <p>"Event planner was easy to use and well organized, making our annual congress planning process much more manageable. Its clear structure and reliable features helped keep everything on track and reduced the overall effort required to organize the event."</p>
                        <p className='authour'>- John Bull</p>
                    </div>
                </section>
                <section className= 'contact'>
                    {/*Contact content*/}
                    <h2>Contact Us</h2>
                    {/*Contact form*/}
                    <form>
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                        <textarea placeholder='Message'></textarea>
                        <button className='submit-button'>Send</button>

                    </form>
                </section>
                <Footer/>
        </div>
    );
};

export default EventPlanner;
