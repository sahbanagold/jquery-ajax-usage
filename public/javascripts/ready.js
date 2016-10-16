$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: '/api/quote/',
    dataType: 'json'
  }).done(function(result){
    console.log(result)
    result.forEach(function(item){
      insert_to_tabel(item)
    })
  })
})
