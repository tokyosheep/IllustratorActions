(function(){
    "use strict";
    #include "./actionCommon.jsx"
    #include "./actions.jsx";
    #include "./strokeAndActon.jsx";
    #include "./createAction.jsx";
    #include "./blends.jsx";
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
    var refl = new CreateAction(mirror);
    refl.launchAction();
    */
    /*
    var stroke = new CreateAction(strokedColorCMYK,{cyan:80,magenta:10,yellow:10,black:10});
    stroke.launchAction();
    */

    /*
    var stroke = new CreateAction(strokedColorRGB,{red:0,green:0,blue:200});
    stroke.launchAction();
    */
    /*
    var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});
    fill.launchAction();
    */
    /*
    var expand = new CreateAction(expandGradient,false,false);
    expand.launchAction();
    */
    /*
    var expandGItem = new CreateAction(expandGradient,17,true);
    expandGItem .launchAction();
    */
    /*
    var meshItem = new CreateAction(expandGradientMesh);
    meshItem.launchAction();
    */
    
    var blOption = new CreateAction(setBlendOption,{value:6,direction:0});//step
    blOption.launchAction();
    
    /*
    var blDistance = new CreateAction(blandDistance,{value:70,direction:0});
    blDistance.launchAction();
    */
    /*
    var blSmooth = new CreateAction(blendSmooth,{direction:0});
    blSmooth.launchAction();
    */
    var bl = new CreateAction(commitBlend);
    bl.launchAction();
})();