import { Button } from "@/components/ui/button";
import Landing from "./pages/Landing Page/Landing";
import { BrowserRouter } from "react-router-dom";
import FinvoRoutes from "./Routes";
import { VITE_SPLITWISE_CONSUMER_KEY } from "../api";
export default function App() {
  console.log(VITE_SPLITWISE_CONSUMER_KEY);
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
