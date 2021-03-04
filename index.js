const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu HTML</title>
</head>
<body style="background-color: darkslateblue;">
    <h1>Teste</h1>

    <div style="background-color: aqua;">
        <table border="2" align="center">
            <th>Título 1</th>
            <th>Título 2</th>
            <th>Título 3</th>
            <tr>
                <td>Teste 1</td>
                <td>Teste 2</td>
                <td>Teste 3</td>
            </tr>
        </table>
    </div>
    <hr>
<div style="background-color: cornflowerblue;">
    <table border="2" width="50%" align="center">
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
        <tr>
            <td>Teste 1</td>
            <td>Teste 2</td>
            <td>Teste 3</td>
            
        </tr>
        <tr>
            <td colspan="3" align="center"><img src="user.gif" alt="Fail"></td>
        </tr>
    </table>
</div>

</body>
</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});