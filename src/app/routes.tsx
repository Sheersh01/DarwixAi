import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import PRD from "./components/PRD";
import AIBlueprint from "./components/AIBlueprint";
import Wireframes from "./components/Wireframes";
import BusinessCase from "./components/BusinessCase";
import LiveDemo from "./components/LiveDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "prd", Component: PRD },
      { path: "ai-blueprint", Component: AIBlueprint },
      { path: "wireframes", Component: Wireframes },
      { path: "business-case", Component: BusinessCase },
      { path: "demo", Component: LiveDemo },
    ],
  },
]);
