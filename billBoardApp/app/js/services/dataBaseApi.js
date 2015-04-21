(function() {
    "use strict";
    angular.module('app')
        .service('dataBaseApi', function($window, $q) {
          var controls = {}, connectDB,
              indexedDB = $window.indexedDB || $window.mozIndexedDB || $window.webkitIndexedDB || $window.msIndexedDB,
              IDBTransaction = $window.IDBTransaction || $window.webkitIDBTransaction || $window.msIDBTransaction,
              baseName = "appDataBase",
              storeName = "items";

            connectDB = function (f) {
                var request = indexedDB.open(baseName, 1);
                request.onsuccess = function() {
                    f(request.result);
                };
                request.onupgradeneeded = function(e) {
                    e.currentTarget.result.createObjectStore(storeName, { autoIncrement: true });
                    connectDB(f);
                }
            };
            /**
             * Block with public methods
             */
            controls.addFiles = function(files) {
                connectDB(function(db) {
                    var request = db.transaction([storeName], "readwrite").objectStore(storeName);

                    for (var i = 0; i < files.length; i++) { request.add(files[i]); }
                });
                return this;
            };

            controls.dropFiles = function() {
                connectDB(function(db) {
                    var request = db.transaction([storeName], "readwrite").objectStore(storeName);
                        request.clear();
                });
                return this;
            };

            controls.getFiles = function() {
                var data = [], deferred = $q.defer();

                connectDB(function(db) {
                    var request = db.transaction([storeName], "readwrite").objectStore(storeName);

                    request.openCursor().onsuccess = function(event) {
                        var cursor = event.target.result;

                        if (cursor) {
                            data.push(cursor.value);
                            cursor.continue();
                        } else {
                            deferred.resolve(data);
                        }
                    };
                });
                return deferred.promise;
            };

            return controls;
        })
})();
