import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profileData }) => {
  // Added initial states for following and connection status
  const [isFollowing, setIsFollowing] = useState(profileData?.isFollowing || false);
  const [isConnected, setIsConnected] = useState(profileData?.isConnected || false);

  if (!profileData) return null;

  // Destructured city and state from profileData
  const { 
    firstName, 
    lastName, 
    profilePicUrl, 
    qualifications, 
    dateJoined, 
    emailId, 
    phoneNumber,
    city,
    state 
  } = profileData;

  const handleFollow = () => {
    setIsFollowing(true);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleView = () => {
    console.log(`Viewing profile for ${firstName} ${lastName}`);
  };

  return (
    <div className="profile-card w-100">
        {/* Profile Picture */}
        <div className="profile-card__image-container">
            {profilePicUrl ? (
            <img
                src={profilePicUrl}
                alt={`${firstName} ${lastName}`}
                className="profile-card__image"
            />
            ) : (
            <div className="profile-card__image-placeholder">
                {firstName.charAt(0)}{lastName.charAt(0)}
            </div>
            )}
        </div>
        
        {/* Name and Badge Container */}
        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
            <h2 className="profile-card__name mb-0">
                {firstName} {lastName}
            </h2>
        </div>

        <div className="profile-card__contents">
            <div className="profile-card__details">
                <p className="profile-card__info-row">
                <span className="profile-card__label"><i className="mdi mdi-school"></i></span>
                <span className="profile-card__colon">:</span> 
                <span className="profile-card__value">{qualifications.join(', ')}</span>
                </p>

                {/* Added Location Row */}
                <p className="profile-card__info-row">
                <span className="profile-card__label"><i className="mdi mdi-map-marker"></i></span>
                <span className="profile-card__colon">:</span> 
                <span className="profile-card__value">{city}, {state}</span>
                </p>
                
                <p className="profile-card__info-row">
                <span className="profile-card__label"><i className="mdi mdi-calendar"></i></span>
                <span className="profile-card__colon">:</span> 
                <span className="profile-card__value">
                    {new Date(dateJoined).toLocaleDateString('en-UK', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                </p>
                
                <p className="profile-card__info-row">
                <span className="profile-card__label"><i className="mdi mdi-email"></i></span>
                <span className="profile-card__colon">:</span>
                <a href={`mailto:${emailId}`} className="profile-card__link">{emailId}</a>
                </p>
                
                <p className="profile-card__info-row">
                <span className="profile-card__label"><i className="mdi mdi-phone"></i></span>
                <span className="profile-card__colon">:</span>
                <a href={`tel:${phoneNumber}`} className="profile-card__link">{phoneNumber}</a>
                </p>

                {/* Action Buttons */}
                <div className="profile-card__actions pt-3 mt-auto d-flex gap-2">
                {!isConnected ? (
                    <button className="btn btn-primary btn-sm px-1" onClick={handleConnect}>
                    Connect
                    </button>
                ) : (
                    <button className="btn btn-secondary btn-sm px-1" disabled>
                    Connected
                    </button>
                )}

                {!isFollowing ? (
                    <button className="btn btn-outline-primary btn-sm px-1" onClick={handleFollow}>
                    Follow
                    </button>
                ) : (
                    <button className="btn btn-outline-primary btn-sm px-1" onClick={handleFollow}>
                        Following
                    </button>
                )
                }
                 
                <Link to={`/profile/${profileData.id}`} className="btn btn-outline-secondary btn-sm px-1">
                    View
                </Link>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ProfileCard;