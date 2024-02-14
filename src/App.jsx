import Card from "./components/Card";
import Credits from "./components/Credits";
import "./css/App.css";

function App() {
   return (
      <>
         <Card userName="Jessica Randall" location="London, United Kingdom" />
         <Credits />
      </>
   );
}

export default App;
