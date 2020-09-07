import React from 'react';
import './App.css';
import marked from 'marked';

function App() {

  function mark(e){
    document.getElementById("preview").innerHTML = marked(e.target.value);
  }


  return (
    <div>
    <div className="markdown">

      <div id="editor">
      <h1 style={{textAlign: "center"}}>Markdown Editor</h1>
      <form>
      <textarea id="text" onInput={mark}></textarea>
      <span id="l">
      <button>LOL</button>
      </span>
      </form>
      </div>
      
      <div id="display">
      <h1 style={{textAlign: "center"}}>Markdown Preview</h1>
      <div id="preview">
      </div>
      </div>

    </div>
    </div>
  );
}

export default App;
