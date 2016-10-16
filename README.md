# jquery-ajax-usage

Plain style code format:
```
$.ajax({
  type: ['GET','POST','PATCH','DELETE']
  url: the endpoint to be requested for data hangling,
  data: {key1: "value1", key2: "value2", ...},
  success: function(result){
    if(result){
      dosomething
      callsomething()
    }
})
```

Promise style code format:
```
$.ajax({
  type: ['GET','POST','PATCH','DELETE']
  url: the endpoint to be requested for data hangling,
  data: {key1: "value1", key2: "value2", ...},
}).done(function(result){
    if(result){
      dosomething
      callsomething()
    }
})
```

Example:

```js
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
```

for more about promise style visits:
http://blog.revathskumar.com/2016/06/why-i-prefer-ajax-promise.html
