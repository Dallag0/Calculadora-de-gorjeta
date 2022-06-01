function calc(event) {
  event.preventDefault()

  var bill = document.getElementById('bill').value
  var serviceQuality = document.getElementById('serviceQuality').value
  var pessoas = document.getElementById('pessoas').value

  if (bill == '' || serviceQuality == 0) {
    alert('Por favor, preencha os valores')
  }

  if (pessoas == '' || pessoas <= 1) {
    pessoas = 1
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }

  var total = (bill * serviceQuality) / pessoas
  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = total
  document.getElementById('total').style.display = 'block'
}

document.getElementById('total').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tips').addEventListener('submit', calc)
