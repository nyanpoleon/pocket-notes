import MediaQuery from "react-responsive";
import "./App.css";

function App() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <div className="mobile">
          <div className="header">
            Pocket Notes
          </div>
          <div className="create-button">
            <button>+ Create Notes</button>
          </div>
          <div className="notes-heading">
            
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        {/* content for desktop devices */}
      </MediaQuery>
    </>
  );
}

export default App;
