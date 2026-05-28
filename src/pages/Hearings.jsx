"use client";

import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'; 

import hearingsData from '../data/hearings.json'; 
import Searchbox from '../components/ui/Searchbox';

// Set moment.js to start the week on Monday (Day of Week: 1)
moment.updateLocale('en', {
  week: {
    dow: 1, 
  },
});

const localizer = momentLocalizer(moment);
const DataTableComponent = DataTable.default ? DataTable.default : DataTable;

const Hearings = () => {
  const [hearingsList, setHearingsList] = useState(hearingsData);
  const [filterText, setFilterText] = useState('');
  const [viewMode, setViewMode] = useState('list');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('month'); 

  const filteredItems = useMemo(() => {
    return hearingsList.filter(
        item => 
            (item.caseTitle && item.caseTitle.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.court && item.court.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.eventType && item.eventType.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [filterText, hearingsList]);

  const calendarEvents = useMemo(() => {
    return hearingsList.map(hearing => {
      const eventDate = new Date(hearing.date);
      return {
        id: hearing.id,
        title: `${hearing.caseTitle} - ${hearing.eventType}`,
        start: eventDate,
        end: eventDate, 
        allDay: true,
        originalData: hearing 
      };
    });
  }, [hearingsList]);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
        if (filterText) setFilterText('');
    };

    return (
        <>
             <div className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 pb-2">
                <div className="btn-group w-100 mt-3 mt-md-0 viewtoggle" role="group">
                    <button 
                        type="button" 
                        className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('list')}
                    >
                        <i className="mdi mdi-format-list-bulleted me-1"></i> List
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${viewMode === 'calendar' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('calendar')}
                    >
                        <i className="mdi mdi-calendar-month me-1"></i> Calendar
                    </button>
                </div>

                <Searchbox 
                    onFilter={e => setFilterText(e.target.value)} 
                    onClear={handleClear} 
                    filterText={filterText} 
                    placeholder="Search cases, courts, or event types..."
                />
            </div>
        </>
    );
  }, [filterText, viewMode]);

  // (Optional) Keep this if you still want the cell background colored
  const customDayPropGetter = (date) => {
    const day = date.getDay();
    if (day === 0 || day === 6) {
      return { className: 'weekend-bg' };
    }
    return {}; 
  };

  // NEW: Custom component to format the date number text
  const CustomDateHeader = ({ label, date }) => {
    const day = date.getDay();
    // 0 is Sunday, 6 is Saturday
    const isWeekend = day === 0 || day === 6;
    
    return (
      <span className={isWeekend ? 'text-danger fw-bold' : ''} style={{ padding: '2px 5px' }}>
        {label}
      </span>
    );
  };

  const columns = [
      {
          name: 'Date & Time',
          selector: row => row.date,
          sortable: true,
          cell: row => (
              <div>
                  <div className="fw-bold text-dark">{row.date}</div>
                  <small className="text-muted">{row.time}</small>
              </div>
          )
      },
      {
          name: 'Case Details',
          selector: row => row.caseTitle,
          sortable: true,
          wrap: true,
          cell: row => (
              <div>
                  <div className="fw-bold text-dark">{row.caseTitle}</div>
                  <small className="text-muted d-block">{row.caseNumber}</small>
                  <small className="text-muted"><i className="mdi mdi-bank me-1"></i>{row.court}</small>
              </div>
          )
      },
      {
          name: 'Event Type',
          selector: row => row.eventType,
          sortable: true,
          cell: row => {
              let badgeClass = 'badge ';
              switch(row.eventType) {
                  case 'Hearing': badgeClass += 'bg-primary'; break;
                  case 'Filing Deadline': badgeClass += 'bg-danger'; break;
                  case 'Appeal': badgeClass += 'bg-warning text-dark'; break;
                  default: badgeClass += 'bg-secondary';
              }
              return <span className={badgeClass}>{row.eventType}</span>;
          }
      },
      {
          name: 'Status',
          selector: row => row.status,
          sortable: true,
          cell: row => {
              let badgeClass = 'badge ';
              switch(row.status) {
                  case 'Today': badgeClass += 'bg-success'; break;
                  case 'Upcoming': badgeClass += 'bg-info text-dark'; break;
                  case 'Postponed': badgeClass += 'bg-dark'; break;
                  case 'Completed': badgeClass += 'bg-light text-muted border'; break;
                  default: badgeClass += 'bg-secondary';
              }
              return <span className={badgeClass}>{row.status}</span>;
          }
      },
      {
          name: 'Alerts',
          cell: row => (
              <div className="d-flex gap-2 align-items-center">
                  {row.reminderActive && (
                      <span className="text-warning fs-5" title="Auto-reminder active">
                          <i className="mdi mdi-bell-ring"></i>
                      </span>
                  )}
                  {row.nextDate && (
                      <span className="badge bg-light text-dark border" title="Next scheduled date">
                          <i className="mdi mdi-calendar-arrow-right me-1"></i>
                          Next: {row.nextDate}
                      </span>
                  )}
              </div>
          )
      }
  ];

  return (
    <>
      <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                  <h4>Hearings & Deadlines</h4>
                  <p className="mb-0 text-muted">Track your schedule, deadlines, and active alerts</p>
              </div>
          </div>
      </div>

      <div className="row mb-4">
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-success h-100">
                  <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <div>
                              <p className="text-muted mb-1 fw-bold">Today's Hearings</p>
                              <h2 className="mb-0 fw-bold text-dark">3</h2>
                          </div>
                          <div className="fs-1 text-success"><i className="mdi mdi-gavel"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-danger h-100">
                  <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <div>
                              <p className="text-muted mb-1 fw-bold">Impending Deadlines</p>
                              <h2 className="mb-0 fw-bold text-dark">2</h2>
                          </div>
                          <div className="fs-1 text-danger"><i className="mdi mdi-file-alert"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
              <div className="card shadow-sm border-0 border-start border-4 border-warning h-100">
                  <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <div>
                              <p className="text-muted mb-1 fw-bold">Active Reminders</p>
                              <h2 className="mb-0 fw-bold text-dark">12</h2>
                          </div>
                          <div className="fs-1 text-warning"><i className="mdi mdi-bell-ring"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6">
              <div className="card shadow-sm border-0 border-start border-4 border-info h-100">
                  <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <div>
                              <p className="text-muted mb-1 fw-bold">Upcoming This Week</p>
                              <h2 className="mb-0 fw-bold text-dark">8</h2>
                          </div>
                          <div className="fs-1 text-info"><i className="mdi mdi-calendar-clock"></i></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="row">
          <div className="col-12">
              <div className="card shadow-sm">
                  <div className="card-body">
                      {subHeaderComponentMemo}
                      
                      {viewMode === 'list' ? (
                          <div className="dtable-wrap">
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
                      ) : (
                          <div className='calender-view'> 
                              <Calendar
                                  localizer={localizer}
                                  events={calendarEvents}
                                  startAccessor="start"
                                  endAccessor="end"
                                  views={['month', 'week', 'day', 'agenda']} 
                                  
                                  // Optional: Background class hook
                                  dayPropGetter={customDayPropGetter}
                                  
                                  // NEW: Injecting the custom component for the date text
                                  components={{
                                    month: {
                                      dateHeader: CustomDateHeader,
                                    },
                                  }}
                                  
                                  date={currentDate}
                                  onNavigate={(newDate) => setCurrentDate(newDate)}
                                  view={currentView}
                                  onView={(newView) => setCurrentView(newView)}
                                  
                                  onSelectEvent={(event) => alert(`Selected Event:\n${event.title}\nStatus: ${event.originalData.status}`)} 
                              />
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Hearings;