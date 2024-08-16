import React from 'react';
import './EventsComponent.css';

const EventsComponent = () => {
    return (
        <div className="events-section">
            <div className="events-row">
                <div className="events-column">
                    <div className="events-header">
                        <h2>Check Out Our Events</h2>
                    </div>
                    <div className="events-description">
                        <p>We regularly host educational events in our communities to help current and prospective families learn more about senior living options, aging well, dementia, and more.</p>
                    </div>
                    <div className="events-button-wrapper">
                        <a className="events-button" href="https://www.aegisliving.com/events/">VIEW UPCOMING EDUCATIONAL EVENTS</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsComponent;
