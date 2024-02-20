import {FC, useEffect, useState} from "react";

import {useAppLocation} from "../hooks";
import {IUser} from "../interfaces";
import {userService} from "../services";
import {useParams} from "react-router-dom";
import {UserDetails} from "../components/UsersContainer/UserDetails";

interface IProps {

}
const UserDetailsPage:FC<IProps> = () => {
    const {state} = useAppLocation<{user: IUser}>()
    const [userDetails, setUserDetails] = useState<IUser>(null)
    const {id} = useParams()

    useEffect(() => {
        if (state?.user){
            setUserDetails(state.user)
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
        }
    }, []);

 return (
  <div>
      {userDetails && <UserDetails userDetails={userDetails}/>}

  </div>
 );
};

export {UserDetailsPage};