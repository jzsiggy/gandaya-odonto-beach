import useScript from "../../../hooks/useScript";
import client from '../../../service/client';

const GoogleLogin = (props) => {
	useScript("https://accounts.google.com/gsi/client", () => { })

	window.handleCredentialResponse = async function(res) {
		props.setLoading(true);
		
		client.post(
			'/auth/login/google', 
			{
				googleIDToken: res.credential
			}
		)
		.then(res => props.ping())
		.catch(err => props.ping())
	}

    return (
		<>
		<div id="g_id_onload"
			data-client_id={process.env.REACT_APP_GOOGLE_APP_ID}
			data-context="signin"
			data-ux_mode="redirect"
			// data-callback="handleCredentialResponse"
			data-login_uri={`${process.env.REACT_APP_SERVER_CONNECTION}/auth/login/google/?redirect=${process.env.REACT_APP_CLIENT_URL}/redirect`}
			data-auto_prompt="false">
		</div>

		<div className="g_id_signin"
			data-type="standard"
			data-shape="rectangular"
			data-theme="outline"
			data-text="continue_with"
			data-size="large"
			data-logo_alignment="left"
			data-width="250">
		</div>
		</>
    )
}

export default GoogleLogin