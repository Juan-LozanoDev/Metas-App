import Goal from "./Goal";

const listMock = [
  {
    id: "1",
    details: "Trotar por 40 minutos",
    period: "Dia",
    events: 1,
    icon: "🏃",
    goal: 100,
    term: "2025-08-16",
    finished: 30,
  },
  {
    id: "2",
    details: "Practicar tenis",
    period: "Mes",
    events: 10,
    icon: "🎾",
    goal: 3,
    term: "2025-06-20",
    finished: 1,
  },

  {
    id: "3",
    details: "Conocer diferentes ciudades",
    period: "Año",
    events: 6,
    icon: "✈️",
    goal: 6,
    term: "2025-12-31",
    finished: 4,
  },
];

function List() {
  return listMock.map((goal) => <Goal {...goal}></Goal>);
}

export default List;
