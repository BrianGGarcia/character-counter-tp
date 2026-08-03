# Character Counter UTN
## Brian Gabriel Garcia

Este proyecto es una adaptacion de un trabajo anterior que habia realizado solamente con **HTML y CSS**, sin funcionalidades.

La version original era unicamente una maqueta visual. En este nuevo proyecto tuve que pasar ese diseño a **React** y agregarle distintas funciones, como el conteo de caracteres, palabras y oraciones, el limite de caracteres y la visualizacion de la cantidad y porcentaje de cada letra; todo esto realizado en clase.

## Adaptacion del proyecto anterior

Para reutilizar el diseño viejo, tuve que adaptar principalmente el archivo CSS al nuevo proyecto.

Como ahora la aplicacion está dividida en componentes de React, agregue distintas clases a los elementos y componentes para poder aplicar los estilos que ya tenia. Tambien tuve que modificar algunas medidas, espacios y distribuciones para que el diseño funcionara correctamente con el contenido dinamico.

El proyecto mantiene el formato de una tarjeta principal sobre un fondo. Por este motivo, cambiar solamente el color de un componente no era suficiente para implementar el tema claro y oscuro.

## Implementacion del tema

Para mejorar el cambio de tema, tuve que aprender a utilizar mejor **Context** en React.

Cree un contexto para guardar y compartir el tema seleccionado dentro de la aplicación. También utilice `useEffect()` para agregar o quitar una clase en el elemento principal del documento y guardar la preferencia del usuario en `localStorage`.

De esta manera, el tema cambia tanto el fondo de la página como el color de la tarjeta, los textos, los bordes, el area de escritura y otros elementos de la interfaz.

## Cambios visuales

Los cambios visuales con respecto al diseño anterior fueron pocos y simples.

Principalmente ajuste:

- Los colores de los temas claro y oscuro.
- El contraste de algunos textos.
- El boton para cambiar el tema.
- Las barras que muestran el porcentaje de cada letra.
- La adaptacion del diseño para dispositivos moviles.
- Algunos espacios, tamaños y bordes para mejorar la lectura.