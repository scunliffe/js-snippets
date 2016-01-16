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

var isValidHexColor = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;

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

var isValidSignedInteger = /^(\+|-)?\d+$/;

var isValidTwoCharacterUSState = /^(AK|AL|AR|AS|AZ|CA|CO|CT|DC|DE|FL|FM|GA|GU|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MH|MI|MN|MO|MP|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|PR|PW|RI|SC|SD|TN|TX|UT|VA|VI|VT|WA|WI|WV|WY)$/;

var isValidUSZipCode = /(^(\d{5})$)|(^((\d){5}(\-?)(\d){4})$)/;

var isValidCanadianPostalCode = /^([a-z])(\d)([a-z])([\s\-]?)(\d)([a-z])(\d)$/i;

var isValidMD5Hash = /^([a-z0-9]{32})$/;

/*
	Find IPv4 IP addresses
*/
var isValidIPAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;

/*
	Handles US SSN
*/
function validateSSN(ssn) {
	//find area number (1st 3 digits, no longer actually signifies area)
	var area = parseInt(ssn.substring(0, 3));
	return (
		//9 characters
		ssn.length === 9 &&
		//no set can start with zero
		ssn.match(/^[1-9][0-9]{2}[1-9][0-9]{1}[1-9][0-9]{3}/) &&
		//disallow Satan's minions from becoming residents of the US
		area !== 666 &&
		//it's over 900
		area < 900 &&
		//fun fact: some idiot boss put his secretary's ssn in wallets
		//he sold, now it "belongs" to 40000 people
		ssn !== '078051120' &&
		//was used in an ad by the Social Security Administration
		ssn !== '219099999'
	);
}

/*
	Handles usernames from 6 to 32 characters in length...
	starting alpha, remaining can be alpha, numeric, dash or underscore.
*/
var isValidUsername = /^([a-z])([a-z0-9\-_]{5,31})$/i;

/*
	Handles time in the HH:MM or HH:MM:SS formats (with our without colon delimiters)
*/
var isValid24HourTime = /^([01]?[0-9]|2[0-3])(:?)[0-5][0-9](((:?)[0-5][0-9])?)$/;

/*
	Handles expiry date fields typically used on credit card form validations (for acceptable formats)
	TODO: Expand to ensure valid values are entered e.g. 99 is not a valid month
*/
var isValidMonthYearExpiryDate = /^(\d){1,2}([^\d]?)(\d){1,2}$/;
