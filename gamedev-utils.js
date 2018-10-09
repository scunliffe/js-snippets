function curb(n, min, max){
	if(n < min){return min;}
	if(n > max){return max;}
	return n;
}

function lerp(min, max, val){
	return min * (1 - val) + max * val;
}

function getArrayMin(arr){
	return Math.min.apply({}, arr);
}

function getArrayMax(arr){
	return Math.max.apply({}, arr);
}

function getRandomHexColor() {
	return '#' + Math.random().toString(16).slice(2, 8);
}
