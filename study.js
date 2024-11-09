import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const videos = [
    {
      id: 'video1',
      title: 'Botany Alpha',
      teacher: 'Dr. Akanksha Agarwal',
      time: '01:15 PM',
      url: 'https://www.youtube.com/watch?v=videoID1',
      thumbnail: '/path/to/custom-thumbnail1.jpg',
    },
    {
      id: 'video2',
      title: 'Physics Legend',
      teacher: 'Manish Raj',
      time: '08:45 AM',
      url: 'https://www.youtube.com/watch?v=videoID2',
      thumbnail: '/path/to/custom-thumbnail2.jpg',
    },
    {
      id: 'video3',
      title: 'Physics Alpha',
      teacher: 'Abhishek Verma',
      time: '09:00 AM',
      url: 'https://www.youtube.com/watch?v=videoID3',
      thumbnail: '/path/to/custom-thumbnail3.jpg',
    },
    {
      id: 'video4',
      title: 'Organic Chemistry',
      teacher: 'Yogesh Jain',
      time: '01:44 PM',
      url: 'https://www.youtube.com/watch?v=videoID4',
      thumbnail: '/path/to/custom-thumbnail4.jpg',
    }
  ];

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    setComments([]); // Clear comments when a new video is played
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="app">
      <h1 className="heading">Today's Classes</h1>
      <div className="container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.teacher}</p>
              <p className="time">{video.time}</p>
              <button className="play-btn" onClick={() => handlePlayVideo(video)}>Play</button>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="active-video">
          <h2>Playing: {activeVideo.title}</h2>
          <iframe
            width="100%"
            height="400"
            src={'https://www.youtube.com/embed/${activeVideo.url.split('=')[1]}'}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          > </iframe>

          {/* Comment Section */}
          <div className="comment-section">
            <h3>Comments</h3>
            <div className="comment-input">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button onClick={handleAddComment}>Comment</button>
            </div>
            <ul className="comment-list">
              {comments.map((comment, index) => (
                <li key={index} className="comment">{comment.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;