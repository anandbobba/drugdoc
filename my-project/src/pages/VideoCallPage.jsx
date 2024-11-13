import React, { useEffect, useRef } from 'react';

const VideoCall = () => {
    const videoFrameRef = useRef(null);

    useEffect(() => {
        if (videoFrameRef.current) {
            const dailyRoomURL = "https://hackerearthnmamit.daily.co/drugdoc"; 
            videoFrameRef.current.src = dailyRoomURL;
        }
    }, []);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100vw', 
            height: '100vh', 
            margin: 0, 
            padding: 0, 
            overflow: 'hidden' 
        }}>
            {/* Full-Screen Video Frame */}
            <iframe 
                ref={videoFrameRef} 
                style={{ 
                    width: '100vw', 
                    height: '100vh', 
                    border: 'none',
                }} 
                allow="camera; microphone; fullscreen; speaker; display-capture">
            </iframe>
        </div>
    );
};

export default VideoCall;
