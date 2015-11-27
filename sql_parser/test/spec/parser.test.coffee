define (require) ->

  parser = require('src/SQLEngine/Parser')

  describe 'Parser', ->

    it 'should be define', -> expect( parser ).toBeDefined()