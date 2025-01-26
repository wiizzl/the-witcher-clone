import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="text-red-500 text-5xl">hello world</div>
    </StrictMode>
);
