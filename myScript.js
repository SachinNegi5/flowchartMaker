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


let str

let obj = []
let flow =''
var diagram
function variableDefiner() {
    
    diagram = document.getElementById("name").value + "=>" + document.getElementById("sel").value + ": " + document.getElementById("name").value
    obj.push(diagram)
    console.log(obj)
    
    flow = flow+document.getElementById("name").value+'->'
    console.log(flow)
    
    flowChartDisplayer()
}
function flowChartDisplayer(){
    return new Promise(async(resolve,reject)=>{
        str = ''
        obj.forEach(function(el){
            str = str + el + '\n'
        })
        str = str.concat(flow)
        newFun(str)
        console.log(str)
        console.log("FLOW===========" +  str)    
        return resolve(str)
    })
}

function newFun(str){
    try{
        document.getElementById('flowchart').innerHTML = "";
        document.getElementById('flowchart').classList.add('centered')
        // document.getElementById('flowchart').style.display='none'
        // let stt = `start=>start: start
        //     op1=>operation: op1
        //     op2=>operation: op2
        //     start->op1(right)->op1->op2`

        console.log(document.getElementById('flowchart')+"<=IN FUN==="+str)
            var diagram = flowchart.parse(str);
            diagram.drawSVG('flowchart');
    }
    catch(e){
        console.log("EXCEPTION CAUGHT")
        console.log(e)
    }
}