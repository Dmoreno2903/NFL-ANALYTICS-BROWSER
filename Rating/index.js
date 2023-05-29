var res = 0;
let  rate = (estrellas) =>
{
  res = estrellas;
  var starElements = document.getElementsByClassName("star");
  for (var i = 0; i < starElements.length; i++) {
    if (i < estrellas) {
      starElements[i].classList.add("selected");
    } else {
      starElements[i].classList.remove("selected");
    }
  }
}

let sendRating = ()=>
{
  if(!res)window.alert("please select a rate");
  else window.confirm("rating sent successfully");
  console.log("Rating send",res);
}