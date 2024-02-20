import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

interface IProps {

}
const Header:FC<IProps> = () => {
 return (
  <div className={css.Header}>
   <NavLink to={'users'}>users</NavLink>
   <NavLink to={'posts'}>posts</NavLink>
  </div>
 );
};

export {Header};