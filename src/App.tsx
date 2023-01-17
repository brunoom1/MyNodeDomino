import { useEffect } from "react";
import "./styles.css";

import game from "./main";

export default function App() {
  let initControl = 0;

  useEffect(() => {
    if (!initControl) {
      game();
      initControl++;
    }
  }, [initControl]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
