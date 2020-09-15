# IllustratorActions

this script generates action for Illustrator like..

resize
rotate
reflect
fillOut color
stroke color


you just pass argument action function and option

for example
var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});//create action object
fill.launchAction();//excute action
the action fill out color on path item you select

all of actions are blow


var resize = new CreateAction(moveAction,{x:100,y:30,copy:false});
resize.launchAction();

resize item you select 
pass option as a object
x how move on x axis
y how move omn y axis
copy boolean , copy or not

var fill = new CreateAction(filloutActionCMYK,{cyan:30,magenta:100,yellow:10,black:10});
fill.launchAction();
change fill CMKY color on path item
pass color as a object
cyan magenta yellow black

var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});
fill.launchAction();
change fill RGB color on path item
pass color as a object
red green blue

var stroke = new CreateAction(strokedColorCMYK,{cyan:80,magenta:10,yellow:10,black:10});
stroke.launchAction();
change stroke CMYK color on path item
pass color as a object
cyan magenta yellow black

var stroke = new CreateAction(strokedColorRGB,{red:0,green:0,blue:200});
stroke.launchAction();
change stroke RGB color on path item
pass color as a object
red green blue

var rotate = new CreateAction(rotate,180);
rotate.launchAction();
rotate item 
pass option degree as a number value 

var reflect = new CreateAction(reflect);
reflect.launchAction();
just reflect item
nothing any option


before use it, include these acripts
#include "./actionCommon.jsx"
#include "./actions.jsx";
#include "./strokeAndActon.jsx";
#include "./createAction.jsx";

on CEP , 

const csInterface = new CSInterface();
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
csInterface.evalScript(`$.evalFile("${extensionRoot}actionCommon.js")`);
csInterface.evalScript(`$.evalFile("${extensionRoot}actions.js")`);
csInterface.evalScript(`$.evalFile("${extensionRoot}strokeAndActon.js")`);
csInterface.evalScript(`$.evalFile("${extensionRoot}createAction.js")`);