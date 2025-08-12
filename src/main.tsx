import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/style/style.scss";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
