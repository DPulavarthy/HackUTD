import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    window.onload = () => {
        if (window.location.href.includes('?code=')) { // Removed the forward slashes around the string
          window.location.href = `${window.location.href.match(/https:\/\/.*?\//g)}Home`;
        }
      }
    

    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <img className='imgLogo' src="./TF_Logo.png" alt="Toyota Foresight Logo" />
                <div className="loginBtn" onClick={()=> loginWithRedirect()}>
                    Sign In
                </div>
            </>
            
        )
        
    )
}

export default Login