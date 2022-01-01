let csgoInput = document.querySelector("#csgoElem")
let valoInput = document.querySelector("#valoElem")

csgoInput.addEventListener("keyup", ()=>{
  let valoConv = csgoInput.value / 3.1818;
  valoInput.value = valoConv.toFixed(3);
})

valoInput.addEventListener("keyup", ()=>{
  let csgoConv = valoInput.value * 3.1818;
  csgoInput.value = csgoConv.toFixed(2);
})