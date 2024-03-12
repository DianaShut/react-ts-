import {FC} from "react";
import {CarForm, Cars} from "../components";

interface IProps {

}
const CarsPage:FC<IProps> = () => {
 return (
  <div>
   <CarForm/>
      <hr/>
      <Cars/>
  </div>
 );
};

export {CarsPage};