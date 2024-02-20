import {FC} from "react";

import {Users} from "../components";
import {Outlet} from "react-router-dom";

interface IProps {

}
const UsersPage:FC<IProps> = () => {
 return (
  <div>
   <Users/>
      <hr/>
      <Outlet/>
  </div>
 );
};

export {UsersPage};