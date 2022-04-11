function scuberGreetingForFeet(number){
  if (number <= 400){
    return "This one is on me!";
  } else if (400 < number, number < 2000){
    return "That will be twenty bucks.";
  } else if (2000 < number, number < 2500){
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// console.log(scuberGreetingForFeet(55555));

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

console.log(switchOnCharmFromTip("sup"));