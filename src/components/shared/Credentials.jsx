import React, { useState } from "react";
import styles from "./Credentials.module.css";

function Credentials ({ send, title, button }) {
    const [form, setForm] = useState ({
        user: "",
        password: "",
    });

    const { user, password } = form;

    const onChange = (event, prop) => {
        const value = event.target.value;
        setForm((state) => ({...state, [prop]: value}));
    }

    const onAccess = async (event) => {
        event.preventDefault();
        send(form);
    }
   
    return (
        <div className={"tarjeta " + styles.auth }>
            <h1 className={styles.head}>{title}</h1>
            <form className="p-4">
                <label htmlFor="user" className="label">usuario
                    <input className="input" placeholder="Escribe tu email" value={user} onChange={(e) => onChange(e, "user")}/>
                </label>
                <label htmlFor="password" className="label">Clave
                    <input className="input" placeholder="Escribe tu clave" value={password} onChange={(e) => onChange(e, "password")} />
                </label>
            </form>
            <div className={styles.buttons}>
                <button className="button button--black" onClick={(e) => onAccess(e)}>
                    {button}
                </button>
            </div>
        </div>
    )
}

export default Credentials