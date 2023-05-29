let executeRating = ()=> window.location.href = '../Rating/rating.html';

console.log(jugadores);
let renderizar = () =>
{
  console.log(jugadores);
  const head = document.getElementById("table-head");
  const body = document.getElementById("table-body");
  const filaHead = document.createElement("tr");
  const playerHead =  document.createElement("td");
  playerHead.textContent = jugadores[0]?.stats[0];
  filaHead.appendChild(playerHead);
  playerHead.className = "player";
  jugadores[0].stats.slice(1).map((item)=>
  {
    const celda = document.createElement("td");
      celda.className = "celda";
      celda.textContent = item;
    filaHead.appendChild(celda);
  });
  head.appendChild(filaHead);
  jugadores?.slice(1)?.map((item) =>
  {
    const filaBody = document.createElement("tr");
    const player = document.createElement("td");
    player.className = "player";
    const divContenedor = document.createElement("div");
    divContenedor.className = "contenedor-player";
    const img = document.createElement("img");
    img.src = item.foto;
    img.width = 40;
    img.height = 40;
    divContenedor.appendChild(img);
    const span = document.createElement("span");
    span.textContent = item.nombre;
    divContenedor.appendChild(span);
    player.appendChild(divContenedor);
    filaBody.appendChild(player);
    for(key in item.estadisticas)
    {
      const celda = document.createElement("td");
      celda.textContent = item.estadisticas[key];
      celda.className = "celda";
      filaBody.appendChild(celda);
    }
    body.appendChild(filaBody);
  }
  );
}
window.onload = ()=> renderizar();


