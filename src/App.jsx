import "./index.css";

function Header(props) {
  return <h1>Glenn {props.surname}</h1>;
}

function Box(props) {
  return (
    <div className="box">{props.subjectCode}</div>
  );
}

function App() {
  return (
    <div className="main-container">
      <Header surname="Peña"/>
      <Box subjectCode="CPEITEL"/>
    </div>
  );
}

export default App;