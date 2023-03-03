import { Container, SocialLogo, Text } from './styles';

const FaceboookLogin = (props) => {
    return (
		<a style={{"textDecoration": "none"}}href={`https://www.facebook.com/v15.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${process.env.REACT_APP_CLIENT_URL}/redirect&state=${"{st=state123abc,ds=123456789}"}&scope=email&response_type=token`}>
		<Container>
			<Text>Continue with Facebook</Text>
			<SocialLogo />
		</Container>
		</a>
    )
}

export default FaceboookLogin