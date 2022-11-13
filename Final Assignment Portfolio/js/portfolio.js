function valideForm() {
    let x = document.forms["myForm2"]["Email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// popup form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  