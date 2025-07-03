import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faBriefcase,
  faFolderClosed,
  faGear,
  faPhone,
  faUsers,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";

const menuList = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faBorderAll} />,
    path: "/",
  },
  {
    title: "Teams",
    icon: <FontAwesomeIcon icon={faVectorSquare} />,
    path: "/teams",
  },
  {
    title: "Employees",
    icon: <FontAwesomeIcon icon={faUsers} />,
    path: "/employees",
  },
  {
    title: "Projects",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    path: "/projects",
  },
  // second
  {
    title: "Meetings",
    icon: <FontAwesomeIcon icon={faPhone} />,
    path: "/meetings",
  },
  {
    title: "Tasks",
    icon: <FontAwesomeIcon icon={faFolderClosed} />,
    path: "/tasks",
  },
  {
    title: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    path: "/settings",
  },
];

export default menuList;
