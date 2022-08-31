import { useState } from "react";

const people = [
  {
    id: "people-01",
    title: "Lo mejor de lo mejor",
  },
  {
    id: "people-02",
    title: "Carlo Magno",
  },
  {
    id: "people-03",
    title: "EL militar",
  },
  {
    id: "people-04",
    title: "Carlitos",
  },
  {
    id: "people-05",
    title: "La tortuga",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Dias buenos",
  },
  {
    id: "calendar-02",
    title: "Lejanos",
  },
  {
    id: "calendar-03",
    title: "EL militar",
  },
  {
    id: "calendar-04",
    title: "Carlitos",
  },
  {
    id: "calendar-05",
    title: "La tortuga",
  },
];
const emails = [
  {
    id: "email-01",
    title: "Lo mejor de lo mejor",
  },
  {
    id: "email-02",
    title: "Carlo Magno",
  },
  {
    id: "email-03",
    title: "EL militar",
  },
  {
    id: "email-04",
    title: "Carlitos",
  },
  {
    id: "email-05",
    title: "La tortuga",
  },
];
function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;
    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    }
  }
  return (
    <div>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendar
      </button>
      <button onClick={handleClick} name="emails">
        Emails
      </button>
      <div>
        {data.map((e) => {
          return <div>{e.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
