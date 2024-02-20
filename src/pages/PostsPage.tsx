import {FC} from "react";

import {Posts} from "../components";

interface IProps {

}
const PostsPage:FC<IProps> = () => {
 return (
  <div>
   <Posts/>
  </div>
 );
};

export {PostsPage};