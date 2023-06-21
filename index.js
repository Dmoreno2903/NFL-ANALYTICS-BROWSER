
var modal = document.getElementById("myModal");
var img = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];
var direcciones = [
    "./AdminData/admin_data.html",
    "./UserFilters/user_filters.html",
    "./DataFrame/data_frame.html",
    "./Rating/rating.html",
    "./Images/data.png",
    "./Images/match.png",
    "./Images/team.png",
    "./Images/player.png",
    "./Images/rushing.png",
    "./Images/passing.png",
    "./Images/kicking.png",
    "./Images/defense.png",
    "./Images/receiving.png",
    "./Images/scoring.png",
    "./Images/returning.png",
    "./Images/punting.png",
    "./Images/user.png",
    "./Images/filter.png",
    "./Images/query.png",
    "./Images/rating2.png",
    "./Images/dataFrame.png",
    "./Images/dbAdmin.png",
    "./Images/developing.png",
    "./Images/improving.png",
    "./Images/managing.png",
    "./Images/increasing.png",
    "./Images/takingcare.png",
]
let handleClick = id => 
{
  console.log(id);
    if(id<4)
    {
        window.location.href = direcciones[id];
    }else
    {
        modal.style.display = "block";
        img.src = direcciones[id]; 
    }

}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

