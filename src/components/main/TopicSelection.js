import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicSelection.css'; 

const TopicSelection = ({ onSelectTopic }) => {
    const navigate = useNavigate();
    const topics = ["Geography", "Languages"];
   // const [messageVisible, setMessageVisible] = useState(false); // State to control message visibility

    const handleSelectTopic = (topic) => {
        onSelectTopic(topic);
        navigate('/quiz');
    };


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
        padding: '2rem', // Add padding to create a black transparent box
        borderRadius: '15px', // Add border-radius for rounded corners
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black background with transparency
        color: '#fff', // White text color
        textAlign: 'center', // Center align text
        textShadow: '2px 2px 5px rgba(0, 0, 0, 1)'

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
            
            <h1>There are 5 questions per topic</h1>
        </div>
    );
};

export default TopicSelection;



