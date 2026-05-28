"use client";

import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Select from 'react-select'; 

// Update these relative paths based on exactly where this file lives in 'src'
import clientsData from '../data/clients.json'; 
import casesData from '../data/cases.json'; 
import Searchbox from '../components/ui/Searchbox';

const DataTableComponent = DataTable.default ? DataTable.default : DataTable;

const Clients = () => {
  const [clients, setClients] = useState(clientsData);
  const [filterText, setFilterText] = useState('');

  // Transform casesData into the format react-select expects: { value, label }
  const caseOptions = useMemo(() => {
    return casesData.map(c => ({
      value: c.caseNumber,
      label: `${c.caseNumber} - ${c.title || 'Untitled Case'}`
    }));
  }, []);

  // --- Modal & Form State ---
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    phone: '',
    address: '',
    linkedCases: [], 
    notes: ''
  });

  // Filter logic for Clients
  const filteredItems = useMemo(() => {
    return clients.filter(
        item => 
            (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.phone && item.phone.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.address && item.address.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.notes && item.notes.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [filterText, clients]);

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
            placeholder="Search clients, phone, or address..."
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

  const handleSelectChange = (selectedOptions) => {
    setFormData(prev => ({
      ...prev,
      linkedCases: selectedOptions || []
    }));
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      id: null,
      name: '',
      phone: '',
      address: '',
      linkedCases: [],
      notes: ''
    });
    setShowModal(true);
  };

  const handleEditClientClick = (clientRow) => {
    setIsEditMode(true);
    
    const preSelectedCases = (clientRow.linkedCases || []).map(caseId => {
      const matchedOption = caseOptions.find(opt => opt.value === caseId);
      return matchedOption ? matchedOption : { value: caseId, label: caseId };
    });

    setFormData({
      ...clientRow,
      linkedCases: preSelectedCases
    });
    setShowModal(true);
  };

  const handleSaveClient = () => {
    const processedLinkedCases = formData.linkedCases.map(option => option.value);

    if (isEditMode && formData.id) {
      const updatedClients = clients.map(c => 
        c.id === formData.id ? { ...formData, linkedCases: processedLinkedCases } : c
      );
      setClients(updatedClients);
    } else {
      const newClient = {
        ...formData,
        id: Date.now(),
        linkedCases: processedLinkedCases 
      };
      setClients([newClient, ...clients]);
    }
    setShowModal(false);
  };

  const columns = [
      {
          name: 'Name',
          selector: row => row.name,
          sortable: true,
      },
      {
          name: 'Phone Number',
          selector: row => row.phone,
      },
      {
          name: 'Address',
          selector: row => row.address,
          cell: row => row.address ? row.address : <span className="text-muted fst-italic">N/A</span>,
          sortable: true,
      },
      {
          name: 'Linked Cases',
          cell: row => (
              <div className="d-flex flex-wrap gap-1 py-1">
                  {row.linkedCases && row.linkedCases.map((caseId, index) => (
                      <span key={index} className="badge bg-dark">
                          {caseId}
                      </span>
                  ))}
              </div>
          )
      },
      {
          name: 'Notes',
          selector: row => row.notes,
          wrap: true,
      },
      {
          name: 'Actions',
          ignoreRowClick: true, 
          cell: row => (
              <button 
                  className="btn btn-sm btn-outline-primary" 
                  onClick={() => handleEditClientClick(row)}
              >
                  Edit
              </button>
          )
      }
  ];

  return (
    <>
      <div className="row page-titles mx-0 d-flex align-items-center">
          <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                  <h4>Clients</h4>
                   <p className="mb-0 text-muted">View and Manage Clients</p>
              </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <button 
              className="btn btn-primary" 
              onClick={openAddModal}
            >
              + Add Client
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

      {showModal && (
        <div 
          className="modal fade show" 
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
          tabIndex="-1"
        >
          {/* Changed to modal-lg here */}
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditMode ? 'Edit Client' : 'Add New Client'}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter client name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 555-0123"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter full address"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Linked Cases</label>
                  <Select
                    isMulti
                    name="linkedCases"
                    options={caseOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={formData.linkedCases}
                    onChange={handleSelectChange}
                    placeholder="Search and select cases..."
                    noOptionsMessage={() => "No cases found"}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea 
                    className="form-control" 
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any additional notes..."
                  ></textarea>
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
                  onClick={handleSaveClient}
                  disabled={!formData.name}  
                >
                  {isEditMode ? 'Update Client' : 'Save Client'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Clients;