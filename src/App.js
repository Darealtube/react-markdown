import React, {useState} from 'react';
import './App.css';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import { guides, creator } from './guides/guides.js';

function App() {
  const [fontsize,setfontsize] = useState("20px");
  const [fontstyle, setfontstyle] = useState("Arial")

  var md = new Remarkable('full', {
    html: true,
    typographer: true
  }).use(linkify);

  function mark(e){
    document.getElementById("preview").innerHTML = md.render(e.target.value);
  }

  function sizeChange(e){
    setfontsize(e.target.value);
    document.getElementById('preview').style.fontSize = e.target.value;
  }

  function fontChange(e){
    setfontstyle(e.target.value);
    document.getElementById('preview').style.fontFamily = e.target.value;
  }

  function markguide(){
    document.getElementById('text').value = guides;
    document.getElementById('preview').innerHTML = md.render(guides);
  }

  function creators(){
    document.getElementById('text').value = creator;
    document.getElementById('preview').innerHTML = md.render(creator);
  }

  function clear(){
    document.getElementById('text').value = "";
    document.getElementById('preview').innerHTML = "";
  }

  return (
    <div>
    <div className="markdown">

    <div id="dropdown" class="dropdown">
    <button class="dropbtn">Font Size: {fontsize}</button>
    <div id="dropdown-content" class="dropdown-content">
    <button onClick={sizeChange} value="14px">14px</button>
    <button onClick={sizeChange} value="16px">16px</button>
    <button onClick={sizeChange} value="18px">18px</button>
    <button onClick={sizeChange} value="20px">20px</button>
    <button onClick={sizeChange} value="22px">22px</button>
    <button onClick={sizeChange} value="24px">24px</button>
    <button onClick={sizeChange} value="28px">28px</button>
    <button onClick={sizeChange} value="32px">32px</button>
    <button onClick={sizeChange} value="45px">45px</button>
    <button onClick={sizeChange} value="56px">56px</button>
    </div>
    </div>

    <div id="dropdown" class="dropdown2">
    <button class="dropbtn2">Font Style: {fontstyle}</button>
    <div id="dropdown-content" class="dropdown-content2">
    <button onClick={fontChange} value="Arial, Helvetica, sans-serif">Arial</button>
    <button onClick={fontChange} value="Verdana, Helvetica, sans-serif">Verdana</button>
    <button onClick={fontChange} value="Georgia, Helvetica, sans-serif">Georgia</button>
    <button onClick={fontChange} value="'Times New Roman', Times, serif">Times New Roman</button>
    <button onClick={fontChange} value="'Courier New', Courier, monospace">Courier New</button>
    <button onClick={fontChange} value="'Lucida Console', Courier, monospace">Lucida Console</button>
    </div>
    </div>

      <div id="editor">
      <h1 style={{textAlign: "center"}}>Markdown Editor</h1>
      <form>
      <textarea id="text" onChange={mark}></textarea>
      <button type="button" onClick={markguide}>Markdown Guide</button>
      <button type="button" onClick={creators}>Creator's Preface</button>
      <button type="button" onClick={clear}>Clear</button>
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
