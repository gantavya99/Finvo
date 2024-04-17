import { Button } from "@/components/ui/button";
import Landing from "./pages/Landing Page/Landing";

export default function App() {
  const AppContainer = {
    minWidth: "600px",
    margin: "0 auto"
  }
  return (
        <div className="AppContainer max-w-7xl mx-auto">
      <Landing />
      </div>
  )
  
}
