function Calculate() {

	var bill = document.getElementById('Bill-number').value;
  var tip_percentage = document.getElementById('tip_percentage').value; 
  var tip = parseFloat(bill) * (tip_percentage) * 0.01;
  var total = parseFloat(bill) + (tip);

  document.getElementById('Tip-result').value = parseFloat(tip);
  document.getElementById('Tip-number').value = parseFloat(tip) + parseFloat(bill);
  document.form1.submit();

}