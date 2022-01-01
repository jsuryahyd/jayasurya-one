import { Component, lazy } from "solid-js";
import HomePage from "./pages/HomePage";
import { Link, Route, Router, Routes } from "solid-app-router";
import { FormCodeGen } from "/@/pages/Tools/form-codegen";

const Tools = lazy(() => import("./pages/Tools/index"));
const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/tools" component={Tools}>
          <Route
            path=""
            element={() => (
              <div>
                Tools here. Go to{" "}
                <Link href="/tools/form-codegen">Form Code gen</Link>
              </div>
            )}
          />
          <Route path="form-codegen" component={FormCodeGen} />
        </Route>
        <Route path="/*all" element={() => <div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
