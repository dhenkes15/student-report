for (i = 0; i < students.length; i += 1) {
   var name = students[i].name;
   var track = students[i].track;
   var achievements = students[i].achievements;
   var points = students[i].points;
  document.write("<h2> Name: " + name + "</h2>");
  document.write("<p> Track: " + track + "</p>");
  document.write("<p> Achievements: " + achievements + "</p>");
  document.write("<p> Points: " + points + "</p>"); 
}
