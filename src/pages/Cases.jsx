"use client";

import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Select from 'react-select';

// Update these relative paths based on exactly where this file lives in 'src'
import casesData from '../data/cases.json'; 
import clientsData from '../data/clients.json'; // Ensure this path is correct
import Searchbox from '../components/ui/Searchbox';

// Map the clients data to the format react-select expects
const clientOptions = clientsData.map(client => ({
  value: client.name, // Adjust 'name' if your JSON uses a different key (e.g., fullName)
  label: client.name  
}));

const DataTableComponent = DataTable.default ? DataTable.default : DataTable;

const Cases = () => {
  const [casesList, setCasesList] = useState(casesData);
  const [filterText, setFilterText] = useState('');

  // --- Modal & Form State ---
  const [showModal, setShowModal] = useState(false); // Used for both Add and Edit
  const [isEditMode, setIsEditMode] = useState(false); 
  
  // State for the View Details Modal
  const [showViewModal, setShowViewModal] = useState(false);
  const [activeCase, setActiveCase] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    caseNumber: '',
    court: '',
    status: 'Active',
    linkedClient: ''
  });
  
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Filter logic for Cases
  const filteredItems = useMemo(() => {
    return casesList.filter(
      item => 
        (item.title && item.title.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.caseNumber && item.caseNumber.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.court && item.court.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.linkedClient && item.linkedClient.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [filterText, casesList]);

  // Searchbox subheader component
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) setFilterText('');
    };

    return (
      <Searchbox 
        onFilter={e => setFilterText(e.target.value)} 
        onClear={handleClear} 
        filterText={filterText} 
        placeholder="Search cases, courts, or clients..."
      />
    );
  }, [filterText]);

  // --- Form & Action Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler specifically for react-select
  const handleClientChange = (selectedOption) => {
    setFormData(prev => ({
      ...prev,
      linkedClient: selectedOption ? selectedOption.value : ''
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      title: '',
      caseNumber: '',
      court: '',
      status: 'Active',
      linkedClient: ''
    });
    setSelectedFiles([]);
    setShowModal(true);
  };

  const handleViewCase = (caseRow) => {
    setActiveCase(caseRow);
    setShowViewModal(true);
  };

  const handleEditCaseClick = () => {
    setIsEditMode(true);
    // Populate form data with the active case details
    setFormData({ ...activeCase });
    // Populate files if they exist on the case
    setSelectedFiles(activeCase.attachments || []);
    
    // Switch modals
    setShowViewModal(false);
    setShowModal(true);
  };

  const handleSaveCase = () => {
    if (isEditMode && formData.id) {
      // Update existing case
      const updatedList = casesList.map(c => 
        c.id === formData.id ? { ...formData, attachments: selectedFiles } : c
      );
      setCasesList(updatedList);
    } else {
      // Add new case
      const newCase = {
        ...formData,
        attachments: selectedFiles,
        id: Date.now() 
      };
      setCasesList([newCase, ...casesList]);
    }

    // Reset and close
    setShowModal(false);
  };

 const columns = [
    {
      name: 'Case Title',
      selector: row => row.title,
      sortable: true,
      wrap: true, 
    },
    {
      name: 'Case Number',
      selector: row => row.caseNumber,
      sortable: true,
    },
    {
      name: 'Court Name',
      selector: row => row.court,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: row => {
        let badgeClass = 'badge ';
        switch(row.status) {
          case 'Active': badgeClass += 'bg-success text-white'; break;
          case 'Pending': badgeClass += 'bg-warning text-dark'; break;
          case 'Closed': badgeClass += 'bg-dark text-white'; break;
          default: badgeClass += 'bg-primary text-white';
        }
        return <span className={badgeClass}>{row.status}</span>;
      }
    },
    {
      name: 'Linked Client',
      selector: row => row.linkedClient,
      sortable: true,
      cell: row => (
        <span className='link text-primary' style={{ cursor: 'pointer' }}>
          {row.linkedClient}
        </span>
      )
    },
    {
      name: 'Actions',
      ignoreRowClick: true, 
      cell: row => (
        <button 
          className="btn btn-sm btn-outline-primary" 
          onClick={() => handleViewCase(row)}
        >
          View
        </button>
      )
    }
  ];

  return (
    <>
      <div className="row page-titles mx-0 d-flex align-items-center">
        <div className="col-sm-6 p-md-0">
          <div className="welcome-text">
            <h4>Cases</h4>
            <p className="mb-0 text-muted">Manage and track all legal cases</p>
          </div>
        </div>
        <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <button 
            className="btn btn-primary" 
            onClick={openAddModal}
          >
            + Add Case
          </button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body dtable-wrap">
              <DataTableComponent
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                striped
                responsive
                pointerOnHover
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- View Case Modal --- */}
      {showViewModal && activeCase && (
        <div 
          className="modal fade show" 
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-light">
                <h5 className="modal-title">Case Details</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowViewModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <p className="text-muted mb-1 small">Case Title</p>
                    <h6 className="mb-0">{activeCase.title}</h6>
                  </div>
                  <div className="col-md-6">
                    <p className="text-muted mb-1 small">Case Number</p>
                    <h6 className="mb-0">{activeCase.caseNumber}</h6>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <p className="text-muted mb-1 small">Court Name</p>
                    <h6 className="mb-0">{activeCase.court || 'N/A'}</h6>
                  </div>
                  <div className="col-md-6">
                    <p className="text-muted mb-1 small">Status</p>
                    <h6 className="mb-0">{activeCase.status}</h6>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <p className="text-muted mb-1 small">Linked Client</p>
                    <h6 className="mb-0">{activeCase.linkedClient || 'N/A'}</h6>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12">
                    <p className="text-muted mb-2 small fw-bold border-bottom pb-1">Attachments</p>
                    {activeCase.attachments && activeCase.attachments.length > 0 ? (
                      <ul className="list-group list-group-flush">
                        {activeCase.attachments.map((file, index) => (
                          <li key={index} className="list-group-item px-0 py-1">
                            <i className="bi bi-paperclip me-2 text-primary"></i> 
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted small">No attachments uploaded.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleEditCaseClick}
                >
                  Edit Case
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Add / Edit Case Modal --- */}
      {showModal && (
        <div 
          className="modal fade show" 
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditMode ? 'Edit Case' : 'Add New Case'}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Case Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter case title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Case Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="caseNumber"
                    value={formData.caseNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. CV-2026-001"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Court Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="court"
                    value={formData.court}
                    onChange={handleInputChange}
                    placeholder="Enter court name"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Status</label>
                    <select 
                      className="form-select" 
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                  
                  {/* --- React Select Implementation --- */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Linked Client</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isClearable={true}
                      isSearchable={true}
                      name="linkedClient"
                      options={clientOptions}
                      placeholder="Search and select a client..."
                      value={clientOptions.find(option => option.value === formData.linkedClient) || null}
                      onChange={handleClientChange}
                      styles={{ menu: provided => ({ ...provided, zIndex: 9999 }) }}
                    />
                  </div>
                </div>

                {/* --- Multiple File Uploader --- */}
                <div className="mb-3">
                  <label className="form-label">Attachments</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    multiple
                    onChange={handleFileChange}
                  />
                  {selectedFiles.length > 0 && (
                    <div className="mt-3">
                      <p className="mb-1 text-muted small">Selected Files:</p>
                      <ul className="list-group">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-1">
                            <span className="text-truncate" style={{ maxWidth: '80%' }}>
                              {file.name}
                            </span>
                            <button 
                              type="button" 
                              className="btn btn-sm btn-danger py-0 px-2"
                              onClick={() => removeFile(index)}
                              title="Remove file"
                            >
                              &times;
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleSaveCase}
                  disabled={!formData.title || !formData.caseNumber}  
                >
                  {isEditMode ? 'Update Case' : 'Save Case'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cases;