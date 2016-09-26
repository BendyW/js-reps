//Round 1

var strings = ["hi", "hello", "yay", "stuff"];
var strings2 = ["hello", "stuff"]


var lengths = function(array){
	//var stringsLength;
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].length;
	}
	console.log(array);
}

lengths(strings);
lengths(strings2);


//Round 2

Math.pow(4, 3);

var num1 = 10;
var num2 = 10;
var num3 = 2;

var transmogrifier = function(x,y,z){
	var multi = x * y;
	var exponent = Math.pow(multi, z);
	console.log(exponent);
}


transmogrifier(2, 2, 2);
transmogrifier(num1,num2, num3)



//Round 3

var words = "sammy slips stuff"

var toonify = function(accent, sentence){
	var sentenceFinal;

	if(accent === 'daffy'){
		sentenceFinal = sentence.replace(/s/g, "th");
		console.log(sentenceFinal)
	}
}

toonify('daffy',words);

//Round 4

var moreWords = "hello this is a sentence";

var reverseArr = function(sentence){
	var splitWords = sentence.split(' ');
	var reversed = splitWords.reverse();
	var final= '';
	for(i=0; i<reversed.length; i++){
		final +=  reversed[i] + ' ';
	}
	console.log(final);
}

reverseArr(moreWords);


//Round 5; 

var reverseLetters = function(sentence){
	var splitWords = sentence.split(' ');
	var final = '';
	for (var i = 0; i < splitWords.length; i++) {
			var temp = '';
			var temp2 = '';
			temp = splitWords[i].split('');
			temp.reverse();

			for (var j = 0; j < temp.length; j++) {
				temp2 += temp[j];
			}
			final += temp2 + ' ';
	}
	console.log(final);
}
reverseLetters(moreWords);















