import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithGoogle } from "../../firebase";
import '../Home/index.scss';

const Login = () => {
    return ( 
        <div className="dashboard">
            <button className="flat-button" style={{ 'aniumation': 'none', 'background': 'transparent', }}
                onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} style={{'marginRight':'20px'}} />
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;