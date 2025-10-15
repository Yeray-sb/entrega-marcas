$(function () {
  $('.mostrar').hide();
  $('#mostrar-index').show();

  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
           ///// FUNCION DE LOS BOTONES ///
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  $(".boton-nav").click(function () {
    // Cambiar estilo del botón activo
    $(".boton-nav").removeClass("btn-primary").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");

    // Mostrar la sección seleccionada
    $(".mostrar").hide();
    $($(this).data("target")).show();
  });

  $('#boton-registrarse').click(function (){
    $(".mostrar").hide();
    $($(this).data("target")).show();
  });
    //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
               ///// BUSCAR EVENTOS ///
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  $("#buscarEvento").on("keyup", function () {
    const texto = $(this).val().toLowerCase();

    $(".evento").each(function () {
      const contenido = $(this).text().toLowerCase();
      $(this).toggle(contenido.includes(texto));
    });
  });
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
                      ///// EMAIL ///
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
$(function(){
  // ✅ Regex para validar solo correos de Gmail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Función reutilizable
  function validarYMostrarModal(formId, emailId, errorId){
    const email = $.trim($('#' + emailId).val() || '');
    
    if(!emailRegex.test(email)){
      $('#' + errorId).show();
      return false;
    } else {
      $('#' + errorId).hide();

      // ✅ Mostrar modal de Bootstrap 5
      const modalEl = document.getElementById('modalGracias'); // sin #
      if(modalEl){
        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();
      }

      // ✅ Limpiar formulario
      const form = document.getElementById(formId);
      if(form) form.reset();

      return true;
    }
  }

  // ✅ Envíos de formularios
  $('#formUsuario').on('submit', function(e){
    e.preventDefault();
    validarYMostrarModal('formUsuario', 'emailUsuario', 'errorEmailUsuario');
  });

  $('#formEmpresa').on('submit', function(e){
    e.preventDefault();
    validarYMostrarModal('formEmpresa', 'emailEmpresa', 'errorEmailEmpresa');
  });

  // ✅ Ocultar mensaje de error al escribir
  $('#emailUsuario').on('input', function(){ $('#errorEmailUsuario').hide(); });
  $('#emailEmpresa').on('input', function(){ $('#errorEmailEmpresa').hide(); });
});




});



