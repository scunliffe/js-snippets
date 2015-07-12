/*
	A handy object for dealing with Arrays of known lengths that loop.
	e.g. The days of the week [1,2,3,4,5,6,7]
	In many scenarios you want to get the next() or prev() index... and if the next() or prev() is beyond the
	given range, loop around and return the index at the other end.
	
	Notes:
		If you don't set the index on creation, the min will be used.
		For speed there is no validation.  If you don't set a min/max, or set an invalid min/max/idx
		things will break!
*/

function Loop(min, max, idx){
	var idx = idx || min;
	var min = min;
	var max = max;
	return {
		get:function(){
			return idx;
		},
		set:function(val){
			idx = val;
		},
		prev:function(){
			if(idx == min){
				return idx = max;
			}
			return idx--;
		},
		next:function(){
			if(idx == max){
				return idx = min;
			}
			return idx++;
		}
	};
};
