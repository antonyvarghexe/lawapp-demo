import React, { useState } from 'react';
import ProfileCard from '../components/ui/Profilecard';
import NetworkData from '../data/profiledata.json';

const Network = () => {
  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Change this number to adjust items per page

  // --- Pagination Logic ---
  // Calculate indices for slicing the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get only the items for the current page
  const currentItems = NetworkData.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(NetworkData.length / itemsPerPage);

  // Generate an array of page numbers for the pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Helper functions for Next/Prev buttons
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="row page-titles mx-0">
        <div className="col-sm-6 p-md-0">
          <div className="welcome-text">
            <h4>Lawyer Network</h4>
          </div>
        </div>
      </div>

      <div className="directory-container">
        <div className="row">
          {currentItems.map((person) => (
            <div key={person.id} className="col col-prof-card">
              <ProfileCard profileData={person} />
            </div>
          ))}
        </div>

        {/* --- Bootstrap Pagination Component --- */}
        {totalPages > 1 && (
          <nav aria-label="Lawyer directory pagination" className="mt-4">
            <ul className="pagination justify-content-center">
              {/* Previous Button */}
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrev} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>

              {/* Page Numbers */}
              {pageNumbers.map((number) => (
                <li 
                  key={number} 
                  className={`page-item ${currentPage === number ? 'active' : ''}`}
                >
                  <button 
                    onClick={() => setCurrentPage(number)} 
                    className="page-link"
                  >
                    {number}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNext} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Network;