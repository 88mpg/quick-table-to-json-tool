$('#convert').on('click', function() {
  var tableData = $('#data').val();
  $('#rawTable').empty().append(tableData);
  var table = $('table').tableToJSON();
  $('#output').text(JSON.stringify(table, null, 2));
  // $('table').hide();

  var json = $("#output").val();
  var blob = new Blob([json], {type:'application/json'});
  var downloadLink = document.getElementById("save");
  downloadLink.download = "data";
  downloadLink.href = URL.createObjectURL(blob);
});

var client = new ZeroClipboard($('#copy'));
