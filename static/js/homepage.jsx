"use strict";

function Homepage() {
  return (
    <div>
      WELCOME, FRIEND! <br/>
      <a href= "http://localhost:5000/cards">Link to cards page</a> 
      <br/>
      <img src="/static/img/balloonicorn.jpg"></img> <br/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
