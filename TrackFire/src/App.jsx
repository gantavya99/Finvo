import { Button } from "@/components/ui/button";
import Landing from "./pages/Landing Page/Landing";
import { BrowserRouter } from "react-router-dom";
import FinvoRoutes from "./Routes";
export default function App() {
  const AppContainer = {
    minWidth: "600px",
    margin: "0 auto"
  }
  return (
      <div className="AppContainer max-w-7xl mx-auto">
        <BrowserRouter>
        <FinvoRoutes />
        </BrowserRouter>
      </div>
  )
}
