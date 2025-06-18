import { useContext, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { Context } from "../../Services/Memory";
import { useNavigate, useParams } from "react-router";

function Details() {
  const optionsFrequency = ["al dia", "a la semana", "al mes", "al año"];
  const emojis = ["🏃", "⚽", "🚴", "🎾", "🎮", "✈️", "👪", "💪"];
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    details: "",
    events: 1,
    period: "Semana",
    icon: "⚽",
    goal: 50,
    term: "2025-12-31",
    finished: 0,
  });

  const [state, dispatch] = useContext(Context);

  const { details, events, period, icon, goal, term, finished } = form;

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const navigate = useNavigate();

  const create = async () => {
    dispatch({ type: "create", goal: form });
    navigate("/list");
  };

  const update = () => {
    dispatch({ type: "update", goal: form });
    navigate("/list");
  }

  const erase = () => {
    dispatch({type: "erase", id});
    navigate("/list");
  }

  const cancel = () => {
    navigate("/list");
  };

  useEffect(() => {
    const metaMemory = state.objects[id];
    if(!id) return;
    if (!metaMemory) {
      return navigate("/list");
    }
    setForm(state.objects[id]);
  }, [id]);

  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            type="text"
            placeholder="ej. 50 partidos"
            className="input"
            value={details}
            onChange={(e) => onChange(e, "details")}
          ></input>
        </label>

        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input type="number" className="input mr-6" value={events} onChange={(e) => onChange(e, "events")} />
            <select name="" id="" className="input" value={period} onChange={(e) => onChange(e, "period")}>
              {optionsFrequency.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" className="input" value={goal} onChange={(e) => onChange(e, "goal")} />
        </label>

        <label className="label">
          ¿Tienes una fecha limite?
          <input type="date" className="input" value={term} onChange={(e) => onChange(e, "term")} />
        </label>

        <label className="label">
          ¿Cuantas veces has completado esta meta?
          <input type="number" className="input" value={finished} onChange={(e) => onChange(e, "finished")} />
        </label>

        <label className="label">
          Escoge el icono para la meta
          <select name="" id="" className="input" value={icon} onChange={(e) => onChange(e, "icon")}>
            {emojis.map((emoji) => (
              <option key={emoji} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>
        </label>
      </form>

      <div className={styles.buttons}>
        {!id && <button className="button button--black" onClick={create}>
          Crear
        </button>}
        {id && <button className="button button--black" onClick={update}>
          Actualizar
        </button>}
        {id && <button className="button button--red" onClick={erase}>
          Borrar
          </button>}
        <button className="button button--gray" onClick={cancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Details;
