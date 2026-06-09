import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.


function calcularTotal (ID_ARTISTA: string, cantidad: number, codigoDescuento: string): number {
  
  let precio: number = 0;

  
  if (ID_ARTISTA === "sabrina"){
    precio = 1000;
  }
  else if (ID_ARTISTA === "kgatlw"){
    precio = 700;
  }
  else if (ID_ARTISTA === "lali"){
    precio = 500;
  }
  else if (ID_ARTISTA === "magdalena"){
    precio = 600;
  }
  else if (ID_ARTISTA === "viagra"){
    precio = 400;
  }
  else if (ID_ARTISTA === "dillom"){
    precio = 350;
  }
  else if (ID_ARTISTA === "marilina"){
    precio = 200;
  }
  else if (ID_ARTISTA === "mugre"){
    precio = 150;
  }
  else {
    precio = 0;
  }


  if (codigoDescuento === "TIC10"){
    precio = (precio * cantidad) * 0.9
  }
  else if (codigoDescuento === "TIC20"){
    precio = (precio * cantidad) * 0.8
  }
  else if (codigoDescuento === "DARIO"){
    precio = (precio * cantidad) * 0.5
  }
  else {
    precio = precio * cantidad
  }

  return (precio);
}


cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
