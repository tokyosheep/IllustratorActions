function isInvalidNum(num,max,min){
	return isNaN(num)||num>max||num<min;
}

function invastProp(color,max,min){
	try{
		for(p in color){
			if(isInvalidNum(color[p], max, min)){
				alert("value is invalid");
				return false;
			}
		}
		return true;
	}catch(e){
		return false;
	}
}

function validateColor(type,color){
	if(type==="RGB"){
		return invastProp(color,255,0);
	}else if(type==="CMYK"){
		return invastProp(color,100,0);
	}else{
		alert("the type is invalid");
		return false;
	}
}

var filloutActionRGB = function (name,set,color){
	if(!validateColor("RGB",color))return null;
    var fillOut = [
           "/version 3",
        "/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
        "]",
        "/isOpen 1",
        "/actionCount 1",
        "/action-1 {",
        	"/name [" + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
        	"]",
        	"/keyIndex 0",
        	"/colorIndex 0",
        	"/isOpen 1",
        	"/eventCount 1",
        	"/event-1 {",
        		"/useRulersIn1stQuadrant 0",
        		"/internalName (ai_plugin_setColor)",
        		"/localizedName [ 18",
        			"e382abe383a9e383bce38292e8a8ade5ae9a",
        		"]",
        		"/isOpen 1",
        		"/isOn 1",
        		"/hasDialog 0",
        		"/parameterCount 6",
        		"/parameter-1 {",
        			"/key 1768186740",
        			"/showInPalette 4294967295",
        			"/type (ustring)",
        			"/value [ 18",
        				"e382abe383a9e383bc2028e5a197e3828a29",
        			"]",
        		"}",
        		"/parameter-2 {",
        			"/key 1718185068",
        			"/showInPalette 4294967295",
        			"/type (boolean)",
        			"/value 1",
        		"}",
        		"/parameter-3 {",
        			"/key 1954115685",
        			"/showInPalette 4294967295",
        			"/type (enumerated)",
        			"/name [ 13",
        				"52474220e382abe383a9e383bc",
        			"]",
        			"/value 2",
        		"}",
        		"/parameter-4 {",
        			"/key 1919247406",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+zeroTail(color.red),
        		"}",
        		"/parameter-5 {",
        			"/key 1735550318",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+zeroTail(color.green),
        		"}",
        		"/parameter-6 {",
        			"/key 1651275109",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+ zeroTail(color.blue),
        		"}",
        	"}",
        "}"
    ].join("\n");
    return fillOut;
}
    
var filloutActionCMYK = function (name,set,color){
	if(!validateColor("CMYK",color))return null;
		var fillOut = [
                "/version 3",
        "/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
        "]",
        "/isOpen 1",
        "/actionCount 1",
        "/action-1 {",
        	"/name [" + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
        	"]",
        	"/keyIndex 0",
        	"/colorIndex 0",
        	"/isOpen 1",
        	"/eventCount 1",
        	"/event-1 {",
        		"/useRulersIn1stQuadrant 0",
        		"/internalName (ai_plugin_setColor)",
        		"/localizedName [ 18",
        			"e382abe383a9e383bce38292e8a8ade5ae9a",
        		"]",
        		"/isOpen 0",
        		"/isOn 1",
        		"/hasDialog 0",
        		"/parameterCount 7",
        		"/parameter-1 {",
        			"/key 1768186740",
        			"/showInPalette 4294967295",
        			"/type (ustring)",
        			"/value [ 18",
        				"e382abe383a9e383bc2028e5a197e3828a29",
        			"]",
        		"}",
        		"/parameter-2 {",
        			"/key 1718185068",
        			"/showInPalette 4294967295",
        			"/type (boolean)",
        			"/value 1",
        		"}",
        		"/parameter-3 {",
        			"/key 1954115685",
        			"/showInPalette 4294967295",
        			"/type (enumerated)",
        			"/name [ 14",
        				"434d594b20e382abe383a9e383bc",
        			"]",
        			"/value 4",
        		"}",
        		"/parameter-4 {",
        			"/key 1668899182",
        			"/showInPalette 4294967295",
        			"/type (unit real)",
        			"/value " + zeroTail(color.cyan),
        			"/unit 592474723",
        		"}",
        		"/parameter-5 {",
        			"/key 1835496545",
        			"/showInPalette 4294967295",
        			"/type (unit real)",
        			"/value " + zeroTail(color.magenta),
        			"/unit 592474723",
        		"}",
        		"/parameter-6 {",
        			"/key 2036690039",
        			"/showInPalette 4294967295",
        			"/type (unit real)",
        			"/value " + zeroTail(color.yellow),
        			"/unit 592474723",
        		"}",
        		"/parameter-7 {",
        			"/key 1651270507",
        			"/showInPalette 4294967295",
        			"/type (unit real)",
        			"/value " + zeroTail(color.black),
        			"/unit 592474723",
        		"}",
        	"}",
        "}"
	].join("\n");
    return fillOut;
}


	
var strokedColorRGB = function (name,set,color){
	if(!validateColor("RGB",color))return null;
		var fillOut = [
				"/version 3",
		"/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
		"]",
		"/isOpen 1",
		"/actionCount 1",
		"/action-1 {",
			"/name [" + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
			"]",
			"/keyIndex 0",
			"/colorIndex 0",
			"/isOpen 0",
			"/eventCount 1",
			"/event-1 {",
				"/useRulersIn1stQuadrant 0",
				"/internalName (ai_plugin_setColor)",
				"/localizedName [ 18",
					"e382abe383a9e383bce38292e8a8ade5ae9a",
				"]",
				"/isOpen 1",
				"/isOn 1",
				"/hasDialog 0",
				"/parameterCount 6",
				"/parameter-1 {",
					"/key 1768186740",
					"/showInPalette 4294967295",
					"/type (ustring)",
					"/value [ 15",
						"e382abe383a9e383bc2028e7b79a29",
					"]",
				"}",
				"/parameter-2 {",
					"/key 1718185068",
					"/showInPalette 4294967295",
					"/type (boolean)",
					"/value 0",
				"}",
				"/parameter-3 {",
					"/key 1954115685",
					"/showInPalette 4294967295",
					"/type (enumerated)",
					"/name [ 13",
						"52474220e382abe383a9e383bc",
					"]",
					"/value 2",
				"}",
				"/parameter-4 {",
					"/key 1919247406",
					"/showInPalette 4294967295",
					"/type (real)",
					"/value "+zeroTail(color.red),
				"}",
				"/parameter-5 {",
					"/key 1735550318",
					"/showInPalette 4294967295",
					"/type (real)",
					"/value "+zeroTail(color.green),
				"}",
				"/parameter-6 {",
					"/key 1651275109",
					"/showInPalette 4294967295",
					"/type (real)",
					"/value "+zeroTail(color.blue),
				"}",
			"}",
		"}"
	].join("\n");
    return fillOut;
}

var strokedColorCMYK = function (name,set,color){
	if(!validateColor("CMYK",color))return null;
			var fillOut = [
				"/version 3",
	"/name [ " + set.length,//actionの名前と名前の文字列数
		ascii2Hex (set),
	"]",
	"/isOpen 1",
	"/actionCount 1",
	"/action-1 {",
		"/name [" + name.length,//actionの名前と名前の文字列数
		ascii2Hex (name),
		"]",
		"/keyIndex 0",
		"/colorIndex 0",
		"/isOpen 0",
		"/eventCount 1",
		"/event-1 {",
			"/useRulersIn1stQuadrant 0",
			"/internalName (ai_plugin_setColor)",
			"/localizedName [ 18",
				"e382abe383a9e383bce38292e8a8ade5ae9a",
			"]",
			"/isOpen 0",
			"/isOn 1",
			"/hasDialog 0",
			"/parameterCount 7",
			"/parameter-1 {",
				"/key 1768186740",
				"/showInPalette 4294967295",
				"/type (ustring)",
				"/value [ 15",
					"e382abe383a9e383bc2028e7b79a29",
				"]",
			"}",
			"/parameter-2 {",
				"/key 1718185068",
				"/showInPalette 4294967295",
				"/type (boolean)",
				"/value 0",
			"}",
			"/parameter-3 {",
				"/key 1954115685",
				"/showInPalette 4294967295",
				"/type (enumerated)",
				"/name [ 14",
					"434d594b20e382abe383a9e383bc",
				"]",
				"/value 4",
			"}",
			"/parameter-4 {",
				"/key 1668899182",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + zeroTail(color.cyan),
				"/unit 592474723",
			"}",
			"/parameter-5 {",
				"/key 1835496545",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + zeroTail(color.magenta),
				"/unit 592474723",
			"}",
			"/parameter-6 {",
				"/key 2036690039",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + zeroTail(color.yellow),
				"/unit 592474723",
			"}",
			"/parameter-7 {",
				"/key 1651270507",
				"/showInPalette 4294967295",
				"/type (unit real)",
				"/value " + zeroTail(color.black),
				"/unit 592474723",
			"}",
		"}",
	"}"
		].join("\n");
    return fillOut;
}