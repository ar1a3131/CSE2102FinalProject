import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicSelection.css'; // Ensure this file exists and is in the correct path

const TopicSelection = ({ onSelectTopic }) => {
    const navigate = useNavigate();
    const topics = ["Geography", "Languages"];
   // const [messageVisible, setMessageVisible] = useState(false); // State to control message visibility

    const handleSelectTopic = (topic) => {
        onSelectTopic(topic);
        navigate('/quiz');
    };

    // Inline style for the background image
    const containerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/map.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Include other styles you want to apply directly here
    };

    return (
        <div style={containerStyle}>
            <h2 className="topic-selection-header">Select a Topic</h2>
            <div className="topic-buttons-container">
                {topics.map((topic, index) => (
                    <button key={index} onClick={() => handleSelectTopic(topic)} className="topic-button">
                        {topic}
                    </button>
                ))}
            </div>
            

        </div>
    );
};

export default TopicSelection;



