

function resizeActionStr(name,set,resize){
	if(isNaN(resize)||resize>100||resize<1){
		alert("the value is invalid");
		return null;
	}
    const action = [
        "/version 3",
    "/name [ "+ set.length,//setの名前
	ascii2Hex (set),
    "]",
    "/isOpen 1",
    "/actionCount 1",
    "/action-1 {",
    	"/name [ " + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
    	"]",
    	"/keyIndex 0",
    	"/colorIndex 0",
    	"/isOpen 1",
    	"/eventCount 1",
    	"/event-1 {",
    		"/useRulersIn1stQuadrant 0",
    		"/internalName (adobe_scale)",
    		"/localizedName [ 15",
    			"e68ba1e5a4a7e383bbe7b8aee5b08f",
    		"]",
    		"/isOpen 0",
    		"/isOn 1",
    		"/hasDialog 1",
    		"/showDialog 0",
    		"/parameterCount 4",
    		"/parameter-1 {",
    			"/key 1970169453",
    			"/showInPalette 4294967295",
    			"/type (boolean)",
    			"/value 1",
    		"}",
    		"/parameter-2 {",
    			"/key 1818848869",
    			"/showInPalette 4294967295",
    			"/type (boolean)",
    			"/value 1",
    		"}",
    		"/parameter-3 {",
    			"/key 1935895653",
    			"/showInPalette 4294967295",
    			"/type (unit real)",
    			"/value "+zeroTail(resize) ,
    			"/unit 592474723",
    		"}",
    		"/parameter-4 {",
    			"/key 1668247673",
    			"/showInPalette 4294967295",
    			"/type (boolean)",
    			"/value 0",
    		"}",
    	"}",
    "}"
    ].join("\n");  
    return action;
}

function moveAction(name,set,obj){
	function isCopy(value){
		if(value===undefined||value===null||value===0||value===false)return 0;
		if(value===true||value===1||value==="copy")return 1;
		return false;
	}
	var copy = isCopy(obj.copy);
	var x = isNaN(obj.x) ? null : obj.x;
	var y = isNaN(obj.y) ? null : obj.y;
	if(copy===false||x===null||y===null){
		alert("the value is invalid");
		return null;
	}
	var moveAction = [
	"/version 3",
	"/name [ "+ set.length,//setの名前
		ascii2Hex (set),
	"]",
	"/isOpen 1",
	"/actionCount 1",
	"/action-1 {",
		"/name [ " + name.length,//actionの名前と名前の文字列数
			ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 1",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (adobe_move)",
			"/localizedName [ 6",
				"e7a7bbe58b95",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 1",
			"/showDialog 0",
			"/parameterCount 3",
			"/parameter-1 {",
				"/key 1752136302",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value "+ zeroTail(x),//水平移動
				"/unit 592476268",
			"}",
			"/parameter-2 {",
				"/key 1987339116",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + zeroTail(y),//垂直移動
				"/unit 592476268",
			"}",
			"/parameter-3 {",
				"/key 1668247673",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value " + copy,//コピーすかどうかのブーリアン（二進法）
			"}",
		"}",
	"}"
	].join("\n");
	return moveAction;
}

function rotate(name,set,deg){
	if(isNaN(deg)){
		alert("the value is invalid");
		return null;
	}
	const rAction = [
		"/version 3",
		"/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
		"]",
		"/isOpen 0",
		"/actionCount 1",
		"/action-1 {",
		"/name [ " + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
			"]",
			"/keyIndex 0",
			"/colorIndex 0",
			"/isOpen 1",
			"/eventCount 1",
			"/event-1 {",
				"/useRulersIn1stQuadrant 0",
				"/internalName (adobe_rotate)",
				"/localizedName [ 6",
					"e59b9ee8bba2",
				"]",
				"/isOpen 0",
				"/isOn 1",
				"/hasDialog 1",
				"/showDialog 0",
				"/parameterCount 2",
				"/parameter-1 {",
					"/key 1634625388",
					"/showInPalette 4294967295",
					"/type (unit real)",
					"/value "+zeroTail(deg),
					"/unit 591490663",
				"}",
				"/parameter-2 {",
					"/key 1668247673",
					"/showInPalette 4294967295",
					"/type (boolean)",
					"/value 0",
				"}",
			"}",
		"}",
	].join("\n");  
	return rAction;
}

function inverseItem(name,set){
	var reverse = [
		"/version 3",
		"/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
		"]",
		"/isOpen 1",
		"/actionCount 1",
		"/action-1 {",
		"/name [ " + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
			"]",
			"/keyIndex 0",
			"/colorIndex 0",
			"/isOpen 0",
			"/eventCount 1",
			"/event-1 {",
				"/useRulersIn1stQuadrant 0",
				"/internalName (adobe_reflect)",
				"/localizedName [ 15",
					"e383aae38395e383ace382afe38388",
				"]",
				"/isOpen 0",
				"/isOn 1",
				"/hasDialog 1",
				"/showDialog 0",
				"/parameterCount 2",
				"/parameter-1 {",
					"/key 1634625388",
					"/showInPalette 4294967295",
					"/type (unit real)",
					"/value 90.0",
					"/unit 591490663",
				"}",
				"/parameter-2 {",
					"/key 1668247673",
					"/showInPalette 4294967295",
					"/type (boolean)",
					"/value 0",
				"}",
			"}",
		"}",
		].join("\n");  
	return reverse;
}

function expandObject(name,set){
	var isFill = 1;
	var isLine = 1;
	expandFill
	var expandAction = ["/version 3",
"/name [ "+set.length,
	ascii2Hex (set),
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
	"/name [ "+ name.length,
		ascii2Hex (name),
	"]",
	"/keyIndex 0",
	"/colorIndex 0",
	"/isOpen 1",
	"/eventCount 1",
	"/event-1 {",
		"/useRulersIn1stQuadrant 0",
		"/internalName (ai_plugin_expand)",
		"/localizedName [ 15",
			"e58886e589b2e383bbe68ba1e5bcb5",
		"]",
		"/isOpen 0",
		"/isOn 1",
		"/hasDialog 1",
		"/showDialog 0",
		"/parameterCount 4",
		"/parameter-1 {",
			"/key 1868720756",
			"/showInPalette 4294967295",
			"/type (boolean)",
			"/value 1",/*オブジェクトの分割*/
		"}",
		"/parameter-2 {",
			"/key 1718185068",
			"/showInPalette 4294967295",
			"/type (boolean)",
			"/value "+isFill,//塗りを分割
		"}",
		"/parameter-3 {",
			"/key 1937011307",
			"/showInPalette 4294967295",
			"/type (boolean)",
			"/value "+isLine,//線を分割
		"}",
		"/parameter-4 {",
			"/key 1936553064",
			"/showInPalette 4294967295",
			"/type (boolean)",
			"/value 0",//グラデーションメッシュ
		"}",
	"}",
"}"].join("\n");
return expandAction;
}

function expandGradient(name,set,gradientPattern,Dialog){
	if(isNaN(gradientPattern)||gradientPattern < 1){
		alert("the value is invalid");
		return null;
	}
	var showPalette = turnBoolean(Dialog);
	var expandG = ["/version 3",
		"/name [ "+set.length,
			ascii2Hex (set),
		"]",
		"/isOpen 1",
		"/actionCount 1",
		"/action-1 {",
		"/name [ "+ name.length,
			ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 1",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (ai_plugin_expand)",
			"/localizedName [ 15",
				"e58886e589b2e383bbe68ba1e5bcb5",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 1",
			"/showDialog "+showPalette,//ダイアログ
			"/parameterCount 5",
			"/parameter-1 {",
				"/key 1868720756",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 0",/*オブジェクトの分割*/
			"}",
			"/parameter-2 {",
				"/key 1718185068",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 1",//塗りを分割
			"}",
			"/parameter-3 {",
				"/key 1937011307",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 1",//線を分割
			"}",
			"/parameter-4 {",
				"/key 1936553064",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 0",//グラデーションメッシュ
			"}",
			"/parameter-5 {",
				"/key 1937007984",
				"/showInPalette 4294967295",
				"/type (integer)",
				"/value "+gradientPattern,//グラデーション分割数
			"}",
		"}",
	"}"
	].join("\n");
	return expandG;
}

function expandGradientMesh(name,set){
	var meshObj = ["/version 3",
		"/name [ "+set.length,
			ascii2Hex (set),
		"]",
		"/isOpen 1",
		"/actionCount 1",
	"/action-1 {",
		"/name [ "+ name.length,
			ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 1",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (ai_plugin_expand)",
			"/localizedName [ 15",
				"e58886e589b2e383bbe68ba1e5bcb5",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 1",
			"/showDialog 0",
			"/parameterCount 4",
			"/parameter-1 {",
				"/key 1868720756",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 0",
			"}",
			"/parameter-2 {",
				"/key 1718185068",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 1",
			"}",
			"/parameter-3 {",
				"/key 1937011307",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 1",
			"}",
			"/parameter-4 {",
				"/key 1936553064",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 1",
			"}",
		"}",
	"}"
	].join("\n");
	return meshObj;
}