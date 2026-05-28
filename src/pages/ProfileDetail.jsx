import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NetworkData from '../data/profiledata.json';

const ProfileDetail = () => {
  // Grab the ID from the URL parameters
  const { id } = useParams();
  
  // Find the specific lawyer in your data
  const profile = NetworkData.find((person) => person.id.toString() === id);

  // --- NEW: State & Auth Logic ---
  // Mock logged-in user ID. Change this to test the different views!
  const currentUserId = "1"; 
  const isOwnProfile = currentUserId === id;

  const [isConnected, setIsConnected] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  // -------------------------------

  if (!profile) {
    return <div className="container mt-5"><h4>Profile not found</h4></div>;
  }

  return (
    <div className='profile-detailwrp'>
      {/* Header Section */}
      <div className="profile-header">
        <div className="container-fluid header-container">
          <div className="row align-items-center">
            <div className="col-lg-auto text-center text-lg-start">
              <div className="image-placeholder mx-auto">
                {profile.profilePicUrl ? (
                  <img 
                    src={profile.profilePicUrl}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="profile-image"
                  />
                ) : (
                  <div className="image-placeholder mx-auto">
                    {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg text-center text-lg-start">
              <h4 className="mb-1 text-white">{profile.firstName} {profile.lastName}</h4>
              <p className="mb-0 opacity-75 text-white">
                <span className="ico me-2"><i className="fa fa-graduation-cap"></i></span>
                <span className="txt">
                    {profile.qualifications && profile.qualifications.length > 0 
                    ? profile.qualifications.join(', ') 
                    : "Legal Professional"}
                </span>
              </p>
              <div className="mt-2 text-white">
                <span className="ico me-2"><i className="fa fa-map-marker"></i></span>
                <span className="txt">
                    {profile.city}, {profile.state}
                </span>
              </div>
            </div>
            <div className="col-lg-auto text-center text-lg-end">
              <div className="d-inline-flex gap-2 align-items-center justify-content-end py-2">
                <Link to="/network" className="btn btn-light btn-sm me-2">Back to Network</Link>
                {isOwnProfile ? (
                  <Link to="/settings" className="btn btn-success btn-sm">
                    <i className="bi bi-pencil-square me-1"></i> Edit Profile
                  </Link>
                ) : (
                  <>
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
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="profile-coverpic">
            {profile.profilePicUrl && (
                <img src={profile.coverImageUrl} alt="coverpic"/>
            )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-nav py-2 mb-4 bg-white border-bottom">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link active fw-medium text-primary border-bottom border-primary border-2" href="#overview">Overview</a></li>
            <li className="nav-item"><a className="nav-link fw-medium text-secondary" href="#activities">Activities</a></li>
          </ul>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Info (Left) */}
          <div className="col-xl-4 col-md-5">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">Info </h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><span className="fw-semibold text-muted d-inline-block">Full Name:</span> {profile.firstName} {profile.lastName}</li>
                  <li className="mb-2"><span className="fw-semibold text-muted d-inline-block">Mobile:</span> {profile.phoneNumber}</li>
                  <li className="mb-2"><span className="fw-semibold text-muted d-inline-block">E-mail:</span> {profile.emailId}</li>
                  <li className="mb-2"><span className="fw-semibold text-muted d-inline-block">Location:</span> {profile.city}, {profile.country}</li>
                  <li className="mb-0"><span className="fw-semibold text-muted d-inline-block">Joining Date:</span> {profile.dateJoined}</li>
                </ul>
              </div>
            </div>
          </div>

           {/* Main Content (Right) */}
          <div className="col-xl-8 col-md-7">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">About</h5>
                <p>
                  {/* It looks for profile.about first. If it's missing, it uses the fallback text. */}
                  {profile.about || `Experienced legal professional based in ${profile.city}. Dedicated to providing comprehensive legal counsel and representation.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProfileDetail;