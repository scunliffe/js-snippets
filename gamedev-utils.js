function curb(n, min, max){
	if(n < min){return min;}
	if(n > max){return max;}
	return n;
}

function lerp(min, max, val){
	return min * (1 - val) + max * val;
}
