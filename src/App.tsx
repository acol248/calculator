import Calculator from "./components/Calculator";
import ThemeWrapper from "./components/ThemeWrapper";
import { getCookie } from "./helpers/cookie";

function App() {
  const theme = getCookie("theme") || "light";

  return (
    <ThemeWrapper value={theme}>
      <main>
        <Calculator />
      </main>
    </ThemeWrapper>
  );
}

export default App;
