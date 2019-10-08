
while (true) {
  var response = prompt("Type a name to receive the student's report card or quit to exit");
  response.toLowerCase();
  if ( response === quit ) {
    break;
  } else {
    for (i = 0; i < students.length; i += 1) {
    var name = students[i].name;
    name.toLowerCase();
    var track = students[i].track;
    var achievements = students[i].achievements;
    var points = students[i].points;
      if (name === response) {
        document.write("<h2> Name: " + students[i].name + "</h2>");
        document.write("<p> Track: " + track + "</p>");
        document.write("<p> Achievements: " + achievements + "</p>");
        document.write("<p> Points: " + points + "</p>");
      }
    }
  }
}