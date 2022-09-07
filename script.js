$.getJSON('https://ddo.sswkcouncil.ml/get', function (data) {
      var person = data.person;
      for (var i = 0; i < person.length; i++) {
        var name = person[i].name
        var id = person[i].id
        var room = person[i].class
        var time = person[i].time
        
        var row = '<tr><th scope="row">' + name + '</th><td>' + id + '</td><td>' + room + '</td><td>' + time + '</td></tr>';
        $('#Table').append(row);
        //console.log(name, id, room, time)
      }
      //console.log(data)
  });
