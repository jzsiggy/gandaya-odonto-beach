import Loader from "./loader/Loader";
import { useEffect } from "react";

import useStore from '../../store/store';
import client from '../service/client';
import { Link } from "react-router-dom";

const Redirect = () => {
    const setUser = useStore(state => state.setUser);
	const dropUser = useStore(state => state.dropUser);

    let redirectPath =  window.sessionStorage.getItem('redirectPath') || process.env.REACT_APP_CLIENT_URL
    let redirectState =  JSON.parse( window.sessionStorage.getItem('redirectState') );

    const path = window.location.href;
	const query = path.split('#')[1]
	const params = Object.fromEntries(new URLSearchParams(query))

    const redirect = () => {
        document.getElementById("redirect_link").click()
    }

    const ping = () => {
		client.get('auth/ping')
		.then(res => {
			setUser(res.data.user);
            redirect();
		})
		.catch(err => {
			dropUser();
            redirect();
		})
	}

    useEffect(() => {
        if (params.access_token) {
            client.post(
                '/auth/login/facebook', 
                {
                    facebookAuthToken: params.access_token,
                }
            )
            .then(res => ping())
            .catch(err => ping())
        } else {
            redirect()
        }
    }, [])

    return (
        <>
            <Loader />
            <Link id="redirect_link" style={{"display": "none"}} to={redirectPath} state={redirectState}></Link>
        </>
    )
}

export default Redirect