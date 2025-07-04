import { useContext } from "react";
import Credentials from "../../shared/Credentials";
import { ContextAuth } from "../../../memory/Auth";
import { useNavigate } from "react-router";

function Access() {

    const [auth, dispatchAuth] = useContext(ContextAuth);
    const navigate = useNavigate()

    const send = async (form) => {
      dispatchAuth({type: 'colocar', token: 'token'});
      navigate('/list');
    }

  return (
    <Credentials send={send} title="Acceso" button="Acceder"> </Credentials>
  )
}

export default Access;
