const bill = document.getElementById("billinput");
const people = document.getElementById("peopleinput");
const custom = document.getElementById("btntipcustom");
const tipp = document.getElementById("moneytip");
const total = document.getElementById("money-tiptotal");
const reset = document.getElementById("btnreset");
const buttons = document.querySelectorAll(".btntip")

//Calculate Tip When Click On Tip Percentage Button

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0,  tipvalue.length -1);

        if (bill.value === "") return;
        if (people.value === "") people.value = 1;

        calculateTip(
            parseFloat(bill.value),
            parseInt(tipvalue),
            parseInt(people.value)
        );
    });
});

//Calculate Tip When User Give Custom Tip Percentage Input


custom.addEventListener("blur", (e) => {
    if (bill.value === "") {
      alert("Please First Add Bill Amount");
      resetEverything();
      return;
    }
    if (people.value === "") people.value = 1;
  
    calculateTip(
      parseFloat(bill.value),
      parseFloat(e.target.value),
      parseInt(people.value)
    );
  });

//Calculate Tip

const calculateTip = (bill, btntip, people) => {
  let tipAmount = (bill * (btntip / 100)) / people;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  // console.log("this is tip", tip);

  let totalAmount = (tipAmount * people + bill) / people;
  totalAmount = totalAmount.toFixed(2);

  
  // console.log("this is total amount", totalAmount);

  tipp.innerHTML = `$${tip}`;
  total.innerHTML = `$${totalAmount}`;
};

//Reset Everything

reset.addEventListener("click", resetEverything);

function resetEverything () {
tipp.innerHTML = "$0.00";
total.innerHTML = "$0.00";
bill.value = "";
people.value = "";
custom.value = "";
}