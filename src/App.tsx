import type { RDKitModule } from "@rdkit/rdkit";
import React, { useState, useEffect } from "react";
import "./App.css";

declare global {
  interface Window {
    RDKit: RDKitModule;
  }
}

function App() {
  const [rdkitLoaded, setRdkitLoaded] = useState(false);

  useEffect(() => {
    window.initRDKitModule().then((rdkit) => {
      window.RDKit = rdkit;
      setRdkitLoaded(true);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {rdkitLoaded ? (
          <span
            dangerouslySetInnerHTML={{
              __html: window.RDKit.get_mol("c1ccccc1").get_svg(),
            }}
          />
        ) : (
          "Loading..."
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
