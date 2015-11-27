define (require) ->

  patterns = require('src/SQLEngine/ParserCore')
  digit = patterns.digit
  rgx = patterns.rgx
  text = patterns.text
  opt = patterns.opt
  exc = patterns.exc
  any = patterns.any
  seq = patterns.seq
  rep = patterns.rep.bind patterns

  describe 'Parser Core', ->

    it 'should parse string with digits pattern', ->

      expect( digit().exec "123", 0 ).toEqual res: 1, end: 1

      expect( digit().exec "Q", 0 ).toBeUndefined()

    it 'should parse string with RegExp pattern', ->

      expect( rgx(/\d+/).exec "123", 0 ).toEqual res: "123", end: 3

      expect( rgx(/\d+/).exec "abc", 0 ).toBeUndefined()

    it 'should parse string with string/text pattern', ->

      expect( text("abc").exec "abc", 0 ).toEqual res: "abc", end: 3

      expect( text("3213").exec "321", 0 ).toBeUndefined()

    it 'should parse string for define patter or return nothing', ->

      expect( opt(text "DAERDQ").exec "DAERDQ", 0 ).toEqual res: "DAERDQ", end: 6

      expect( opt(rgx /\s+/).exec "qwert", 0 ).toEqual res: "", end: 0

    it """should parse string using first argument if the string
          couldn\'t parse by second patter""", ->

      expect( exc(rgx(/[A-Z]/), text "A").exec "F", 0 ).toEqual res: "F", end: 1

      expect( exc(rgx(/[A-Z]/), text "A").exec "A", 0 ).toBe false

    it "should parse string using first appropriate pattern", ->

      expect( any(rgx(/[\D]/), digit()).exec "2", 0 ).toEqual res: 2, end: 1

      expect( any(rgx(/[\W]/), text("abc")).exec "abc", 0 ).toEqual res: "abc", end: 3

      expect( any(rgx(/[\W]/), text("ABC")).exec "abc", 0 ).toBeUndefined()

    it "should parse string using all appropriate pattern and should return result's array", ->

      expect( seq(text("abc"), text("dfe")).exec "abcdfe", 0 ).toEqual res: ["abc","dfe"], end: 6

      expect( seq(text("abc"), text("dfe")).exec "7abcdfe7", 0 ).toBeUndefined()

    it "should parse string using pattern and skip separator results", ->

      expect( rep(rgx(/\d+/), text(",")).exec "1,23,456", 0 ).toEqual res: ["1", "23", "456"], end: 8

      expect( rep(rgx(/\d+/), text(",")).exec "123ABC", 0 ).toEqual res: ["123"], end: 3
