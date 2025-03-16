import React, { useState } from 'react';
import './OurEvents.css';

// Import 2011 images
import event2011_1 from '../../../images/events-pic-2011/A1P1.jpg';
import event2011_2 from '../../../images/events-pic-2011/A1P2.jpg';
import event2011_3 from '../../../images/events-pic-2011/A1P3.jpg';
import event2011_4 from '../../../images/events-pic-2011/A1P4.jpg';

// Import 2016 images
import event2016_1 from '../../../images/events-pic-2016/ec24aa39c5d75b3d6052ccb88a5efe35.PNG';
import event2016_2 from '../../../images/events-pic-2016/ec24aa39c5d75b3d6052ccb88a5efe35.PNG';
import event2016_3 from '../../../images/events-pic-2016/ec24aa39c5d75b3d6052ccb88a5efe35.PNG';
import event2016_4 from '../../../images/events-pic-2016/ec24aa39c5d75b3d6052ccb88a5efe35.PNG';

const OurEvents = ({ language }) => {
    const [activeTab, setActiveTab] = useState('photos');
    const [selectedYear, setSelectedYear] = useState('2016');
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const events = {
        '2011': {
            images: [event2011_1, event2011_2, event2011_3, event2011_4],
            title: language ? 'Events 2011' : 'فعاليات 2011',
            description: language 
                ? 'Collection of our memorable events from 2011'
                : 'مجموعة من فعالياتنا المميزة لعام 2011'
        },
        '2016': {
            images: [event2016_1, event2016_2, event2016_3, event2016_4],
            title: language ? 'Events 2016' : 'فعاليات 2016',
            description: language 
                ? 'Collection of our memorable events from 2016'
                : 'مجموعة من فعالياتنا المميزة لعام 2016'
        }
    };

    const videos = [
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        },
        {
            id: 'FeO8z6sO8Y4',
            title: language ? 'Corporate Event 2016' : 'فعالية الشركة 2016'
        },
        {
            id: 'IFdXcdpqqNg',
            title: language ? 'Company Overview 2016' : 'نظرة عامة على الشركة 2016'
        },
        {
            id: 'R_1cOy86wqs',
            title: language ? 'Company Video' : 'فيديو الشركة'
        }
    ];

    const handleNextImage = () => {
        setSelectedImage((prev) => 
            prev === events[selectedYear].images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevImage = () => {
        setSelectedImage((prev) => 
            prev === 0 ? events[selectedYear].images.length - 1 : prev - 1
        );
    };

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="our-events" id="events">
            <div className="container">
                <h2>{language ? "Our Events" : "فعالياتنا"}</h2>
                
                <div className="tab-buttons">
                    <button 
                        className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('photos')}
                    >
                        {language ? "Photos" : "الصور"}
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('videos')}
                    >
                        {language ? "Videos" : "الفيديوهات"}
                    </button>
                </div>

                <div className="events-content">
                    {activeTab === 'photos' ? (
                        <>
                            <div className="years-selector">
                                {Object.keys(events).map(year => (
                                    <button
                                        key={year}
                                        className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setSelectedImage(0);
                                        }}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                            <div className="event-display">
                                <div className="event-gallery">
                                    <div className="event-image">
                                        <button className="nav-button prev" onClick={handlePrevImage}>
                                            {language ? "❮" : "❯"}
                                        </button>
                                        <img 
                                            src={events[selectedYear].images[selectedImage]} 
                                            alt={`${events[selectedYear].title} - ${selectedImage + 1}`}
                                            className="main-event-image" 
                                        />
                                        <button className="nav-button next" onClick={handleNextImage}>
                                            {language ? "❯" : "❮"}
                                        </button>
                                        <div className="image-overlay">
                                            <h3>{events[selectedYear].title}</h3>
                                            <p>{events[selectedYear].description}</p>
                                        </div>
                                    </div>

                                    <div className="thumbnails-container">
                                        <div className="thumbnails-scroll">
                                            {events[selectedYear].images.map((image, index) => (
                                                <div 
                                                    key={index}
                                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                                    onClick={() => handleThumbnailClick(index)}
                                                >
                                                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="videos-grid">
                            {videos.map((video, index) => (
                                <div 
                                    key={index} 
                                    className="video-item"
                                    onClick={() => handleVideoClick(video.id)}
                                >
                                    <div className="video-container">
                                        <div className="video-thumbnail">
                                            <img 
                                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                                alt={video.title}
                                            />
                                            <div className="play-button">
                                                <span>▶</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>{video.title}</h3>
                                </div>
                            ))}
                            {(!videos || videos.length === 0) && (
                                <p className="no-videos">
                                    {language 
                                        ? "No videos available" 
                                        : "لا تتوفر مقاطع فيديو"}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {selectedVideo && (
                <div className="video-modal" onClick={closeVideoModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeVideoModal}>
                            ×
                        </button>
                        <div className="modal-video-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurEvents;
