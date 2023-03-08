function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('recruitment');
  var values = sheet.getDataRange().getValues(); 
  var output =[];
  for(var i = 0; i<values.length; i++){
  var row = {};
  row['Name'] = values[i][0];
  row['Branch'] = values[i][10];
  row['Year'] = values[i][11];
  output.push(row);
  }
  return ContentService.createTextOutput(JSON.stringify({data: output})).setMimeType(ContentService.MimeType.JSON);
}
