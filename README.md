# NLW#4 Back-end Node.JS

## Metodo GET, POST, DELETE, PUT, PATCH

 * GET => Buscar
 * Post => Salvar
 * PUT => Alterar 
 * DELETE => Deletar
 * PATCH => Alteração específica

## Rotas

  // 1 param => Rota(Recurso API)
  // 2 param => request, response
app.post('/', (request, response) => {
  // receber os dados para salvar
  return response.json({ message: 'Os dadosforam salvos com sucesso!' })
})# api
