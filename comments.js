//crie uma função para receber dois valores e retornar a divisão deles
function divisao(a, b) {
  return a / b;
}

function increaseSalary(salary) {
    return salary * 1.5;
}

//create web server
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Server created using Node.js</h1>');
  res.write('<h2>Divisão de 10 por 2 é: ' + divisao(10, 2) + '</h2>');
  res.write('<h2>Salário com aumento de 50%: ' + increaseSalary(1000) + '</h2>');
  res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080');