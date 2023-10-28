function showName(event) {
  event.preventDefault();
  var name = document.getElementById('fname').value;
  var response = confirm("Do! You mean by Bhupendra jogi?");
  if (response) {
    var popup = window.open("", "Popup Image", "width=500,height=500");
    popup.document.write("<img src='https://imgs.search.brave.com/oKTzDYbes5ZR_0Q38Nj0HZX8TqVSKYxKZ_vX0fOrcoA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmdyZWF0Zm9uLmNv/bS92MS8xZGE2Yzkw/NGRkN2IyYTQzNzZj/Nzg1ODljZDNlMDBk/NS5qcGc'>");
  } else {
    var popup = window.open("", "Popup Image", "width=400,height=300");
    popup.document.write("<img src='https://imgs.search.brave.com/Pbc6deaSswXNVsPzFfiIihaiJ434L8pL3jcUKS4Zx7U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RXpZaTQxMHNhdGtB/QUFBQy9hYXllLWFh/eWVpbi5naWY.gif'>");
  }
}
