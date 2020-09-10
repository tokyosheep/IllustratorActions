(function(){
    "use strict";
    #include "./actionCommon.jsx"
    #include "./actions.jsx";
    #include "./strokeAndActon.jsx";
    #include "./createAction.jsx";

    /*
    var resize = new CreateAction(moveAction,{x:100,y:30,copy:false});
    resize.launchAction();
    */

    /*
    var fill = new CreateAction(filloutActionCMYK,{cyan:30,magenta:100,yellow:10,black:10});
    fill.launchAction();
    */

    /*
    var rotate = new CreateAction(rotate,180);
    rotate.launchAction();
    */

    /*
    var reflect = new CreateAction(reflect);
    reflect.launchAction();
    */
    /*
    var stroke = new CreateAction(strokedColorCMYK,{cyan:80,magenta:10,yellow:10,black:10});
    stroke.launchAction();
    */

    /*
    var stroke = new CreateAction(strokedColorRGB,{red:0,green:0,blue:200});
    stroke.launchAction();
    */

    var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});
    fill.launchAction();
    
})();