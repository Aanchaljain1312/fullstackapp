import React, { useEffect, useState } from 'react';

const FlaskTemplateComponent = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:7000')  // Replace with your Flask server URL
            .then(response => response.text())
            .then(data => setHtmlContent(data))
            .catch(error => console.error('Error fetching HTML:', error));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default FlaskTemplateComponent;
