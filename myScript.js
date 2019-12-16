let leftContent = document.getElementById('left-content')
var drawer = ''
let inputHTML = 
`<form action="/action_page.php">
Stage Name:
<input type="text" id="name" name="stageName">
<select id="sel">
<option value="start">Start</option>
<option value="end">End</option>
<option value="condition">Condition</option>
<option value="operation">Operation</option>
<option value="subroutine">Subroutine</option>
<option value="inputoutput">Input Output</option>
</select>
<button onclick="myfun();return false;" >+</button>
</form>`

function myfun() {
    var diagram = document.getElementById("name").value + "=>" + document.getElementById("sel").value + ":" + document.getElementById("name").value
    console.log(diagram)
    leftContent.innerHTML += inputHTML;
}
function myChangeFunction(){
    console.log("changing")
    drawer = drawer + document.getElementById("name").value+"->"
    console.log(drawer)
}