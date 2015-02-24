[Text Editor](https://crackling-torch-2784.firebaseapp.com/) — Easy text editor that create valid HTML page
===========================================================================================================

Contribution Guides
--------------------------------------

Text editor work with some JavaScript libraries described below

Add this libraries in the head of your html page.

1. [jQuery](http://jquery.com/) - jQuery library
2. [Mustache.js](https://github.com/janl/mustache.js) - Mustache.js template system in JavaScript.
3. [spell.js](https://webmaster.yandex.ua/spellcheck.xml) - Yandex spellchecker
4. [Leannodal.js](http://leanmodal.finelysliced.com.au/) - jQuery modal window plugin
5. [Rangy](http://leanmodal.finelysliced.com.au/) - this library work with user selection
6. [editor] - text editor core

---------------------------------------

After adding described files your html header should be like this: 

```bash
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/libs/jquery.leanModal.min.js"></script>
    <script type="text/javascript" src="js/speller/spell.js"></script>
    <script src="js/libs/rangy-core.js"></script>
    <script src="js/editor.js" defer></script>
```

Plugin initialization 
-------------------------------------

You can run the plug-in text editor on any block element of your page

Init text editor core:

```bash
	new Editor($([any block element in you page]));
```
The spellcheck is optional feature and if you want add it too your page go through the following steps:

1. Create object with configuration 

```bash
	var conf = { url:"js/speller", lang:"ru", options: Speller.IGNORE_URLS, spellDlg: { width: 500, height: 320 } }
```
2. Init spellcheck module 

```bash
	 global.Editor.prototype.initSpeller(conf);
```

[More information about spellcheck configuration](https://tech.yandex.ru/speller/doc/dg/reference/speller-options-docpage/)

Text editor personal configuration
-------------------------------------

TBD...