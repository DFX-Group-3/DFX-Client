import React from 'react';
import './ToolElement.css'
export default function ToolElement({ name, image })  {
  return (
    <div className="tool-element-container">
            <div className="inline">
    <div className="tool-element">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" className="tool-element-image" />
      <label className="tool-element-label">React</label>
    </div>
        <div className="tool-element">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="java" className="tool-element-image" />
        <label className="tool-element-label">Java</label>
      </div></div>

      <div className="inline">
          <div className="tool-element">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="js" className="tool-element-image" />
          <label className="tool-element-label">Javascript</label>
        </div>
            <div className="tool-element">
            <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="nodejs" className="tool-element-image" />
            <label className="tool-element-label">Node JS</label>
          </div></div>
          <div className="inline">
            <div className="tool-element">
            <img src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-E-Transparent-File.png" alt="express" className="tool-element-image" />
            <label className="tool-element-label">Express</label>
          </div>
          <div className="tool-element">
          <img src="https://miro.medium.com/max/300/1*veOyRtKTPeoqC_VlWNUc5Q.png" alt="jest" className="tool-element-image" />
          <label className="tool-element-label">Jest</label>
        </div></div>
          <div className='inline'>
            <div className="tool-element">
          <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/HTML5_Shiny_Icon.svg/1024px-HTML5_Shiny_Icon.svg.png" alt="html" className="tool-element-image" />
          <label className="tool-element-label">HTML 5</label>
        </div>
        <div className="tool-element">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css" className="tool-element-image" />
          <label className="tool-element-label">CSS 3</label>
        </div></div>
        <div className='inline'>
        <div className="tool-element">
          <img src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png" alt="mongodb" className="tool-element-image" />
          <label className="tool-element-label">MongoDB</label>
        </div>
        <div className="tool-element">
          <img src="https://seeklogo.com/images/M/mocha-logo-66DA231220-seeklogo.com.png" alt="mocha" className="tool-element-image" />
          <label className="tool-element-label">Mocha</label>
        </div></div>
        <div className='inline'>
        <div className="tool-element">
        <img src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png" alt="scrum" className="tool-element-image"/>
        <label className="tool-element-label">Scrum</label>
          </div>
          <div className="tool-element">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" className="tool-element-image"/>
        <label className="tool-element-label">Git</label>
          </div>
          </div>
          </div>
  );
};


