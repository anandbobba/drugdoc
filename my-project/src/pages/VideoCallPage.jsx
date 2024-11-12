import React, { useEffect, useRef, useState } from 'react';
import Daily from '@daily-co/daily-js';
import doctorImage from '../assets/doctor4.png';

const VideoCall = () => {
    const videoFrameRef = useRef(null);
    const chatBoxRef = useRef(null);
    const chatInputRef = useRef(null);
    const [socket, setSocket] = useState(null);
    const [meetingTime, setMeetingTime] = useState(''); // State to store the meeting time

    useEffect(() => {
        // Daily.co API setup for video call
        if (videoFrameRef.current) {
            const dailyRoomURL = "https://hackerearthnmamit.daily.co/drugdoc"; 
            videoFrameRef.current.src = dailyRoomURL;
        }

        // WebSocket setup for chat
        const newSocket = new WebSocket("ws://your-websocket-url"); // Replace with your WebSocket server URL
        setSocket(newSocket);

        newSocket.onmessage = function(event) {
            const message = event.data;
            displayMessage(message);
        };

        return () => {
            newSocket.close();
        };
    }, []);

    const displayMessage = (message) => {
        if (chatBoxRef.current) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBoxRef.current.appendChild(messageElement);
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight; // Auto-scroll to bottom
        }
    };

    const sendMessage = () => {
        const message = chatInputRef.current.value;
        if (message.trim() !== "") {
            socket.send(message); // Send message to WebSocket server
            chatInputRef.current.value = ""; // Clear input field
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const handleScheduleMeeting = () => {
        if (meetingTime) {
            alert(`Meeting is scheduled at ${meetingTime}`);
        } else {
            alert("Please select a time to schedule the meeting.");
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '85vh', 
            background: 'linear-gradient(to bottom right, #f0f8ff, #d7f3e3)', 
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                maxWidth: '800px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <img src={doctorImage} alt="Doctor" style={{ width: '80px', height: '90px', marginRight: '20px' }} />
                    <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Video Call Consultancy</h1>
                </div>
                <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#666', marginBottom: '20px', textAlign: 'center' }}>Connect with Health Experts</h2>
                
                {/* Schedule Meeting Section */}
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <input 
                        type="time" 
                        value={meetingTime} 
                        onChange={(e) => setMeetingTime(e.target.value)} 
                        style={{
                            padding: '10px', 
                            fontSize: '1em', 
                            borderRadius: '5px', 
                            marginRight: '10px',
                            color: 'white', // Ensures time input text is visible
                            border: '1px solid #ddd',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                            marginBottom: '10px'
                        }}
                    />
                    <button 
                        style={{ 
                            padding: '10px 20px', 
                            fontSize: '1em', 
                            backgroundColor: '#0079bf', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginBottom: '10px'
                        }} 
                        onClick={handleScheduleMeeting}
                    >
                        Schedule a Meeting
                    </button>
                </div>
                
                <button 
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '1em', 
                        backgroundColor: '#0079bf', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }} 
                    onClick={() => {
                        const videoFrame = document.getElementById('videoFrame');
                        if (videoFrame) {
                            videoFrame.style.display = 'block';
                        }
                    }}
                >
                    Join a Meeting
                </button>
                
                <iframe 
                    id="videoFrame" 
                    ref={videoFrameRef} 
                    style={{ 
                        width: '100%', 
                        height: '50vh', 
                        border: '2px solid #ddd', 
                        borderRadius: '8px', 
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                        display: 'none'
                    }} 
                    allow="camera; microphone; fullscreen; speaker; display-capture">
                </iframe>
            </div>
        </div>
    );
};

export default VideoCall;
