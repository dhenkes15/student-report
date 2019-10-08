var students = [ 
  {
    name: "Jack",
    track: "HTML Basics",
    achievements: 23,
    points: 1278
  },
  {
    name: "Malinda",
    track: "PHP Intermediate",
    achievements: 345,
    points: 12345
  },
  {
    name: "Daniel",
    track: "JavaScript Basics",
    achievements: 389,
    points: 34567
  },
  {
    name: "David",
    track: "CSS Basics",
    achievements: 12,
    points: 4567
  },
  {
    name: "Astro",
    track: "Git Intro",
    achievements: 190,
    points: 1456
  }
];

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