import React from 'react';
import './FullwidthImage.css';

const FullwidthImage = ({ src, alt }) => {
    return (
        <section className="fullwidth-section">
            <div className="fullwidth-image-container">
                <img 
                    src={src} 
                    alt={alt} 
                    className="fullwidth-image"
                />
            </div>
        </section>
    );
};

export default FullwidthImage;
