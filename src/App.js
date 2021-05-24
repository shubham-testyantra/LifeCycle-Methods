import Mounting from "./components/reactLifeCycle/mounting/Mounting";
import UnMounting from "./components/reactLifeCycle/unmounting/UnMounting";
import ReactUpdate from "./components/reactLifeCycle/updating/ReactUpdate";

function App() {
  return (
    <div className="App">
      {/* <Mounting newFramework="Vue JS" /> */}
      {/* <Mounting /> */}

      {/* <ReactUpdate newSnacks="Pani Puri" /> */}
      {/* <ReactUpdate /> */}

      <UnMounting />
    </div>
  );
}

export default App;
