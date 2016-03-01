$('button').on('click', function() {
  var tableData = $('#data').val();
  $('#rawTable').empty().append(tableData);
  var table = $('table').tableToJSON();
  $('#output').text(JSON.stringify(table, null, 2));
  // $('table').hide();
});

var client = new ZeroClipboard($('#copy'));
