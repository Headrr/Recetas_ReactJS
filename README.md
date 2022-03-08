## Proyecto Final - React JS
#### Curso React JS - Escalab
####
**CookApp:**
*La aplicación con las mejores recetas.*
###
### Descripción del proyecto:
La aplicación permite ingresar a un grupo de las mejores recetas. En su vista previa incluye una imagen del plato con una serie de etiquetas que permiten caracterizarla, como lo son: país de origen (con su respectiva bandera que lo representa en el lado superior derecho de la tarjeta que presenta la receta), tipo de comida, porciones, tiempo de preparación, descripción genérica del plato, además de un botón de “Dar me gusta”. Cada receta en su vista principal dispone de la misma información que se encuentra en su vista previa, con la diferencia de que aquí aparece la información completa con el paso a paso para realizar la preparación, y en la parte inferior de la imagen del plato están los diferentes ingredientes con las cantidades que se utilizan para cocinar esta misma. Los botones de acción que permiten acceder a los distintos segmentos que se encuentran en esta aplicación son los siguientes:
* Recetas: nos lleva al home de la app donde se encuentran las preparaciones agrupadas en su vista previa.
*	Dar me gusta: botón que se encuentra en la vista previa dentro de la tarjeta de la receta y permite guardar las recetas seleccionadas.
*	Mis me gusta: abre una vista donde se agrupan las recetas guardadas a través del botón “Dar me gusta”.
*	Ver receta: con este botón se abre la vista principal de una receta en específico en donde se muestra la información completa de cada una.

### Data:
* API de recetas propias desplegada en Heroku
* Endpoint base: https://backend-recetas.herokuapp.com/

### Métodos
* Obtener todas las recetas: https://backend-recetas.herokuapp.com/recetas
* Obtener detalles de una receta: https://backend-recetas.herokuapp.com/recetas/{id}
* Consideración: el id de recetas puede tomar un valor entre 0 y 7

### Patrón de arquitectura utilizado: Por contextos o parcelas
#### * Manejador de estado global de la aplicación: Context API + Hooks
![Image text](https://res.cloudinary.com/as-del-sur/image/upload/v1646700022/Cursos%20Y%20Certificaciones/g091ikdy5mwxxse0wfl4.png)

### Patrones de diseño empleados en el proyecto:
![Image text](https://res.cloudinary.com/as-del-sur/image/upload/v1646699697/Cursos%20Y%20Certificaciones/h7btpyjyal97cwy9pgfr.png)

### Principales dependencias
* Estilos (UI): reactstrap / materialUI.
* Iconos: react-feather.
* Router: react-router-dom.
* Banderas (iconos): country-flag-icons.

#### Dependencias de desarrollo
* @babel/core => Ecosistema de babel core.
* @babel/preset-env => Para adecuarlo a nuestro entorno de trabajo.
* @babel/preset-react => Para adecuarlo a nuestra tecnología (react).
* @svgr/webpack => Archivos svgr se deben cargar y procesar por medio de webpack.
* babel-loader => Definiciones con babel core deben ser cargadas hacia webpack con el loader.
* copy-webpack-plugin => Para trabajar con plugins.
* core-js => Para hacer una inyección con js al index.
* css-loader => Loader para cargar los css.
* favicons-webpack-plugin => Para manejar favicons generados en el build.
* file-loader => Para cargar archivos un file loader.
* html-webpack-plugin => Para manejar el html que se va a generar.
* image-webpack-loader => Integrar un image webpack loader (para varios recursos).
* prettier => Formatear archivos de webpack y babel con formatos de prettier.
* sass-loader => Loader para cargar los sass.
* style-loader => Loader para cargar los estilos.
* webpack => Instalación de webpack.
* webpack-cli => Command Line Interface para correr instrucciones de webpack.
* webpack-dev-server => Para levantar un servidor de desarrollo.
