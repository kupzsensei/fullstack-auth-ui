import { withAuth } from "./hoc/hoc-withAuth";
import { useVerifyToken } from "./hooks/useVerifyToken";

function App() {
  // useVerifyToken();
  return (
    <main>
      <h1>this is a index page</h1>
    </main>
  );
}

export default withAuth(App);
