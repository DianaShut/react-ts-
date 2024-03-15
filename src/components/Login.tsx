import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useAppDispatch, useAppLocation, useAppSelector} from "../hooks";
import {authActions} from "../store";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>()
    const dispatch = useAppDispatch()
    const {loginError} = useAppSelector(state => state.auth)
    const navigate = useNavigate()
    const {state} = useAppLocation<{pathname:string}>()

    const login: SubmitHandler<IAuth> = async (user) =>{
       const {meta:{requestStatus}} = await dispatch(authActions.login({user}))
        if(requestStatus==='fulfilled'){
            navigate(state?.pathname||'/cars')
        }
    }

    return (
        <div>
            {loginError && <h5>{loginError}</h5>}
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export {Login};