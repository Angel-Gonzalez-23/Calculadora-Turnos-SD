function calcularTurno(fechaInicial, turnoInicial, fechaObjetivo) {
    const turnos = ["A11", "A10", "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1"];
    // const turnosagentes = [{
    //   Agente: "Angel",
    //   Turno: 8
    // }]
    // Ajustar fechaInicial al lunes de la semana en que se encuentra
    const diaSemanaInicial = fechaInicial.getDay();
    const offsetInicial = (diaSemanaInicial === 0) ? 1 : 1 - diaSemanaInicial; // Ajuste para llegar al lunes
    fechaInicial.setDate(fechaInicial.getDate() + offsetInicial);
    // Ajustar fechaObjetivo al lunes de la semana en que se encuentra
    const diaSemanaObjetivo = fechaObjetivo.getDay();
    const offsetObjetivo = (diaSemanaObjetivo === 0) ? 1 : 1 - diaSemanaObjetivo; // Ajuste para llegar al lunes
    fechaObjetivo.setDate(fechaObjetivo.getDate() + offsetObjetivo);
    // Calcular la diferencia en semanas
    const msPorDia = 24 * 60 * 60 * 1000;
    const diasDiferencia = Math.floor((fechaObjetivo - fechaInicial) / msPorDia);
    const semanasDiferencia = Math.floor(diasDiferencia / 7);
    // Calcular el índice del turno inicial
    let indiceTurno = turnos.indexOf(turnoInicial);
    // Calcular el índice del turno en la fecha objetivo
    indiceTurno = (indiceTurno + semanasDiferencia) % turnos.length;
    return turnos[indiceTurno];
}

window.onload = function(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fechaInicial').value=ano+"-"+mes+"-"+dia;
  }
   function mostrarTurno() {
    const fechaInicial = new Date(document.getElementById('fechaInicial').value);
    const turnoInicial = document.getElementById('turnoInicial').value;
    const fechaObjetivo = new Date(document.getElementById('fechaObjetivo').value);
    //Limpia el modal para que no se acumulen los mensajes
    const divModal = document.getElementById("divmodal");
    divModal.innerHTML = ''; 
    if (document.getElementById('fechaObjetivo').value == '' || document.getElementById('fechaObjetivo').value == undefined) {
      let response = document.createElement("p");
      response.textContent = "Fecha Objetivo no puede ser vacio"
      document.getElementById("divmodal").appendChild(response);
      console.log(document.getElementById('fechaObjetivo').value);
      return
    } 
    const turnoEnFechaObjetivo = calcularTurno(fechaInicial,turnoInicial,fechaObjetivo);
    let response = document.createElement("p");
    response.textContent = `El turno a partir de la semana ${fechaObjetivo.toLocaleDateString()} será: ${turnoEnFechaObjetivo}`;
    document.getElementById("divmodal").appendChild(response);
//     document.getElementById('resultado').innerText = `El turno a partir de la fecha (considerando el lunes como primer dia) ${fechaObjetivo.toLocaleDateString()} será: ${turnoEnFechaObjetivo}`;
}

function vaciar() {
  let response = document.createElement("p");
      response.textContent = ""
      document.getElementById("divmodal").appendChild(response);
}