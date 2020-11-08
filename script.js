
function calculateBill() {
    var billAmt = document.getElementById("billamt").value;
  
    if (billAmt === "") {
      alert("Please enter the unit");
      return;
    }
   
   
    var total = (billAmt * 10);
    
    document.getElementById("totalBill").style.display = "block";
    document.getElementById("bill").innerHTML = total;
  
  }
  
  document.getElementById("totalBill").style.display = "none";
  

  document.getElementById("calculate").onclick = function() {
    calculateBill();
  
  };