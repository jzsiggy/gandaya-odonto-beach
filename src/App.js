import React , { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

import useStore from './store/store';

import Events from './components/events/eventList/EventList';
import EventSpec from './components/events/eventSpec/EventSpec';
import Nav from './components/nav/Nav';
import User from './components/user/User';
import Wallet from './components/wallet/Wallet';
import TicketList from './components/events/ticketList/TicketList';
import CheckoutTicket from './components/events/checkout/CheckoutTicket';
import CheckoutOrder from './components/events/checkout/CheckoutOrder';
import TicketSpec from './components/wallet/tickets/TicketSpec/TicketSpec';

import client from './assets/service/client';
import { Container } from './styles';
import Loader from './assets/components/loader/Loader';
import CardPaymentSuccess from './components/events/checkout/CardPaymentSuccess';
// import Playground from './components/playground/Playground';
import useScript from './assets/hooks/useScript';
import Head from './components/head/Head';
import Redirect from './assets/components/Redirect';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Feed from './components/feed/Feed';
import CommunicationPreference from './assets/components/communicationPreference/CommunicationPreference';

import Grant from './components/grant/Grant';

const App = () => {
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	const [menuVisibility, setMenuVisibility] = useState(false);

	const setUser = useStore(state => state.setUser);
	const dropUser = useStore(state => state.dropUser);

	const user = useStore(state => state.user);

	const ping = () => {
		client.get('auth/ping')
		.then(res => {
			console.log('logged')
			setUser(res.data.user);
		})
		.catch(err => {
			dropUser();
		})
		.finally(onFinally => setLoading(false))
	}

	const toggleSideMenu = () => {
		setMenuVisibility(!menuVisibility);
	}

	useEffect(() => {
		ping();
	}, []);

	return (
		location.pathname == "/" ? <Home /> :
		<>
			{ user && !user.communicationId && <CommunicationPreference ping={ping}/> }
			<Menu pathName={location.pathname} onClose={toggleSideMenu} isVisible={menuVisibility} />
			<Head onMenuClick={toggleSideMenu} />
			{/* <Nav pathName={location.pathname}/> */}
			<Container>
			{
			loading ?
				<Loader />
			:
			<AnimatePresence exitBeforeEnter={true} initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route exact path="/events" element={<Events />} />
					<Route exact path="/events/:alias" element={<EventSpec />} />
					<Route exact path="/events/:alias/tickets" element={<TicketList />} />
					<Route exact path="/events/:alias/tickets/checkout" element={<CheckoutTicket />} />
					<Route exact path="/events/:alias/order/:orderId/checkout" element={<CheckoutOrder />} />
					<Route exact path="/wallet" element={<Wallet tickets={true} />} />
					<Route exact path="/wallet/tickets" element={<Wallet tickets={true} />} />
					<Route exact path="/wallet/jewels" element={<Wallet jewels={true}/>} />
					<Route exact path="/wallet/tickets/:id" element={<TicketSpec />} />
					<Route exact path="/user" element={<User />} />

					<Route exact path="/grant/:code" element={<Grant />} />

					<Route exact path="/redirect" element={<Redirect />} />
					<Route path="payment-succeeded" element={<CardPaymentSuccess />} />
					<Route path="feed" element={<Feed />} />
					<Route path="/*" element={<>404</>} />
				</Routes>
			</AnimatePresence>
			}
			</Container>
		</>
	);
}

export default App;
