$(document).ready(function() {
  $('form').on('submit', function(event) {
    var nombre = $('#nombre').val();
    var cedula = $('#cedula').val();
    var telefono = $('#telefono').val();

    if ($('#nombre').hasClass('is-invalid') || $('#cedula').hasClass('is-invalid') || $('#telefono').hasClass('is-invalid')) {
      event.preventDefault();
      alert('Por favor corrija los campos marcados en rojo');
    }
  });

  // Validación del campo nombre
  $('#nombre').on('input', function() {
    var nombre = $(this).val();
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
      $(this).addClass('is-invalid');
      $('#nombre-invalid').text('Solo letras de la A-Z seguido de espacios').css('color', 'red');
    } else {
      $(this).removeClass('is-invalid');
      $('#nombre-invalid').empty();
    }
  });

  // Validación del campo cédula
  $('#cedula').on('input', function() {
    var cedula = $(this).val();
    if (!/^\d+$/.test(cedula)) {
      $(this).addClass('is-invalid');
      $('#cedula-invalid').text('Solo números').css('color', 'red');
    } else {
      $(this).removeClass('is-invalid');
      $('#cedula-invalid').empty();
    }
  });

  // Validación del campo teléfono
  $('#telefono').on('input', function() {
    var telefono = $(this).val();
    if (!/^\d{0,10}$/.test(telefono)) {
      $(this).addClass('is-invalid');
      $('#telefono-invalid').text('Máximo 10 dígitos').css('color', 'red');
    } else {
      $(this).removeClass('is-invalid');
      $('#telefono-invalid').empty();
    }
  });
});
