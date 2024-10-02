import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import MainLayout from './MainLayout';
import OrganizationsPage from './OrganizationsPage';
import DiscoverOptions from './DiscoverOptions';
import DiscoverPage from './DiscoverPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="/organizations/innovation-hills" element={<OrganizationsPage />} />

          <Route path="/discover/needs" element={<DiscoverOptions type='needs' />} />
          <Route path="/needs/services" element={<DiscoverPage type='needs' option='Service' heading='Ecommerce consulting' budget="$1000-5000" count={null} location='Tokyo, Japan' />} />
          <Route path="/needs/partnership" element={<DiscoverPage type='needs' option='Partnership' heading='SEO and target ads for our clients' budget={null} count={null} location='Tokyo, Japan' />} />
          <Route path="/needs/product" element={<DiscoverPage type='needs' option='Product' heading='Travel tents for four people' budget="30-70 USD per item" count="100" location='Kyiv, Ukraine' />} />

          <Route path="/discover/offers" element={<DiscoverOptions type='offers' />} />
          <Route path="/offers/services" element={<DiscoverPage type='offers' option='Service' heading='Ecommerce consulting' budget="$1000-5000" count={null} location='Tokyo, Japan' />} />
          <Route path="/offers/partnership" element={<DiscoverPage type='offers' option='Partnership' heading='SEO and target ads for our clients' budget={null} count={null} location='Tokyo, Japan' />} />
          <Route path="/offers/product" element={<DiscoverPage type='offers' option='Product' heading='Travel tents for four people' budget="30-70 USD per item" count="100" location='Kyiv, Ukraine' />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;