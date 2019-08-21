var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to   :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin",
               "Big Daddy",
               "Father Christmas"];

var insertY = ["the soup kitchen",
               "Disneyland",
               "the White House"];

var insertZ = ["spontaneously combusted",
               "melted into a puddle on the sidewalk",
               "turned into a slug and crawled away"];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {
  //creates a variable with the original story
  var newStory = storyText;
  //generates three random elements to be added to the oringal story
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  //replaces the story placeholders with the three random elements
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  //checks for form entry and replaces Bob with a custom name
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
  }
  //checks for radio button selection and executes UK conversion
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }
  //adds the new story to the paragraph element and refreshes
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
