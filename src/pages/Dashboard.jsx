import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-wrp">
      
      <div className="container-fluid py-4">
        
        {/* Active Cases Overview Section */}
        <div className="active-cases-overview mb-4">
          <h3 className="mb-3 font-weight-bold text-dark">Active Cases Overview</h3>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="card border border-info shadow-sm rounded bg-white">
                <div className="card-body">
                  <div className="stat-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="stat-text font-weight-bold text-dark">Active Cases</div>
                    </div>
                    <div className="stat-digit display-4 font-weight-bold text-info">
                      <span className="ico">
                        <i className="mdi mdi-scale-balance"></i>
                      </span>
                      <span className="txt ms-2">14</span>
                    </div>
                    <Link to="/cases" className="btn btn-info view-btn mt-3">View All</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card border border-success shadow-sm rounded bg-white">
                <div className="card-body">
                  <div className="stat-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="stat-text font-weight-bold text-dark">New Clients</div>
                    </div>
                    <div className="stat-digit display-4 font-weight-bold text-success">
                      <span className="ico">
                        <i className="mdi mdi-account-multiple-plus"></i>
                      </span>
                      <span className="txt ms-2">4</span>
                    </div>
                    <Link to="#" className="btn btn-success view-btn mt-3">View All</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-6">
              <div className="card border border-warning shadow-sm rounded bg-white">
                <div className="card-body">
                  <div className="stat-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="stat-text font-weight-bold text-dark">Pending Hearings</div>
                    </div>
                    <div className="stat-digit display-4 font-weight-bold text-warning">
                      <span className="ico">
                        <i className="mdi mdi-gavel"></i>
                      </span>
                      <span className="txt ms-2">9</span>
                    </div>
                    <Link to="#" className="btn btn-warning view-btn mt-3">View All</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hearings-and-notes mb-4">
            <div className="row">
            {/* Today's Hearings */}
            <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="card hearing-card shadow-sm border-dark h-100">
                <div className="card-body p-0">
                    <h5 className="card-title p-3 mb-0 fw-bold border-bottom border-dark">
                    Today's Hearings
                    </h5>
                    <div className="table-responsive">
                    <table className="table mb-0">
                        <thead className="table-light border-dark">
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Case Title</th>
                            <th scope="col">Court</th>
                            <th scope="col">Status</th>
                            <th scope="col">Quick action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="align-middle">9:30 AM</td>
                            <td className="align-middle">Ramesh vs State of Kerala</td>
                            <td className="align-middle">High Court</td>
                            <td className="align-middle">Scheduled</td>
                            <td className="border-end-0">
                              <div className="act-btns">
                                <button className="btn btn-sm btn-primary btn-action me-2">
                                  <span className="ico me-1"><span className="mdi mdi-eye"></span></span>
                                  <span className="txt">View Case</span>
                                </button>
                                <button className="btn btn-sm btn-primary btn-action">
                                  <span className="ico me-1"><span className="mdi mdi-plus-circle"></span></span>
                                  <span className="txt">Add Note</span>
                                </button>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle bg-light">11:00 AM</td>
                            <td className="align-middle bg-light">Priya Singh vs CBI</td>
                            <td className="align-middle bg-light">District Court</td>
                            <td className="align-middle bg-light">Adjourned</td>
                            <td className="bg-light">
                               <div className="act-btns">
                                <button className="btn btn-sm btn-primary btn-action me-2">
                                  <span className="ico me-1"><span className="mdi mdi-eye"></span></span>
                                  <span className="txt">View Case</span>
                                </button>
                                <button className="btn btn-sm btn-primary btn-action">
                                  <span className="ico me-1"><span className="mdi mdi-plus-circle"></span></span>
                                  <span className="txt">Add Note</span>
                                </button>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom-0 align-middle">2:00 PM</td>
                            <td className="border-bottom-0 align-middle">Anjali Sharma vs Estate</td>
                            <td className="border-bottom-0 align-middle">Family Court</td>
                            <td className="border-bottom-0 align-middle">Completed</td>
                            <td className="border-bottom-0">
                               <div className="act-btns">
                                <button className="btn btn-sm btn-primary btn-action me-2">
                                  <span className="ico me-1"><span className="mdi mdi-eye"></span></span>
                                  <span className="txt">View Case</span>
                                </button>
                                <button className="btn btn-sm btn-primary btn-action">
                                  <span className="ico me-1"><span className="mdi mdi-plus-circle"></span></span>
                                  <span className="txt">Add Note</span>
                                </button>
                              </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>

            {/* Quick Diary Entry */}
            <div className="col-lg-4">
                <div className="card shadow-sm h-100 border-dark">
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0 fw-bold">Quick Diary Entry</h5>
                    </div>
                    
                    <textarea 
                    className="form-control border-primary note-entry mb-3 flex-grow-1" 
                    rows="4" 
                    id='note'
                    name='note'
                    placeholder="Add a note for a case..."
                    style={{ resize: 'none' }}
                    ></textarea>
                    
                    <div className="d-flex gap-2">
                    <select className="form-select border-dark fw-bold" aria-label="Select Case">
                        <option defaultValue>Select Case</option>
                        <option value="1">Ramesh vs State of Kerala</option>
                        <option value="2">Priya Singh vs CBI</option>
                        <option value="3">Anjali Sharma vs Estate</option>
                    </select>
                    <button className="btn btn-primary px-4 fw-bold text-nowrap">Save Note</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* NEW SECTION: Deadlines & Recent Activity */}
        <div className="deadlines-and-activity">
          <div className="row">
            
            {/* Upcoming Deadlines */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-dark h-100">
                <div className="card-header bg-white border-bottom border-dark py-3">
                  <h5 className="mb-0 fw-bold">Upcoming Deadlines</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 border-bottom border-dark">
                    <div className="d-flex align-items-center">
                      <div className="me-3 fs-3 text-dark"><i className="mdi mdi-calendar"></i></div>
                      <div>
                        <h6 className="mb-0 fw-bold">Appeal Deadline</h6>
                        <small className="text-dark">Priya Singh vs CBI</small>
                      </div>
                    </div>
                    <span className="fw-bold">3 days left</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 border-bottom border-dark">
                    <div className="d-flex align-items-center">
                      <div className="me-3 fs-3 text-dark"><i className="mdi mdi-folder-multiple-outline"></i></div>
                      <div>
                        <h6 className="mb-0 fw-bold">Filing Deadline</h6>
                        <small className="text-dark">Ramesh vs State of Kerala</small>
                      </div>
                    </div>
                    <span className="fw-bold">7 days left</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3 fs-3 text-dark"><i className="mdi mdi-scale-balance"></i></div>
                      <div>
                        <h6 className="mb-0 fw-bold">Judgment Due</h6>
                        <small className="text-dark">Anjali Sharma vs Estate</small>
                      </div>
                    </div>
                    <span className="fw-bold">10 days left</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recent Activity & Notes */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-dark h-100">
                <div className="card-header bg-white border-bottom border-dark py-3">
                  <h5 className="mb-0 fw-bold">Recent Activity & Notes</h5>
                </div>
                <div className="card-body overflow-auto" style={{ maxHeight: '280px' }}>
                  
                  {/* Activity Item 1 */}
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center me-3">
                      <div className="fs-4 text-dark lh-1"><i className="mdi mdi-pencil"></i></div>
                      <div className="border-start border-dark flex-grow-1 my-2"></div>
                    </div>
                    <div className="pb-4">
                      <div className="text-dark">
                        Note added to Ramesh vs State of Kerala:<br/>
                        Hearing postponed to next week. Opposing counsel absent.
                      </div>
                      <small className="text-muted">(10 mins ago)</small>
                    </div>
                  </div>

                  {/* Activity Item 2 */}
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center me-3">
                      <div className="fs-4 text-dark lh-1"><i className="mdi mdi-file-document"></i></div>
                      <div className="border-start border-dark flex-grow-1 my-2"></div>
                    </div>
                    <div className="pb-4">
                      <div className="text-dark">
                        FIR document uploaded for Priya Singh vs CBI
                      </div>
                      <small className="text-muted">(1 hour ago)</small>
                    </div>
                  </div>

                  {/* Activity Item 3 */}
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center me-3">
                      <div className="fs-4 text-dark lh-1"><i className="mdi mdi-briefcase-outline"></i></div>
                    </div>
                    <div>
                      <div className="text-dark">
                        Case status updated: Anjali Sharma vs Estate (Closed)
                      </div>
                      <small className="text-muted">(3 hours ago)</small>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;