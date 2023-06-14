      // Carga la biblioteca de Google Charts
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
  
      // Función para dibujar el gráfico circular
      function drawChart() {
        // Define los datos del gráfico
        var data = google.visualization.arrayToDataTable([
          ['Categoría', 'Porcentaje'],
          ['Pensamiento crítico', 100],
          ['Creatividad', 100],
          ['Colaboración', 100],
          ['Comunicación', 100]
        ]);
  
        // Define las opciones de visualización del gráfico
        var options = {
          title: 'Distribución de habilidades',
          pieHole: 0.4, // Define el tamaño del agujero central del gráfico (opcional)
          slices: {
            0: { color: '#FFA500' }, // Pensamiento crítico - Naranja
            1: { color: '#008000' }, // Creatividad - Verde
            2: { color: '#FFC0CB' }, // Colaboración - Rosa
            3: { color: '#0000FF' }  // Comunicación - Azul
          }
        };
  
        // Crea una instancia del gráfico circular y dibújalo en el elemento con el ID "chart_div"
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  
        // Manejar el evento de selección del gráfico
        google.visualization.events.addListener(chart, 'select', selectHandler);
  
        // Dibuja el gráfico
        chart.draw(data, options);
  
        // Función para manejar el evento de selección del gráfico
        function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
            var category = data.getValue(selectedItem.row, 0);
            alert('Seleccionaste: ' + category);
          }
        }
      }