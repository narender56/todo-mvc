import React from "react";
import { createRoot } from "react-dom/client";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

import App from "./app";
import initTranslation from "./I18n/i18n";

initTranslation();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
