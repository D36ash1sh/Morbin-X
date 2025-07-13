// Morse Dictionary
const morseCode = {
  A: ".-",     B: "-...",   C: "-.-.",   D: "-..",    E: ".",
  F: "..-.",   G: "--.",    H: "....",   I: "..",     J: ".---",
  K: "-.-",    L: ".-..",   M: "--",     N: "-.",     O: "---",
  P: ".--.",   Q: "--.-",   R: ".-.",    S: "...",    T: "-",
  U: "..-",    V: "...-",   W: ".--",    X: "-..-",   Y: "-.--",
  Z: "--..",

  0: "-----",  1: ".----",  2: "..---",  3: "...--",  4: "....-",
  5: ".....",  6: "-....",  7: "--...",  8: "---..",  9: "----.",

  ".": ".-.-.-",   ",": "--..--",   "?": "..--..",   "'": ".----.",
  "!": "-.-.--",   "/": "-..-.",    "(": "-.--.",    ")": "-.--.-",
  "&": ".-...",    ":": "---...",   ";": "-.-.-.",   "=": "-...-",
  "+": ".-.-.",    "-": "-....-",   "_": "..--.-",   "\"": ".-..-.",
  "$": "...-..-",  "@": ".--.-.",   " ": "/"
};
// Binary Dictionary
const binaryCode = {
  A: "01000001", B: "01000010", C: "01000011", D: "01000100", E: "01000101",
  F: "01000110", G: "01000111", H: "01001000", I: "01001001", J: "01001010",
  K: "01001011", L: "01001100", M: "01001101", N: "01001110", O: "01001111",
  P: "01010000", Q: "01010001", R: "01010010", S: "01010011", T: "01010100",
  U: "01010101", V: "01010110", W: "01010111", X: "01011000", Y: "01011001",
  Z: "01011010",

  a: "01100001", b: "01100010", c: "01100011", d: "01100100", e: "01100101",
  f: "01100110", g: "01100111", h: "01101000", i: "01101001", j: "01101010",
  k: "01101011", l: "01101100", m: "01101101", n: "01101110", o: "01101111",
  p: "01110000", q: "01110001", r: "01110010", s: "01110011", t: "01110100",
  u: "01110101", v: "01110110", w: "01110111", x: "01111000", y: "01111001",
  z: "01111010",

  "0": "00110000", "1": "00110001", "2": "00110010", "3": "00110011",
  "4": "00110100", "5": "00110101", "6": "00110110", "7": "00110111",
  "8": "00111000", "9": "00111001",

  " ": "00100000", "!": "00100001", ".": "00101110", ",": "00101100",
  "?": "00111111", "'": "00100111", '"': "00100010", "-": "00101101",
  ":": "00111010", ";": "00111011", "(": "00101000", ")": "00101001",
  "@": "01000000", "#": "00100011", "/": "00101111"
};
//Reversing Morse-code
const reversedMorseCode = {};
for(const key in morseCode){
    if(morseCode.hasOwnProperty(key)){
        const morseValue = morseCode[key];
        reversedMorseCode[morseValue] = key;
    }
}
//Reversing Binary-code
const reversedBinaryCode = {};
for(const key in binaryCode){
    if(binaryCode.hasOwnProperty(key)){
        const binaryValue = binaryCode[key];
        reversedBinaryCode[binaryValue] = key;
    }
}
//selection
const inputField = document.getElementById("inputbox");

const convertFrom = document.getElementById("ConvertFrom");
const convertTo = document.getElementById("ConvertTo");



const ConvertButton = document.getElementById("ConvertBtn")
const OutputArea= document.getElementById("outputText")


ConvertButton.addEventListener("click",()=>{
      const from = convertFrom.value.toLowerCase(); 
      const to = convertTo.value.toLowerCase(); 
    const inputText = inputField.value.trim().toUpperCase();

    
    if(inputText === ""){
        OutputArea.textContent = "Even Morbius can’t convert emptiness 🧛‍♂️";
        return;
    } 

   //morse to text 
    if(from === "morse" && to ==="text"){
    
    const morseWords = inputText.split("/");
    const translatedWords = morseWords.map (morseWord => {
        const morseChars = morseWord.trim().split(" ");
        return morseChars.map(char => reversedMorseCode[char] || "" ).join("");
    });
    OutputArea.textContent = translatedWords.join(" ");
    const morseChars = inputText.trim().split(" ");
    const invalid = morseChars.find(char => !(char in reversedMorseCode));
    if(invalid){
     OutputArea.textContent = `Invalid Morse code Please check your spacing.`;
    return;
}
}

//morse to binary
if (from === "morse" && to === "binary") {
    // Step 1: Convert Morse to Text
    const morseWords = inputText.split("/");
    const translatedWords = morseWords.map(morseWord => {
        const morseChars = morseWord.trim().split(" ");
        return morseChars.map(char => reversedMorseCode[char] || "").join("");
    });
    const textResult = translatedWords.join(" ");

    // Step 2: Convert Text to Binary
    const binaryResult = textResult.split("").map(char => binaryCode[char] || "").join(" ");
    OutputArea.textContent = binaryResult;
}

if(from ==="morse" && to === "morse"){
       OutputArea.textContent = "Morbius is impressed. You morbed Morse into more Morse 🧛‍♂️";


}



// text to binary

   if (from === "text" && to === "binary") {
    const inputChars = inputText.split(""); // Split text into characters
    const binaryResult = inputChars.map(char => binaryCode[char] || "").join(" ");
    OutputArea.textContent = binaryResult;
}



// text to morse

    if (from === "text" && to === "morse") {
    const inputChars = inputText.split(""); // Split text into characters
    const morseResult = inputChars.map(char => morseCode[char] || "").join(" ");
    OutputArea.textContent = morseResult;
}


// text to text

if(from ==="text" && to === "text"){
        OutputArea.textContent = "Attempting to convert text into text... bruh moment achieved.";

}


//binary to text

 if (from === "binary" && to === "text") {
    const binaryChars = inputText.trim().split(" ");
    
    // Check for invalid binary codes
    const invalid = binaryChars.find(char => !(char in reversedBinaryCode));
    if (invalid) {
        OutputArea.textContent = `Invalid Binary code: "${invalid}"`;
        return;
    }

    // Convert valid binary to text
    const translatedText = binaryChars.map(char => reversedBinaryCode[char]).join("");
    OutputArea.textContent = translatedText;
}

// binary to morse
if (from === "binary" && to === "morse") {
    const binaryChars = inputText.trim().split(" ");

    // Check for invalid binary codes
    const invalid = binaryChars.find(char => !(char in reversedBinaryCode));
    if (invalid) {
        OutputArea.textContent = `Invalid Binary code: "${invalid}"`;
        return;
    }

    //Convert binary to text
    const text = binaryChars.map(char => reversedBinaryCode[char]).join("").toUpperCase();

    //Convert text to Morse
    const morse = text.split("").map(char => morseCode[char] || "").join(" ");
    OutputArea.textContent = morse;
}
if(from ==="binary" && to === "binary"){
OutputArea.textContent = "Binary to binary? Even your computer rolled its eyes.";

}

});



