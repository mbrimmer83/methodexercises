var paragraph = "this is a paragraph of text to use for this exercise";
var words = paragraph.split(' ');
var wordSummary = {};
var count = 0;

for (var i = 0; i < words.length; i++) {
 if (!(words in wordSummary)) {
   var word = words[i];
   wordSummary[word] = 0;
 }
  wordSummary[word] = wordSummary[word] + 1;
 }

for (var word in wordSummary) {
 count = wordSummary[word];
 console.log(word + ": " + count);
}
