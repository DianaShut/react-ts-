import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {useEffect} from "react";
import {carsActions} from "../../store";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, []);

 return (
  <div>
      {cars.map(car => <Car key={car.id} car={car}/>)}
  </div>
 );
};

export {Cars};