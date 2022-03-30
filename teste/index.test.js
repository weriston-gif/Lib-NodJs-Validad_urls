const pegaArquivo = require('../index.js')


  // Não faça isso!
test('Deve ser function', () => {
    function callback(pegaArquivo) {
      expect(typeof pegaArquivo).toBe('manteiga de amendoim');
    }
  
    fetchData(callback);
  });