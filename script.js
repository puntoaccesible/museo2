let tamanoActual = 16;

// Función auxiliar segura para activar la vibración en celulares soportados
function dispararHaptica(patron) {
    if ("vibrate" in navigator) {
        navigator.vibrate(patron);
    }
}

function cambiarContraste() {
    document.body.classList.toggle('alto-contraste');
    // Pulso doble rápido: confirma el cambio de contraste para baja visión
    dispararHaptica([50, 30, 50]);
}

function modificarTexto(valor) {
    if ((tamanoActual + valor) >= 12 && (tamanoActual + valor) <= 32) {
        tamanoActual += valor;
        document.documentElement.style.setProperty('--fuente-tamano', tamanoActual + 'px');
        // Pulso doble rápido: confirma que la letra subió o bajó de tamaño
        dispararHaptica([50, 30, 50]);
    }
}

function restablecer() {
    tamanoActual = 16;
    document.documentElement.style.setProperty('--fuente-tamano', '16px');
    document.body.classList.remove('alto-contraste');
    // Tres pulsos cortos sucesivos: alerta de que el sistema volvió al inicio
    dispararHaptica([40, 40, 40, 40, 40]);
}
<!-- 🖼️ CONTENEDOR DE LA ESTACIÓN (Módulo de Navegación Háptica) -->
  <section class="modulo-sala" aria-live="polite">
   
    <!-- Aviso visual y auditivo de inicio -->
    <div class="instruccion-inicio">
      <small class="etiqueta-guia">PUNTO INCLUYENTE</small>
      <p class="nota-interaccion">👇 Toca cualquier parte de la pantalla para activar el audio de la guía.</p>
    </div>

    <!-- Los textos de aquí abajo cambiarán solos al presionar "Siguiente Obra" -->
    <article class="tarjeta-obra">
      <h1 id="titulo-obra" class="titulo-dinamico">Obra 1: El Vínculo del Arte Universal</h1>
     
      <p id="cedula-obra" class="texto-cedula" style="font-size: var(--fuente-tamano, 16px);">
        Esta pieza representa la unión de los canales sensoriales mediante relieves geométricos. Explora la textura con tus manos de izquierda a derecha de forma libre.
      </p>
    </article>

    <!-- 🎭 CONTENIDOS MULTIMEDIA ADAPTATIVOS -->
    <div class="bloque-multimedia">
      <button class="btn-media" id="btn-audio" aria-label="Reproducir audiodescripción completa de la obra">
        🔵 Activar Audiodescripción
      </button>
      <button class="btn-media" id="btn-lsm" aria-label="Desplegar video en Lengua de Señas Mexicana">
        🟢 Ver Guía en LSM
      </button>
    </div>

    <!-- ➡️ EL BOTÓN CRAVE: Salto Secuencial de la Sala -->
    <footer class="pie-navegacion">
      <button id="btn-siguiente" class="btn-siguiente" aria-label="Avanzar a la siguiente pieza de la sala">
        Ir a la Siguiente Obra ➡️
      </button>
    </footer>

  </section>
</main>
