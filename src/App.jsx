import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Page Components
import Dashboard from './pages/Dashboard'; 
import Clients from './pages/Clients';
import Cases from './pages/Cases';
import Hearings from './pages/Hearings';
import Documents from './pages/Documents';
import Network from './pages/Network';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import ProfileDetail from './pages/ProfileDetail';
import Notifications from './pages/Notifications';
import NotFound from './pages/Notfound';  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout wraps all internal pages */}
        <Route path="/" element={<Layout />}>
          
          {/* Default route (loads when URL is just "/") */}
          <Route index element={<Dashboard />} />
          
          {/* MVP Feature Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/hearings" element={<Hearings />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/network" element={<Network />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;