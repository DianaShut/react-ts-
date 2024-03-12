import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>()

    const regist: SubmitHandler<IAuth> = (car) =>{

    }

    return (
        <div>
            <form onSubmit={handleSubmit(regist)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    );
};

export {Register};