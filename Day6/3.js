
function fibonacciResultUsingFor(n) {
    const series = [0, 1]; 
  
    for (let i = 2; i < n; i++) {
      
      series[i] = series[i - 1] + series[i - 2];
    }
  
    return series;
  }
  
  const position = 100;
  const fibonacciResultUsingFor = fibonacciSeriesUsingFor(position);

  console.log(fibonacciResultUsingFor);
  