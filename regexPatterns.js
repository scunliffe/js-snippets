/*
	A collection of usefull JavaScript Regular Expressions (and utilities)
*/

function sanitizePhoneNumber(str){
	return str.replace(/[^\d+x]|x(?=[^x]*x)/ig, '');
}

var isValidEmailAddress = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/;

var isValidWebsite = /_^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$_iuS/;

/*
	Handles numbers formatted with comma separators and decimals
*/
var isValidNumber = /^(\+?\-?)(((\d{1,3})(,\d{3})*)|(\d+))(.\d+)?$/;

var isValidUSCurrency = /^(\$?)(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;

/*
	Handles percentages from 0-100 with up to N decimal places and an optional trailing '%'
*/
var isValidPercentage = /^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/;

/*
	Handles distances in various forms of imperial units
		3'7"
		18"
		8'4-1/2"
		1-3/4"
		6'
		3'0"
		19/32"
*/
var isValidImperialDimension = /(^([\d]*)(')$)|(^([\d]*)(')([\d]*)([\d])(")$)|(^([\d]*)(')([\d]*)(-)([\d]*)(\/)([\d]*)(")$)|(^([\d]*)(")$)|(^([\d]*)(\/)([\d]*)(")$)|((^([\d]*)(-)([\d]*)(\/)([\d]*)(")$)|(^([\d]*)(")$)|(^([\d]*)(\/)([\d]*)(")$))/;
