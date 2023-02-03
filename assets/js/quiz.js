let question1 = "Do you like extending your nails or natural looking nails?";
let option1 = "fake tips";
let option2 = "natural looking nails";

let response = prompt(question1 + '\n' + option1 + '\n' + option2);

if (response === option1) {
  let question2 = 'Do you like a fancy design or a simple one?';
  let option1 = 'fancy';
  let option2 = 'simple';
  
  response = prompt(question2 + '\n' + option1 + '\n' + option2);

  if (response === option1) {
    console.log("You should book Design X Pro Extensions Full Nail Art");
  } else {
    console.log("You should book Design X Pro Extensions Basic Nail Art.");
  }
} else {
  let question2 = "Are you happy with your nail length or are you trying to grow them?";
  let option1 = 'happy';
  let option2 = 'grow';
  
  response = prompt(question2 + '\n' + option1 + '\n' + option2);

if (response === option1) {
  let question3 = 'Do you like a fancy design or a simple one?';
  let option1 = 'fancy';
  let option2 = 'simple';
  
  response = prompt(question3 + '\n' + option1 + '\n' + option2);

  if (response === option1) {
    console.log("You should book Gel Polish Manicure Full Nail Art.");
  } else {
    console.log("You should book Gel Polish Manicure Basic Nail Art");
  }
  }

if (response === option2) {
  let question4 = 'Do you like a fancy design or a simple one?';
  let option1 = 'fancy';
  let option2 = 'simple';
  
  response = prompt(question4+ '\n' + option1 + '\n' + option2);

  if (response === option2) {
    console.log("You should book BIAB Full Nail Art.");
  } else {
    console.log("You should book BIAB Basic Nail Art");
  }
  }
}
