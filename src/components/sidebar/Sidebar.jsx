import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return <div className="sidebar">
    <div className="top">
      <span className="logo">admin portal</span>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <span>
            Dashboard
          </span>
        </li>
        <p className="title">LIST</p>
        <li>
          <PersonIcon className="icon" />
          <span>
            Users
          </span>
        </li>
        <li>
          <StoreIcon className="icon" />
          <span>
            Products
          </span>
        </li>
        <li>
          <CreditCardIcon className="icon" />
          <span>
            Orders
          </span>
        </li>
        <li>
          <LocalShippingIcon className="icon" />
          <span>
            Delivery
          </span>
        </li>
        <p className="title">USEFUL LINKS</p>

        <li>
          <AssessmentIcon className="icon" />
          <span>
            Stats
          </span>
        </li>
        <li>
          <NotificationsActiveIcon className="icon" />
          <span>
            Notification
          </span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <HealthAndSafetyIcon className="icon" />
          <span>
            System Health
          </span>
        </li>
        <li>
          <BookIcon className="icon" />
          <span>
            Logs
          </span>
        </li>
        <li>
          <SettingsIcon className="icon" />
          <span>
            Settings
          </span>
        </li>
        <p className="title">USER</p>

        <li>
          <PermContactCalendarIcon className="icon" />
          <span>
            Profile
          </span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <span>
            Sign Out
          </span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>

    Sidebar</div>;
};

export default Sidebar;
