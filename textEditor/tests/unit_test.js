// Initialization mudole

QUnit.module("Check initialization", {
    beforeEach: function () {
        this.container = $("#editor");
        this.wrongData = { "x": 123 };
    },
    afterEach: function () {
        this.container.empty();
    }
});

QUnit.test("Try to create editor with incorrect value", function( assert ) {
    assert.throws(
        function(){
            throw new Editor(this.wrongData);
        },
        Error("Argument isn't a DOM element. Please check the passed argument")
        ,
        'Error message have been sent'
    );
});

QUnit.test("Try to create editor with correct value", function( assert ) {
    new Editor(this.container);
    assert.ok( this.container.children().length > 1, "Editor's elements have been added");
});

// UI components rendering module

QUnit.module("Check that UI component have been rendered", {
    beforeEach: function (){
        this.container = $("#editor");
        this.fn = Editor.prototype;
        new Editor( this.container );

        this.items_array = this.fn.legend_items['items'];
    },

    afterEach: function () {
        this.container.empty();
    }
});

QUnit.test("Check creating iframe, legend block and preview button", function( assert ) {
    assert.expect( 3 );

    assert.ok($(this.container).find('.content'), 'iframe created');
    assert.ok($(this.container).find('.legend'), 'legend container created');
    assert.ok($(this.container).find('.preview'), 'preview button created');

});

QUnit.test("Check that iframe's document and window object are available", function( assert ) {
    assert.expect( 2 );

    assert.ok( this.fn.iWindow, 'iframe\'s Window object is available');
    assert.ok( this.fn.iDoc, 'iframe\'s Document object is available');

});

QUnit.test("Check that editable block have been added into iframe", function( assert ) {
    var content = $(this.fn.iDoc).find('.content');

    assert.equal( content.length, 1 , 'content was added to iframe');
    assert.ok( content.attr('contenteditable'), 'element have \'contenteditable\' attribute');

});

QUnit.test("Check that legend items added to legend block with the given options", function( assert ) {
    var items_count = this.items_array.length, // count of legend controls ( like 'B' - 'bold' etc. )
        $printedItems = $(this.container).find('.legend').children();

    assert.equal($printedItems.length, items_count, 'Correct count of items have been rendered');

});

QUnit.test("Check that legend controls defined", function( assert ) {
    var cnt = this.items_array.length, i;
    assert.expect( cnt );

    for(i=0; i < cnt; i++){
        assert.ok( this.items_array[i]['handler'],
                   'Item\'s callback with' + this.items_array[i]['className'] + 'inited'
        );
    }
});

// External library's module

QUnit.module("Check that rangy library and it's dependency created and initialized", {
    beforeEach: function (){
        this.container = $("#editor");
        this.fn = Editor.prototype;
        new Editor( this.container );
    },

    afterEach: function () {
        this.container.empty();
    }
});

QUnit.test("Check that rangy library with modules successfully initialized", function( assert ) {
    assert.ok(this.fn.rangy, 'Core of rangy library available');
    assert.ok(this.fn.rangy.createCssClassApplier, 'Selections module from rangy library available');
    assert.ok(this.fn.controls, 'Config file available');
});

// Selection and text modifying block

QUnit.module("Check text modifying functions", {
    beforeEach: function (){
        this.container = $("#editor");
        this.fn = Editor.prototype;
        new Editor( this.container );
        /**
         * This function emulate user's test selection in the iframe window
         * In this case function select all added test-text
         */
        this.selection = function () {
            var r = this.fn.rangy.createRange(),
                elem = $(this.fn.iDoc).find(".content")[0];

            r.selectNodeContents(elem);
            // added selection
            this.fn.rangy.getSelection().setSingleRange(r);
        };
    }
});

QUnit.test("Check ", function( assert ) {
    var config = this.fn.legend_items['items'];

    config.forEach(function(el, i){
        if(!el.tag) return;
        // run user selection emulation
        this.selection();
        // trigger click event on button that toggle font weight (bold)
        $("." + el.className).trigger("click");
        // check that changes occurred
        assert.ok( !!$(this.fn.iDoc).find(el.tag).eq(0) , el.className + '\'s style have been apply');
    }.bind(this));

});