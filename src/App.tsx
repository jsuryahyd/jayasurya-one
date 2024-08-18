import { Component, lazy } from "solid-js";
import { Link, Route, Router, Routes } from "solid-app-router";
import { FormCodeGen } from "~/pages/Tools/form-codegen";
import webAssemblyTest from "~/pages/_web-assembly-test";

const Tools = lazy(() => import("./pages/Tools/index"));
const App: Component = () => {
  return (
    <Router>
      <Routes>
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
        <Route path="/web-assembly-test" component={webAssemblyTest} />
        <Route path="/*all" element={() => <div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
