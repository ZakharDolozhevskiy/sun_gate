angular.module('app.services')

  .service('Notes', function () {
    var _monkData = [
      {
        title: 'Buy avto',
        description: 'Want to buy this goods',
        category: 'avto',
        price: 'to discus',
        contact: 911
      },
      {
        title: 'Buy laptop',
        description: 'Want to buy this goods',
        category: 'computers',
        price: '1000$',
        contact: 911
      },
      {
        title: 'Sell tablet',
        description: 'Want to sell this goods',
        category: 'devices',
        price: '499.99$',
        contact: 911
      },
      {
        title: 'Can teach JS for eat',
        description: 'Want to teach JS',
        category: 'education',
        price: 'some eat',
        contact: 911
      },
      {
        title: 'Apartment for rent',
        description: 'Look for lodger',
        category: 'apartment',
        price: 'to discus',
        contact: 911
      },
      {
        title: 'Sell broken keyboard',
        description: 'Want to sell this goods',
        category: 'unknown category',
        price: '1$',
        contact: 911
      }
    ];

    return {
      getAll: function () {
        return _monkData;
      },
      saveNote: function (note) {
        _monkData.push(note);
      }
    };
  });
