import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

// fonts
import "./assets/fonts/RobotoCondensed-Bold.ttf"
import "./assets/fonts/RobotoCondensed-Medium.ttf"
import "./assets/fonts/RobotoCondensed-Regular.ttf"
import "./assets/fonts/RobotoCondensed-Light.ttf"
import "./assets/fonts/RobotoCondensed-Thin.ttf"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
