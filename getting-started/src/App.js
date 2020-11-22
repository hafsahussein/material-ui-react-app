const { default: Sidemenu } = require("./components/Sidemenu");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <div className="App">
      <Sidemenu/>
      <Header/>
    </div>
  );
}

export default App;
