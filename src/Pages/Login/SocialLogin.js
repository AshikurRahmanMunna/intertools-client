import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SocialLogin = ({setSocialLoginError}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, userGoole, loadingGoole, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  const from = location?.state?.from?.pathname || "/";
  const [token] = useToken(userGoole || userFacebook);
  if (token) {
    navigate(from, { replace: true });
  }
  if(errorFacebook || errorGoogle) {
    setSocialLoginError(errorFacebook.message || errorGoogle.message);
  }
  return (
    <div>
      <div class="divider">OR</div>
      <div class="flex w-full justify-center">
        <button
          onClick={() => signInWithFacebook()}
          class="grid w-12 h-12 mr-2 rounded-full card bg-primary place-items-center"
        >
          <FontAwesomeIcon className="text-white" icon={faFacebookF} />
        </button>
        <button
          onClick={() => signInWithGoogle()}
          class="grid w-12 h-12 rounded-full card bg-primary place-items-center"
        >
          <FontAwesomeIcon className="text-white" icon={faGoogle} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
