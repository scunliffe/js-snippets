//Assorted utility functions (extract and include as needed)

function randomNumber(min, max){
	var rnd = Math.floor((Math.random()*((max+1)-min))+min);
	return rnd;
}

function extendNamespace(ns, nsStr){
	var bits = nsStr.split('.');
	var parent = ns;
	var key;
	var bL = bits.length;
	for(var i=0;i<bL;i++){
		key = bits[i];
		if(typeof(parent[key]) == 'undefined'){
			parent[key] = {};
		}
		parent = parent[key];
	}
	return parent;
}

//
function getAsConstant(val){
	return function(){return val;};
}
