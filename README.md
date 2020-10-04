# IllustratorActions

<h2>this script generates action for Illustrator like..</h2>

<ul>
  <li>resize</li>
  <li>rotate</li>
  <li>reflect</li>
  <li>fillOut color</li>
  <li>stroke color</li>
</ul>

<p>you just pass argument action function and option</p>

<p>for example</p>
<p>
var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});//create action object
fill.launchAction();//excute action
the action fill out color on path item you select
</p>
<p>all of actions are blow</p>

<p>
var resize = new CreateAction(moveAction,{x:100,y:30,copy:false});
</p>
<p>
resize.launchAction();
</p>

<p>
resize item you select 
pass option as a object
x how move on x axis
y how move omn y axis
copy boolean , copy or not
</p>

<p>
var fill = new CreateAction(filloutActionCMYK,{cyan:30,magenta:100,yellow:10,black:10});
</p>
<p>
fill.launchAction();
</p>
<p>
change fill CMKY color on path item
pass color as a object
cyan magenta yellow black
</p>

<p>
var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});
</p>
<p>
fill.launchAction();
</p>
<p>
change fill RGB color on path item
pass color as a object
red green blue
</p>
<p>
var stroke = new CreateAction(strokedColorCMYK,{cyan:80,magenta:10,yellow:10,black:10});
 </p>
<p>
stroke.launchAction();
</p>
<p>
change stroke CMYK color on path item
pass color as a object
cyan magenta yellow black
</p>
<p>
var stroke = new CreateAction(strokedColorRGB,{red:0,green:0,blue:200});
</p>
<p>
stroke.launchAction();
</p>
<p>
change stroke RGB color on path item
pass color as a object
red green blue
</p>

<p>
var rotateObj = new CreateAction(rotate,180);
</p>
<p>
rotateObj.launchAction();
</p>
<p>
rotate item 
pass option degree as a number value 
</p>

<p>
var refl = new CreateAction(inverseItem);
</p>
<p>
refl.launchAction();
just reflect item
nothing any option
</p>

<h3>for jsx</h3>
<p>
before use it, include these scripts
</p>
<ul>
  <li>#include "./actionCommon.jsx"</li>
  <li>#include "./actions.jsx";</li>
  <li>#include "./strokeAndActon.jsx";</li>
  <li>#include "./createAction.jsx";</li>
</ul>

<h3>on CEP </h3>

<p>
const csInterface = new CSInterface();
</p>
<p>
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
</p>
<p>
csInterface.evalScript(`$.evalFile("${extensionRoot}actionCommon.js")`);
</p>
<p>
csInterface.evalScript(`$.evalFile("${extensionRoot}actions.js")`);
</p>
<p>
csInterface.evalScript(`$.evalFile("${extensionRoot}strokeAndActon.js")`);
</p>
<p>
csInterface.evalScript(`$.evalFile("${extensionRoot}createAction.js")`);
</p>
