var id_edit
function insert_to_tabel(quote) {
    var row = $('<tr></tr>').attr({ id: quote._id}).prependTo($('#quote_table'))
    var quote_text = $("<td class='quote'></td>").text(quote.quote).appendTo(row)
    var author = $("<td class='author'><span class='qty'></td>").text(quote.author).appendTo(row)
    var lastUpdate = $("<td><span class='qty'></td>").text(quote.lastUpdate).appendTo(row)
    var tdaction = $('<td></td>')
    var btnedit = $("<button class='btn btn-md btn-warning-outline' type='button'>Edit</button>")
    var btndelete = $("<button class='btn btn-md btn-danger-outline' type='button'>Delete</button>")
    btnedit.appendTo(tdaction)
    btndelete.appendTo(tdaction)
    tdaction.appendTo(row)
    btndelete.on('click',function () {
      delete_quote(quote._id)
    })
    btnedit.on('click',function () {
      $("#updatequote").val($("#"+quote._id+" .quote").text())
      $("#updateauthor").val($("#"+quote._id+" .author").text())
      update_quote(quote._id)
    })
}
function insert_quote() {
  $.ajax({
    type: 'POST',
    url: '/api/quote',
    data: {quote: $("#insertquote").val(), author: $("#insertauthor").val()},
    success: function(result){

      insert_to_tabel(result.data)
        $("#insert").attr('style','display:none')
    }
  })
}
function cancelupdate() {
  $("#updatequote").val("")
  $("#updateauthor").val("")
  hideupdate()
}
function hideupdate() {
  $("#update").attr('style','display:none')
}
function hideinsert() {
  $("#insert").attr('style','display:none')
}
function showinsert() {
  $("#insert").attr('style','display:block')
}
function update_quote(id) {
  $("#update").attr('style','display:block')
  // update_quote_ajax(id)
  id_edit = id

}
function update_quote_ajax() {

  $.ajax({
    type: 'PUT',
    url: '/api/quote/'+ id_edit,
    data: {quote: $("#updatequote").val(), author: $("#updateauthor").val()},
  }).done(function(result){
      if(result.success === 'ok') $('#'+id_edit).remove()
      insert_to_tabel(result.data)
      $("#update").attr('style','display:none')
      // window.location = '/quotes'

  })
}
function delete_quote(id_delete) {
  $.ajax({
    type: 'DELETE',
    url: '/api/quote/'+ id_delete,
    dataType: 'json'
  }).done(function(result){
      if(result.success === 'ok') $('#'+id_delete).remove()
  })
}
