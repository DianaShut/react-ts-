import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store";
import {useEffect} from "react";

const CarForm = () => {
   const {reset, register, handleSubmit, setValue}= useForm<ICar>();
   const dispatch = useAppDispatch();
   const {carForUpdate} = useAppSelector(state => state.cars)
   const save: SubmitHandler<ICar> = (car) =>{
       dispatch(carActions.create({car}))
       reset()
   }

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

   const update = async (car:ICar) =>{
       dispatch(carActions.updateById({id: carForUpdate.id, carData: car}))
       reset()
   }

 return (
  <div>
      <form onSubmit={handleSubmit(carForUpdate? update : save)}>
          <input type="text" placeholder={'brand'} {...register('brand')}/>
          <input type="text" placeholder={'price'} {...register('price')}/>
          <input type="text" placeholder={'year'} {...register('year')}/>
          <button>{carForUpdate? 'update' : 'save'}</button>
      </form>
  </div>
 );
};

export {CarForm};