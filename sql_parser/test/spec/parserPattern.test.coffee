define (require) ->

  Parser = require('src/SQLEngine/ParserPatterns')

  describe 'Patterns', ->
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
                column: 'name'
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
                column: 'title'
              },
              {
                table: 'movies'
                column: 'id'
              }
            ]
            from: 'movies'

      it 'should be able to parse simply JOIN query', ->
        res = pars.parse 'JOIN movies ON movies.id = users.id'

        expect(res).toEqual
          join: [
            table: 'movies'
            columns:
              left:
                table: 'movies'
                column: 'id'
              right:
                table: 'users'
                column: 'id'
          ]

      it 'should be able to parse multiple JOIN operations', ->
        res = pars.parse '''
            JOIN movies ON movies.id = users.id
            JOIN actors ON actors.id = movies.actorsId
            '''

        expect(res).toEqual
          join: [
            {
              table: 'movies'
              columns:
                left:
                  table: 'movies'
                  column: 'id'
                right:
                  table: 'users'
                  column: 'id'
            }
            {
              table: 'actors'
              columns:
                left:
                  table: 'actors'
                  column: 'id'
                right:
                  table: 'movies'
                  column: 'actorsId'
            }
          ]

      describe 'WHERE section', ->
        it 'should be able to parse query with WHERE operator', ->
          for comparator in ['>=','<=','>','<','<>','=','LIKE']
            res = pars.parse "WHERE movies.id #{comparator} users.movieId"

            expect(res).toEqual
              where:
                left:
                  table: 'movies'
                  column: 'id'
                right:
                  table: 'users'
                  column: 'movieId'
                comparator: comparator

        it 'should be able to parse WHERE operator with number', ->
            res = pars.parse "WHERE movies.id >= 5"

            expect(res).toEqual
              where:
                left:
                  table: 'movies'
                  column: 'id'
                right: '5'
                comparator: '>='

        it 'should be able to parse WHERE operator with boolean', ->
          res = pars.parse "WHERE movies.id = true"

          expect(res).toEqual
            where:
              left:
                table: 'movies'
                column: 'id'
              right: 'true'
              comparator: '='

        it 'should be able to parse WHERE operator with null', ->
          res = pars.parse "WHERE NULL != movies.id"

          expect(res).toEqual
            where:
              left: 'NULL'
              right:
                table: 'movies'
                column: 'id'
              comparator: '!='

        it 'should be able to parse WHERE operator with single string', ->
          res = pars.parse "WHERE movies.title != Terminator"

          expect(res).toEqual
            where:
              left:
                table: 'movies'
                column: 'title'
              right: 'Terminator'
              comparator: '!='

      describe 'complex query', ->
        it 'should be able to parse complex query', ->

          res = pars.parse '''
            SELECT movies.title, movies.id FROM movies
            JOIN movies ON users.id = movies.userId
            JOIN actors ON actors.id = movies.actorsId
            WHERE movies.id <= users.movieId
            '''

          expect(res).toEqual
            select:
              columns: [
                {
                  table: 'movies'
                  column: 'title'
                },
                {
                  table: 'movies'
                  column: 'id'
                }
              ]
              from: 'movies'
            join: [
              {
                table: 'movies'
                columns:
                  left:
                    table: 'users'
                    column: 'id'
                  right:
                    table: 'movies'
                    column: 'userId'
              },
              {
                table: 'actors'
                columns:
                  left:
                    table: 'actors'
                    column: 'id'
                  right:
                    table: 'movies'
                    column: 'actorsId'
              }
            ]
            where:
              left:
                table: 'movies'
                column: 'id'
              right:
                table: 'users'
                column: 'movieId'
              comparator: '<='