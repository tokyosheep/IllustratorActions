function setDirection(direction){
		switch(direction){
			case "belong":
				return "1";

			case "vertical":
				return "0";

			default:
				return "0";
		}
}

function commitBlend(name,set){

    var blending = [
        "/version 3",
        "/name [ "+ set.length,,
        	ascii2Hex (set),
        "]",
        "/isOpen 1",
        "/actionCount 1",
        "/action-1 {",
        	"/name [ " + name.length,,
        		ascii2Hex (name),
        	"]",
        	"/keyIndex 0",
        	"/colorIndex 0",
        	"/isOpen 1",
        	"/eventCount 1",
        	"/event-1 {",
        		"/useRulersIn1stQuadrant 0",
        		"/internalName (ai_plugin_liveblend)",
        		"/localizedName [ 12",
        			"e38396e383ace383b3e38389",
        		"]",
        		"/isOpen 0",
        		"/isOn 1",
        		"/hasDialog 0",
        		"/parameterCount 1",
        		"/parameter-1 {",
        			"/key 1835363957",
        			"/showInPalette 4294967295",
        			"/type (enumerated)",
        			"/name [ 6",
        				"e4bd9ce68890",
        			"]",
        			"/value 2",
        		"}",
        	"}",
        "}"
    ].join("\n");
    return blending;
}

function setBlendOption(name,set,obj){
	var direction = setDirection(obj.direction);
	var blendoption =[
		"/version 3",
		"/name [ "+ set.length,,
        	ascii2Hex (set),
		"]",
		"/isOpen 1",
		"/actionCount 1",
		"/action-1 {",
			"/name [ " + name.length,,
        		ascii2Hex (name),
			"]",
			"/keyIndex 0",
			"/colorIndex 0",
			"/isOpen 1",
			"/eventCount 1",
			"/event-1 {",
				"/useRulersIn1stQuadrant 0",
				"/internalName (ai_plugin_liveblend)",
				"/localizedName [ 12",
					"e38396e383ace383b3e38389",
				"]",
				"/isOpen 0",
				"/isOn 1",
				"/hasDialog 1",
				"/showDialog 0",
				"/parameterCount 3",
				"/parameter-1 {",
					"/key 1835363957",
					"/showInPalette 4294967295",
					"/type (enumerated)",
					"/name [ 15",
						"e382aae38397e382b7e383a7e383b3",
					"]",
					"/value 5",
				"}",
				"/parameter-2 {",
					"/key 1937007984",
					"/showInPalette 4294967295",
					"/type (integer)",//integer unit real
					"/value "+obj.value,
				"}",
				"/parameter-3 {",
					"/key 1919906913",
					"/showInPalette 4294967295",
					"/type (enumerated)",
					"/name [ 15",
						"e38391e382b9e381abe6b2bfe38186",
					"]",
					"/value " + direction,//ブレンドオブジェクトの方向 1 or 0
				"}",
			"}",
		"}"
	].join("\n");
	return blendoption;
}

function blandDistance(name,set,obj){
	var direction = setDirection(obj.direction);
	var point = 2.83465;
	var blDis =	[
	"/version 3",
	"/name [ "+ set.length,,
        	ascii2Hex (set),
	"]",
	"/isOpen 1",
	"/actionCount 1",
	"/action-1 {",
		"/name [ " + name.length,
        		ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 1",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (ai_plugin_liveblend)",
			"/localizedName [ 12",
				"e38396e383ace383b3e38389",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 1",
			"/showDialog 1",
			"/parameterCount 3",
			"/parameter-1 {",
				"/key 1835363957",
				"/showInPalette 4294967295",
				"/type (enumerated)",
				"/name [ 15",
					"e382aae38397e382b7e383a7e383b3",
				"]",
				"/value 5",
			"}",
			"/parameter-2 {",
				"/key 1684632436",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + obj.value * point,//mmをpointに直す　（point単位でしか渡せない）
				"/unit 592476268",
			"}",
			"/parameter-3 {",
				"/key 1919906913",
				"/showInPalette 4294967295",
				"/type (enumerated)",
				"/name [ 12",
					"e59e82e79bb4e696b9e59091",
				"]",
				"/value " + direction,
			"}",
		"}",
	"}"].join("\n");
	return blDis;
}

function blendSmooth(name,set,obj){
	var direction = setDirection(obj.direction);
	var smoothOption = [
		"/version 3",
	"/name [ "+ set.length,,
        	ascii2Hex (set),
	"]",
	"/isOpen 1",
	"/actionCount 1",
	"/action-1 {",
		"/name [ " + name.length,
        		ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 1",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (ai_plugin_liveblend)",
			"/localizedName [ 12",
				"e38396e383ace383b3e38389",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 1",
			"/showDialog 1",
			"/parameterCount 3",
			"/parameter-1 {",
				"/key 1835363957",
				"/showInPalette 4294967295",
				"/type (enumerated)",
				"/name [ 15",
					"e382aae38397e382b7e383a7e383b3",
				"]",
				"/value 5",
			"}",
			"/parameter-2 {",
				"/key 1936553064",
				"/showInPalette 4294967295",
				"/type (ustring)",
				"/value [ 21",
					"e382b9e383a0e383bce382bae382abe383a9e383bc",
				"]",
			"}",
			"/parameter-3 {",
				"/key 1919906913",
				"/showInPalette 4294967295",
				"/type (enumerated)",
				"/name [ 12",
					"e59e82e79bb4e696b9e59091",
				"]",
				"/value " + direction,
			"}",
		"}",
	"}"
	].join("\n");
	return smoothOption;
}