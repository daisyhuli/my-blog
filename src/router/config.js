import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Person from "@material-ui/icons/Person";
import BorderColorIcon from '@material-ui/icons/BorderColor';

import DashboardPage from "views/Dashboard/Dashboard.js";
import ArticleList from "views/ArticleList/ArticleList.js";
import UserProfile from "@/views/UserProfile/UserProfile.js";
import ArticleMarkdown from "@/views/ArticleMarkdown/ArticleMarkdown"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/article",
    name: "Atricle",
    icon: LibraryBooks,
    component: ArticleList,
    layout: "/admin"
  },
  {
    path: "/markdown",
    name: "New Atricle",
    icon: BorderColorIcon,
    component: ArticleMarkdown,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
];

export default dashboardRoutes;
