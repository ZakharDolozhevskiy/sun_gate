define (require) ->

  Parser = require('src/SQLEngine/ParserPatterns')

  describe 'Pattern constructor should be defined', ->
    it 'should be defined', ->
      expect(Parser).toBeDefined()

    describe 'Parsing process', ->
      pars = null

      beforeEach ->
        pars = new Parser

      it 'should have parse method', ->
        expect(pars.parse).toEqual jasmine.any(Function)

      it 'should be able to parse simply query', ->
        res = pars.parse 'SELECT * FROM users'

        expect(res).toEqual
          select:
            columns: '*'
            from: 'users'

      it 'should be able to parse query with specified parameters', ->
        res = pars.parse 'SELECT users.name FROM users'

        expect(res).toEqual
          select:
            columns: [
              {
                table: 'users'
                columns: 'name'
              }
            ]

            from: 'users'

      it 'should be able to parse query with list of specified parameters', ->
        res = pars.parse 'SELECT movies.title, movies.id FROM movies'

        expect(res).toEqual
          select:
            columns: [
              {
                table: 'movies'
                columns: 'title'
              },
              {
                table: 'movies'
                columns: 'id'
              }
            ]
            from: 'movies'

      it 'should be able to parse simply JOIN query', ->
        res = pars.parse 'JOIN movies ON movies.id = users.id'

        expect(res).toEqual
          join:
            table: 'movies'
            columns:
              left:
                table: 'movies'
                column: 'id'
              right:
                table: 'users'
                column: 'id'
