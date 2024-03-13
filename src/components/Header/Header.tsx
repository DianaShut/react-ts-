import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import css from './Header.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../store";


const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    const access = authService.getAccessToken()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(access && !currentUser){
            dispatch(authActions.me())
        }
    }, []);


    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            {currentUser?
            <div>{currentUser.username} -- {currentUser.last_login}</div>
            :
            <div className={css.tools}>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
            }
        </div>
    );
};

export {Header};