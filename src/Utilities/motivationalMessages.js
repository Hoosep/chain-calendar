export const motivationalMessages = {
  randomQuote
}

let motivationalQuotes = [
  'You can totally do this.',
  'Impossible is for the unwilling',
  'I can and I will',
  'Take the risk or lose the chance',
  'No guts, no story',
  'Screw it. Let\'s do it',
  'Nothing is impossible, the word itself says \'I\'m possible',
  'Yes! Yes! You can do it!',
  'Be happy, be bright. Be you.',
  'You are capable of amazing things.',
  'You are stronger than you think you are.',
  'If you feel like giving up, look back at how far you’ve come.',
  'Never, never, never give up.',
  'Wherever you go, go with all your heart.',
  'You must do the thing you think you cannot do.',
]

function randomQuote(){
  let lengthMotivationalQuotes = motivationalQuotes.length;
  let generateRandomNumber = Math.floor(Math.random()*lengthMotivationalQuotes);

  return motivationalQuotes[generateRandomNumber]
}