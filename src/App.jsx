import Card from "./components/Card/Card";
import Credits from "./components/Credits/Credits";
import "./css/App.css";

function App() {
   return (
      <>
         <Card userName="Jessica Randall" location="London, United Kingdom" />
         <Credits name={"Pravin Kori"} githubUserName={"pravinkori"} />
      </>
   );
}

export default App;
