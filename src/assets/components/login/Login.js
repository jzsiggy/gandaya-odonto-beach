import React , { useState, useEffect } from 'react';

import useStore from '../../../store/store';
import client from '../../service/client';

import GoogleLogin from './google/GoogleLogin'
import FacebookLogin from './facebook/FacebookLogin'

import Loader from '../loader/Loader';
import { Container, Modal, Logo, Form } from './styles';
import NativeLogin from './native/NativeLogin';
import NativeSignup from './native/NativeSignup';
import { useLocation } from 'react-router-dom';

const Login = (props) => {
	const [loading, setLoading] = useState(false)
	const setUser = useStore(state => state.setUser);
	const dropUser = useStore(state => state.dropUser);

    const location = useLocation()

	const [mode, setMode] = useState('login');

	let incompatibleBrowser = navigator.userAgent.includes("Instagram");

	useEffect(() => {
		window.sessionStorage.setItem('redirectPath', window.location.pathname)
		window.sessionStorage.setItem('redirectState', JSON.stringify(location.state))
        return () => {
            setLoading(false);
        }
    }, [])

	const toggle = () => {
		if (mode == 'login') {
			setMode('signup');
		} else {
			setMode('login')
		}
	}

	const ping = () => {
		client.get('auth/ping')
		.then(res => {
			setUser(res.data.user);
		})
		.catch(err => {
			dropUser();
			setLoading(false);
		})
	}

    return (
		loading ?
			<Loader />
		:
		<Container>
			<Modal>
				{/* <Logo /> */}
				<Form>
					{
					mode == 'login' ?
					<>
						<h3>Login</h3>
						<NativeLogin ping={ping} toggle={toggle}/>
						<FacebookLogin ping={ping} setLoading={setLoading}/>
						{
						!incompatibleBrowser && 
						<div style ={{height: "44px", width: "auto"}}>
						<GoogleLogin ping={ping} setLoading={setLoading}/>
						</div>
						}
					</>
					:
					<>
					<NativeSignup ping={ping} toggle={toggle}/>
					</>
					}
				<span style={{fontSize: "0.7em", textDecoration: "underline"}} onClick={() => toggle()}>{mode == 'login' ? 'criar uma conta' : 'voltar para login'}</span>
				</Form>
			</Modal>
		</Container>
    )
}

export default Login;