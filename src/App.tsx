import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "@components/profile/ProfilePage";
import MainLayout from "./MainLayout";
import OrganizationsPage from "@components/organizations/OrganizationsPage";
import DiscoverOptions from "@components/discover/DiscoverOptions";
import DiscoverPage from "@components/discover/DiscoverPage";
import DiscoverSearch from "@components/discover/DiscoverSearch";
import DiscoverMatches from "./components/discover/DiscoverMatches";
import SettingsProfile from "./components/settings/Profile/SettingsProfile";
import SettingsLayout from "./components/settings/SettingsLayout";
import SettingsNeedsOffers from "./components/settings/Needs-offers/SettingsNeedsOffers";
import SettingsProjects from "./components/settings/Projects/SettingsProjects";
import SettingsPortfolio from "./components/settings/Portfolio/SettingsPortfolio";
import SettingsHiring from "./components/settings/Hiring/SettingsHiring";
import SettingsContacts from "./components/settings/Contacts/SettingsContacts";
import SettingsOrganizations from "./components/settings/Organizations/SettingsOrganizations";
import SettingsNotification from "./components/settings/Notification/SettingsNotification";
import NotFound from "./NotFound";
import SignUp from "./components/account/Sign-up";
import LogIn from "./components/account/Log-in";
import AuthLayout from "./components/account/AuthLatout";
import ForgotPassword from "./components/account/Forgot-password";
import MailSent from "./components/account/Mail-sent";
import UpdatePassword from "./components/account/Update-password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/organizations/innovation-hills"
            element={<OrganizationsPage />}
          />

          <Route
            path="/discover/needs"
            element={<DiscoverOptions type="needs" />}
          />

          <Route
            path="/discover/offers"
            element={<DiscoverOptions type="offers" />}
          />

          <Route
            path="/needs/services/search"
            element={<DiscoverSearch isBudget isTerms />}
          />
          <Route
            path="/needs/partnership/search"
            element={<DiscoverSearch />}
          />
          <Route
            path="/needs/products/search"
            element={<DiscoverSearch isBudget />}
          />

          <Route
            path="/offers/services/search"
            element={<DiscoverSearch isBudget isTerms />}
          />
          <Route
            path="/offers/partnership/search"
            element={<DiscoverSearch />}
          />
          <Route
            path="/offers/products/search"
            element={<DiscoverSearch isBudget />}
          />

          <Route
            path="/organizations/search"
            element={<DiscoverSearch isSaleChannels />}
          />
          <Route
            path="/people/search"
            element={<DiscoverSearch isName isCategory={false} />}
          />

          <Route path="/card/page" element={<DiscoverPage />} />

          <Route path="/needs/matches" element={<DiscoverMatches />} />
          <Route path="/offers/matches" element={<DiscoverMatches />} />

          <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/log-in" element={<LogIn />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/mail-sent" element={<MailSent />} />
          <Route path="/auth/update-password" element={<UpdatePassword />} />
          </Route>

          <Route path="/settings" element={<SettingsLayout />}>
          <Route path="/settings/profile" element={<SettingsProfile />} />
          <Route path="/settings/contact" element={<SettingsContacts />} />
          <Route path="/settings/organizations" element={<SettingsOrganizations />} />

          <Route path="/settings/needs" element={<SettingsNeedsOffers />} />
          <Route path="/settings/offers" element={<SettingsNeedsOffers />} />

          <Route path="/settings/projects" element={<SettingsProjects />} />
          <Route path="/settings/portfolio" element={<SettingsPortfolio />} />
          <Route path="/settings/hiring" element={<SettingsHiring />} />

          <Route path="/settings/notification" element={<SettingsNotification />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
