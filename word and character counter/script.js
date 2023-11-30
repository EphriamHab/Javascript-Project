let inputText = document.getElementById('inputText');
let analyzeBtn = document.getElementById('analyzeBtn');
let spanWord = document.getElementById('wordCount');
let spanChar = document.getElementById('charCount');
let spanAverage = document.getElementById('averageLength');


document.addEventListener('DOMContentLoaded',function(){
    analyzeBtn.addEventListener('click',analyzeText);
});

analyzeBtn.addEventListener('click',analyzeText);
function analyzeText(){
  const textValue = inputText.value;
  const wordCount = textValue.trim().split(/\s+/).length;
  const charCount = textValue.length;
  let totalwordlength = 0;

  textValue.trim().split(/\s+/).forEach(word => {
    totalwordlength += word.length;
  });
  const averageLength = totalwordlength / wordCount;
  spanWord.textContent = wordCount;
  spanChar.textContent = charCount;
  spanAverage.textContent = averageLength.toFixed(2);

}