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

function getAsConstant(val){
	return function(){return val;};
}

//get arandom UUID in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
function getUUID4(){
	var uuid = '', i;
	for(i=0;i<32;i+=1){
		switch(i){
		case 8:
		case 20:
			uuid += '-';
			uuid += (Math.random() * 16 | 0).toString(16);
			break;
		case 12:
			uuid += '-';
			uuid += '4';
			break;
		case 16:
			uuid += '-';
			uuid += (Math.random() * 4 | 8).toString(16);
			break;
		default:
			uuid += (Math.random() * 16 | 0).toString(16);
		}
	}
	return uuid;
}
