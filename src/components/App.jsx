import React from "react";
import Emojipedia from "../emojipedia";
import Dictionary from "./dictionary";

function createEmoji(newemoji) {
  return (
    <Dictionary
      key={newemoji.id}
      emoji={newemoji.emoji}
      name={newemoji.name}
      description={newemoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
