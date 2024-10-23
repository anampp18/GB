// Importo la función 'platformBrowserDynamic' desde '@angular/platform-browser-dynamic'.
// Esta función es la que me permite arrancar mi aplicación Angular en un navegador.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importo el 'AppModule', que es el módulo raíz de mi aplicación.
// Aquí es donde se declara y configura todo lo esencial para que mi aplicación funcione.
import { AppModule } from './app/app.module';

// Utilizo 'platformBrowserDynamic()' para arrancar el módulo principal de Angular en el navegador.
// Estoy indicando que quiero iniciar mi aplicación usando 'AppModule'.
platformBrowserDynamic().bootstrapModule(AppModule, {
  // Activando la coalescencia de eventos para optimizar el rendimiento en Angular.
 // agrupo múltiples eventos del DOM en una sola ejecución, 
  // lo que hace que la aplicación funcione de manera más eficiente.
  ngZoneEventCoalescing: true
})
// Si algo sale mal al iniciar la aplicación, atrapo el error y lo muestro en la consola.
  .catch(err => console.error(err));
