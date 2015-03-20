define (require) ->

  Core = require('src/SQLEngine/Engine')
  DB = require('json!db.json')
  Parser = require('src/SQLEngine/ParserPatterns')
  _ = require('bower_components/lodash/lodash.min')

  describe 'Application Core', ->
    parser = new Parser
    engine = Core.Engine
    sql_db = Core.SQL_DB

    it 'Engine constructor should be define', -> expect( engine ).toBeDefined()

    it 'Engine constructor should be define', -> expect( sql_db ).toBeDefined()

    describe 'Database section', ->
      sql_db.setDB(DB)

      it 'Should add initialize database with data from JSON', ->

        expect(sql_db.getDB()).toEqual(DB)
        debugger
      it 'Should return selected table from database', ->

        expect(sql_db.getTable('actor')).toEqual(DB.actor)

      it 'Should throw exception if table is not exist', ->

        expect(sql_db.getTable('drivers')).toEqual(new Error('This table doesn\'t exist'));

    describe 'Engine section', ->

      beforeEach ->
        spyOn(engine, 'selectData')
        engine.execute('SELECT * FROM actors')

      it 'Should get string and call function with parsed data', ->

        expect(engine.selectData).toHaveBeenCalledWith(parser.parse 'SELECT * FROM actors')

    describe 'using SELECT operator', ->
      selectedData = null;
      resultStub = _.map(DB.actor, (n) ->
        'name': n.name
        'id': n.id
      )

      it 'Should select ALL columns from table actors', ->
        selectedData = engine.execute('SELECT * FROM actor')
        expect(selectedData).toEqual(DB.actor)

      it 'Should select name and id column from table actors', ->
        selectedData = engine.execute('SELECT actor.name, actor.id FROM actor')
        expect(selectedData).toEqual(resultStub)

    describe 'using JOIN operator', ->

      it 'Should return data from columns movie.title and director.name', ->
        resultStub = []
        selectedData = engine.execute(
          'SELECT movie.title, director.name FROM movie JOIN director ON movie.directorID = director.id'
        )

        _.forEach(DB.movie, (n) ->
          _.forEach(DB.director, (o) ->
            if n.directorID is o.id
              resultStub.push (
                'title': n.title
                'name': o.name
              )
          )
        )

        expect(resultStub).toEqual(selectedData)

      it 'Should return data after using multi join operation', ->
        resultStub = []
        selectedData = engine.execute(
          '''
          SELECT movie.title, actor.name FROM movie
          JOIN actor_to_movie ON movie.id = actor_to_movie.movieID
          JOIN actor ON actor_to_movie.actorID = actor.id
          '''
        )

        _.forEach(DB.movie, (n) ->
          _.forEach(DB.actor_to_movie, (o) ->

            if n.id is o.movieID
              _.forEach(DB.actor, (p) ->

                if o.actorID is p.id
                  resultStub.push
                    'title': n.title
                    'name': p.name
              )
          )
        )

        expect(resultStub).toEqual(selectedData)

#      it 'Should return data after using multi join operation', ->
#        resultStub = []
#        selectedData = engine.execute(
#          '''
#          SELECT movie.title, actor.name, movie.id, actor.id FROM movie
#          JOIN actor_to_movie ON movie.id = actor_to_movie.movieID
#          JOIN actor ON actor_to_movie.actorID = actor.id
#          '''
#        )
#
#        _.forEach(DB.movie, (n) ->
#          _.forEach(DB.actor_to_movie, (o) ->
#
#            if n.id is o.movieID
#              _.forEach(DB.actor, (p) ->
#
#                if o.actorID is p.id
#                  resultStub.push
#                    'title': n.title
#                    'name': p.name
#                    'movie.id': n.id
#                    'actor.id': p.id
#              )
#          )
#        )
#        expect(resultStub).toEqual(selectedData)

    describe 'using WHERE operator', ->

      it 'Should return data for DB and filtered it with expression in WHERE section', ->
        resultStub = []
        selectedData = engine.execute(
          '''SELECT movie.title, movie.year, director.name FROM movie
          JOIN director ON movie.directorID = director.id
          WHERE movie.year <> NULL
          '''
        )

        _.forEach(DB.movie, (n) ->
          _.forEach(DB.director, (o) ->
            if n.directorID is o.id and n.year isnt null
              resultStub.push (
                'title': n.title
                'year': n.year
                'name': o.name
              )
          )
        )

        expect(resultStub).toEqual(selectedData)

    describe 'Multi query with using all operators', ->

      it 'Should return data after using multi join operation', ->
        resultStub = []
        selectedData = engine.execute(
          '''
          SELECT actor.name, movie.title FROM movie
          JOIN actor_to_movie ON movie.id = actor_to_movie.movieID
          JOIN actor ON actor_to_movie.actorID = actor.id
          WHERE actor.name <> Quinton 'Rampage' Jackson
          '''
        )

        _.forEach(DB.movie, (n) ->
          _.forEach(DB.actor_to_movie, (o) ->

            if n.id is o.movieID
              _.forEach(DB.actor, (p) ->

                if o.actorID is p.id and p.name isnt "Quinton 'Rampage' Jackson"
                  resultStub.push
                    'title': n.title
                    'name': p.name
              )
          )
        )

        expect(resultStub).toEqual(selectedData)
