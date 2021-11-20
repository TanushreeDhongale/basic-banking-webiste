var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal')
var exampleModal2 = document.getElementById('exampleModal2')
exampleModal2.addEventListener('show.bs.modal')
function myfunction() {
  var sender = document.getElementById("sender").value
  var receiver = document.getElementById("receiver").value
  var amount = document.getElementById("money").value
  document.getElementById("transaction").innerHTML = "Rs. " + amount + " is successfully sent to " 
                                                          + receiver + " from " + sender
}
