import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import MainLayout from './MainLayout';
import OrganizationsPage from './OrganizationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="/organizations/innovation-hills" element={<OrganizationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;