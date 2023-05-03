'use strict';
		const squares = document.querySelectorAll('td');
		const simbolos = ['✗', '◯'];
		let turnoActual = 0;
		
		function verificarGanador(simbolo) {
			const combinacionesGanadoras = [
				[0,1,2], [3,4,5], [6,7,8], 
				[0,3,6], [1,4,7], [2,5,8], 
				[0,4,8], [2,4,6]
			];
			for (let i = 0; i < combinacionesGanadoras.length; i++) {
				const [a,b,c] = combinacionesGanadoras[i];
				if (squares[a].innerHTML == simbolo && squares[b].innerHTML == simbolo && squares[c].innerHTML == simbolo) {
					return true;
				}
			}
			return false;
		}
		
		for (let i = 0; i<squares.length; i++) {
			squares[i].onmouseover = function(event){
				squares[i].style.backgroundColor = "red";
				squares[i].style.opacity= 0.5;
			};
			squares[i].onmouseleave = function(event){	
				squares[i].style.backgroundColor = "white";
				squares[i].style.opacity= 1;
			};
			squares[i].onclick = function(event) {
				if (squares[i].innerHTML == '') {
					squares[i].innerHTML= simbolos[turnoActual];
					if (verificarGanador(simbolos[turnoActual])) {
						for (let x = 0; x<squares.length; x++) {
							squares[x].innerHTML = ''
						}
      					alert(`¡El jugador ${simbolos[turnoActual]} ha ganado!`);
    				}
					if (turnoActual==0) {
						squares[i].style.color="greenyellow";
						turnoActual=1;
					} else {
						squares[i].style.color="aqua";
						turnoActual=0;
					}
					document.getElementById("turno").innerHTML = "Turno de " + simbolos[turnoActual];
				}
			}
		};