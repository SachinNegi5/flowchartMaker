let str
let infoArr = []
let flow =''
let content
function variableDefiner() {
    
    content = document.getElementById("name").value + "=>" + document.getElementById("sel").value + ": " + document.getElementById("name").value
    infoArr.push(content)
    console.log(infoArr)
    
    flow = flow+document.getElementById("name").value+'->'
    console.log(flow)
    
    flowChartDisplayer()
}
function flowChartDisplayer(){
    return new Promise(async(resolve,reject)=>{
        str = ''
        infoArr.forEach(function(el){
            str = str + el + '\n'
        })
        str = str.concat(flow)
        newFun(str)
       
        return resolve(str)
    })
}

function newFun(str){
    try{
        document.getElementById('flowchart').innerHTML = "";
        document.getElementById('flowchart')
 
        var diagram = flowchart.parse(str);
        diagram.drawSVG('flowchart');
    }
    catch(e){
        console.log("EXCEPTION CAUGHT")
        console.log(e)
    }
}