import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
  // 1. Store notifications in state so they can be modified
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: 'ti-user',
      bgClass: 'bg-success',
      textClass: 'text-success',
      content: (
        <>
          <strong>Martin</strong> has added a <strong>customer</strong> Successfully
        </>
      ),
      time: '3:20 am',
    },
    {
      id: 2,
      icon: 'ti-shopping-cart',
      bgClass: 'bg-primary',
      textClass: 'text-primary',
      content: (
        <>
          <strong>Jennifer</strong> purchased Light Dashboard 2.0.
        </>
      ),
      time: '3:20 am',
    },
    {
      id: 3,
      icon: 'ti-bookmark',
      bgClass: 'bg-danger',
      textClass: 'text-danger',
      content: (
        <>
          <strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
        </>
      ),
      time: '3:20 am',
    },
  ]);

  // 2. Filter out the notification with the matching ID
  const handleClearNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div>
      <div className="container-fluid">
        {/* Page Title Header */}
        <div className="row page-titles mx-0 mb-4 mt-4">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="welcome-text">
              <h4>Notifications</h4>
            </div>
          </div>
        </div>

        {/* Notifications Content */}
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="card">
              <div className="card-header border-bottom">
                <h5 className="card-title">Recent Activity</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  
                  {/* Check if list is empty */}
                  {notifications.length === 0 ? (
                    <div className="text-center text-muted my-4">
                      <p>No new notifications.</p>
                    </div>
                  ) : (
                    /* Map over the state array to generate the list */
                    notifications.map((notif) => (
                      <li key={notif.id} className="media mb-4 align-items-center d-flex">
                        
                        {/* Icon */}
                        <span className={`dd-icon ${notif.bgClass} bg-opacity-25 ${notif.textClass} me-3 p-2 rounded`}>
                          <i className={`${notif.icon} fa-lg`}></i>
                        </span>
                        
                        {/* Content */}
                        <div className="media-body flex-grow-1">
                          <Link to="#" className="text-decoration-none text-dark">
                            <p className="mb-0">{notif.content}</p>
                          </Link>
                          <small className="notify-time text-muted">{notif.time}</small>
                        </div>

                        {/* Clear Button */}
                        <button 
                          onClick={() => handleClearNotification(notif.id)}
                          className="btn btn-sm btn-link text-muted ms-3 text-decoration-none fs-4"
                          style={{ lineHeight: 1 }}
                          aria-label="Close"
                          title="Clear notification"
                        >
                          &times;
                        </button>
                        
                      </li>
                    ))
                  )}

                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Notifications;