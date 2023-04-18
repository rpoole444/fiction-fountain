import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import CustomPrompts from "../CustomPrompts/CustomPrompts";
import StoryPage from "../StoryPage/StoryPage";
import HistoryPage from "../HistoryPage/HistoryPage";
import ImagePrompts from "../ImagePrompts/ImagePrompts";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/custom-prompt" component={CustomPrompts} />
        <Route path="/story" component={StoryPage} />
        <Route path="/image-prompt" component={ImagePrompts} />
        <Route path="/history" component={HistoryPage} />
      </Switch>
    </main>
  );
}

export default App;
