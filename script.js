function showName(event) {
  event.preventDefault();
  var name = document.getElementById('fname').value;
  var response = confirm("Do! You mean by Bhupendra jogi?");
  if (response) {
    var popup = window.open("", "Popup Image", "width=500,height=500");
    popup.document.write("<img src='https://media.tenor.com/Kban6Yqt6Q4AAAAM/bhupendra-jogi-bjp.gif'>");
  } else {
    var popup = window.open("", "Popup Image", "width=400,height=300");
    popup.document.write("<img src='https://media.tenor.com/98WghF_OSr0AAAAC/bihar-student-student.gif'>");
  }
}
