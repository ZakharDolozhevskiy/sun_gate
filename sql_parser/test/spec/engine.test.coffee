define (require) ->

  Core = require('src/SQLEngine/Engine')

  describe 'Application Core', ->
    engine = null
    sql_db = null

    beforeEach ->
      engine = new Core.Engine
      sql_db = new Core.SQL_DB

    it 'Engine constructor should be define', -> expect( engine ).toBeDefined()

    it 'Engine constructor should be define', -> expect( sql_db ).toBeDefined()

    describe 'Set DB', ->


