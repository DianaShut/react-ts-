import {FC} from "react";
import {Cars} from "../components";

interface IProps {

}
const CarsPage:FC<IProps> = () => {
 return (
  <div>
   <Cars/>
  </div>
 );
};

export {CarsPage};