"use client";

import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Searchbox from '../components/ui/Searchbox';

const DataTableComponent = DataTable.default ? DataTable.default : DataTable;

// Mock data: In a real app, this would come from a database or API
const initialDocuments = [
  {
    id: 1,
    fileName: "FIR_Copy_Ramesh.pdf",
    caseTitle: "Ramesh vs State of Kerala",
    type: "FIR",
    uploadDate: "2026-04-28",
    size: "2.4 MB",
    fileType: "pdf"
  },
  {
    id: 2,
    fileName: "Witness_Statement_01.jpg",
    caseTitle: "Priya Singh vs CBI",
    type: "Evidence",
    uploadDate: "2026-04-29",
    size: "1.1 MB",
    fileType: "image"
  },
  {
    id: 3,
    fileName: "Bail_Order_Signed.pdf",
    caseTitle: "Haridas vs State of Kerala",
    type: "Orders",
    uploadDate: "2026-04-30",
    size: "840 KB",
    fileType: "pdf"
  },
  {
    id: 4,
    fileName: "Property_Deed_Copy.pdf",
    caseTitle: "Malabar Builders vs Corporation",
    type: "Misc",
    uploadDate: "2026-04-25",
    size: "5.2 MB",
    fileType: "pdf"
  }
];

const Documents = () => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [filterText, setFilterText] = useState('');
  
  // Modal State
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDoc, setNewDoc] = useState({
    caseTitle: '',
    type: 'FIR',
    fileName: ''
  });

  // Filter logic
  const filteredItems = useMemo(() => {
    return documents.filter(
        item => 
            (item.fileName && item.fileName.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.caseTitle && item.caseTitle.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.type && item.type.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [filterText, documents]);

  // Handle simulated file upload
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!newDoc.fileName || !newDoc.caseTitle) {
      alert("Please select a file and a case.");
      return;
    }

    const newDocument = {
      id: documents.length + 1,
      fileName: newDoc.fileName,
      caseTitle: newDoc.caseTitle,
      type: newDoc.type,
      uploadDate: new Date().toISOString().split('T')[0],
      size: Math.floor(Math.random() * 5 + 1) + " MB", // Simulated size
      fileType: newDoc.fileName.endsWith('.pdf') ? 'pdf' : 'image'
    };

    setDocuments([newDocument, ...documents]);
    setShowUploadModal(false);
    setNewDoc({ caseTitle: '', type: 'FIR', fileName: '' }); // Reset
  };

  // Searchbox and Add Button
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
        if (filterText) setFilterText('');
    };

    return (
        <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 pb-2">
            <div className="btn-group w-100 mt-3 mt-md-0 viewtoggle">
                <button 
                className="btn btn-primary mt-3 mt-md-0 d-flex justify-content-center align-items-center shadow-sm"
                onClick={() => setShowUploadModal(true)}
                >
                <span className="ico"><i className="mdi mdi-cloud-upload  me-2"></i></span>
                <span className="txt">Upload</span> 
                </button>
            </div>
            

            <Searchbox 
                onFilter={e => setFilterText(e.target.value)} 
                onClear={handleClear} 
                filterText={filterText} 
                placeholder="Search files, cases, or types..."
            />
            
            
        </div>
    );
  }, [filterText]);

  const columns = [
      {
          name: 'Document Name',
          selector: row => row.fileName,
          sortable: true,
          wrap: true,
          grow: 2,
          cell: row => (
              <div className="d-flex align-items-center py-2">
                  <div className={`fs-3 me-3 ${row.fileType === 'pdf' ? 'text-danger' : 'text-info'}`}>
                      <i className={`mdi ${row.fileType === 'pdf' ? 'mdi-file-pdf-box' : 'mdi-image'}`}></i>
                  </div>
                  <div>
                      <div className="fw-bold text-dark">{row.fileName}</div>
                      <small className="text-muted">{row.size}</small>
                  </div>
              </div>
          )
      },
      {
          name: 'Linked Case',
          selector: row => row.caseTitle,
          sortable: true,
          wrap: true,
          grow: 2,
      },
      {
          name: 'Category',
          selector: row => row.type,
          sortable: true,
          cell: row => {
              let badgeClass = 'badge ';
              switch(row.type) {
                  case 'FIR': badgeClass += 'bg-danger'; break;
                  case 'Orders': badgeClass += 'bg-success'; break;
                  case 'Evidence': badgeClass += 'bg-warning text-dark'; break;
                  case 'Misc': badgeClass += 'bg-secondary'; break;
                  default: badgeClass += 'bg-primary';
              }
              return <span className={badgeClass}>{row.type}</span>;
          }
      },
      {
          name: 'Upload Date',
          selector: row => row.uploadDate,
          sortable: true,
      },
      {
          name: 'Actions',
          cell: row => (
              <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" title="View Document">
                      <i className="mdi mdi-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-success" title="Download">
                      <i className="mdi mdi-download"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger" title="Delete">
                      <i className="mdi mdi-delete"></i>
                  </button>
              </div>
          )
      }
  ];

  return (
    <>
      <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                  <h4>Documents Center</h4>
                  <p className="mb-0 text-muted">Manage FIRs, evidence, and case files.</p>
              </div>
          </div>
      </div>

      {/* Quick Stats */}
      <div className="row mb-4">
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-danger h-100">
                  <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                          <p className="text-muted mb-1 fw-bold">FIR Documents</p>
                          <h3 className="mb-0 fw-bold text-dark">12</h3>
                      </div>
                      <div className="fs-1 text-danger"><i className="mdi mdi-police-badge"></i></div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-warning h-100">
                  <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                          <p className="text-muted mb-1 fw-bold">Evidence Files</p>
                          <h3 className="mb-0 fw-bold text-dark">34</h3>
                      </div>
                      <div className="fs-1 text-warning"><i className="mdi mdi-folder-search"></i></div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-success h-100">
                  <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                          <p className="text-muted mb-1 fw-bold">Court Orders</p>
                          <h3 className="mb-0 fw-bold text-dark">18</h3>
                      </div>
                      <div className="fs-1 text-success"><i className="mdi mdi-gavel"></i></div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6">
              <div className="card shadow-sm border-0 border-start border-4 border-secondary h-100">
                  <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                          <p className="text-muted mb-1 fw-bold">Misc. Files</p>
                          <h3 className="mb-0 fw-bold text-dark">9</h3>
                      </div>
                      <div className="fs-1 text-secondary"><i className="mdi mdi-file-document-multiple"></i></div>
                  </div>
              </div>
          </div>
      </div>
       
      {/* Data Table */}
      <div className="row">
          <div className="col-12">
              <div className="card shadow-sm border-0">
                  <div className="card-body">
                      {subHeaderComponentMemo}
                      
                      <div className="dtable-wrap mt-3">
                          <DataTableComponent
                              columns={columns}
                              data={filteredItems}
                              pagination
                              highlightOnHover
                              striped
                              responsive
                              pointerOnHover
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Upload Modal (Bootstrap Native Implementation via React State) */}
      {showUploadModal && (
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content shadow-lg border-0">
                        <div className="modal-header bg-light border-bottom-0">
                            <h5 className="modal-title fw-bold">Upload New Document</h5>
                            <button type="button" className="btn-close" onClick={() => setShowUploadModal(false)} aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleUploadSubmit}>
                            <div className="modal-body">
                                
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Select Case</label>
                                    <select 
                                        className="form-select border-dark" 
                                        value={newDoc.caseTitle}
                                        onChange={(e) => setNewDoc({...newDoc, caseTitle: e.target.value})}
                                        required
                                    >
                                        <option value="">-- Choose a Case --</option>
                                        <option value="Ramesh vs State of Kerala">Ramesh vs State of Kerala</option>
                                        <option value="Priya Singh vs CBI">Priya Singh vs CBI</option>
                                        <option value="Haridas vs State of Kerala">Haridas vs State of Kerala</option>
                                        <option value="Malabar Builders vs Corporation">Malabar Builders vs Corporation</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Document Category</label>
                                    <div className="d-flex gap-3 mt-1">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="docType" id="typeFIR" value="FIR" checked={newDoc.type === 'FIR'} onChange={(e) => setNewDoc({...newDoc, type: e.target.value})} />
                                            <label className="form-check-label" htmlFor="typeFIR"><span className="badge bg-danger">FIR</span></label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="docType" id="typeEv" value="Evidence" checked={newDoc.type === 'Evidence'} onChange={(e) => setNewDoc({...newDoc, type: e.target.value})} />
                                            <label className="form-check-label" htmlFor="typeEv"><span className="badge bg-warning text-dark">Evidence</span></label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="docType" id="typeOrd" value="Orders" checked={newDoc.type === 'Orders'} onChange={(e) => setNewDoc({...newDoc, type: e.target.value})} />
                                            <label className="form-check-label" htmlFor="typeOrd"><span className="badge bg-success">Orders</span></label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="docType" id="typeMisc" value="Misc" checked={newDoc.type === 'Misc'} onChange={(e) => setNewDoc({...newDoc, type: e.target.value})} />
                                            <label className="form-check-label" htmlFor="typeMisc"><span className="badge bg-secondary">Misc</span></label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Attach File (PDF, Image)</label>
                                    <input 
                                        className="form-control border-dark" 
                                        type="file" 
                                        accept=".pdf, image/jpeg, image/png"
                                        onChange={(e) => {
                                            if(e.target.files.length > 0) {
                                                setNewDoc({...newDoc, fileName: e.target.files[0].name})
                                            }
                                        }}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="modal-footer border-top-0">
                                <button type="button" className="btn btn-light" onClick={() => setShowUploadModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary px-4">Upload File</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Modal Backdrop */}
            <div className="modal-backdrop fade show"></div>
        </>
      )}

    </>
  );
};

export default Documents;