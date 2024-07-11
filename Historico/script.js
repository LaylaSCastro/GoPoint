document.addEventListener('DOMContentLoaded', function() {
    const monthSelect = document.querySelector('select');

    monthSelect.addEventListener('change', function() {
        if (monthSelect.value === 'Selecionar mês') {
            alert('Selecione um mês!');
        } else if(select == 'Janeiro'){
            ConverterCelsius()
        } else if(select == 'Fevereiro'){
            ConverterFahrenheit()
        } else if(select == 'Março'){
            ConverterKelvin()
        } else if(select == 'Abril'){
          ConverterCelsius()
        } else if(select == 'Maio'){
          ConverterFahrenheit()
        } else if(select == 'Junho'){
          ConverterKelvin()
        } else if(select == 'Julho'){
          ConverterCelsius()
        } else if(select == 'Agosto'){
          ConverterFahrenheit()
        } else if(select == 'Setembro'){
          ConverterKelvin()
        } else if(select == 'Outubro'){
          ConverterCelsius()
        } else if(select == 'Novembro'){
          ConverterFahrenheit()
        } else if(select == 'Dezembro'){
          ConverterKelvin()
        }
    });
});