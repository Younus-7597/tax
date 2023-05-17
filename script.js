var amount, gst, qst, total;

function init(){
    amount = parseFloat(document.querySelector("input").value);
    gst = amount * 0.05;
    qst = amount * 0.09975;
    total = amount + gst + qst;
    document.querySelector(".view").innerHTML = "For initital amount of $" + amount.toFixed(2) + "<br> Applicable taxes are: <br> Gst: $" + gst.toFixed(2) + "<br> Qst: $" + qst.toFixed(2) + "<br> Total Amount after tax: $" + total.toFixed(2)
}




function alrt() {
    alert("For initital amount of $" + amount.toFixed(2) + "\n Applicable taxes are: \n Gst: $" + gst.toFixed(2) + "\n Qst: $" + qst.toFixed(2) + "\n Total Amount after tax: $" + total.toFixed(2))
}