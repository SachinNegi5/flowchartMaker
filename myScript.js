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
let obj = []
let flow =''
let str = ''
var diagram
function variableDefiner() {
    diagram = document.getElementById("name").value + "=>" + document.getElementById("sel").value + ":" + document.getElementById("name").value
    obj.push(diagram)
    console.log(obj)
    
    flow = flow+document.getElementById("name").value+'->'
    console.log(flow)

    flowChartDisplayer()
}
function flowChartDisplayer(){
    obj.forEach(function(el){
        str = str + el + '\n'
        })
        str = str.concat(flow)
        console.log(str)
    console.log("FLOW===========" +  str)    
}