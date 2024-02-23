//esse function é só para juntar tudo nnuma coisa só
function carregar() {
  /*GET VALUES*/
  var now = new Date()
  var hour = now.getHours()
  var minutes = now.getMinutes()
  var data = new Date()
  var weekday = data.getDay()
  // Obtendo a referência dos elementos html e css
  //var body = document.body >pode pegar por aqui ou direto pelo código da troca no IF
  var colors = document.querySelector('h1.colores')
  var colorz = document.querySelector('p.colores')
  var imagene = document.querySelector('img#phota')

  var print = document.querySelector('p#texxt')
  print.innerHTML += `Agora são <strong>${hour}:${minutes}h</strong>`

  switch (weekday) {
    case 0:
      weekz.innerHTML = `Hoje é <strong>Domingo</strong>`
      break
    case 1:
      weekz.innerHTML = `Hoje é <strong>Segunda</strong>`
      break
    case 2:
      weekz.innerHTML = `Hoje é <strong>Terça</strong>`
      break
    case 3:
      weekz.innerHTML = `Hoje é <strong>Quarta</strong>`
      break
    case 4:
      weekz.innerHTML = `Hoje é <strong>Quinta</strong>`
      break
    case 5:
      weekz.innerHTML = `Hoje é <strong>Sexta</strong>`
      break
    case 6:
      weekz.innerHTML = `Hoje é <strong>Sábado</strong>`
      break
    default:
      console.log('[ERROR] wrong date')
      break
  }

  if (hour < 12) {
    document.body.style.backgroundColor = '#50fae1' //Ou pega por aqui ou usando uma var body = document.body
    imagene.src = 'img/day.jpg'
  } else if (hour < 18) {
    document.body.style.backgroundColor = '#faff0b'
    imagene.src = 'img/tarde.jpg'
  } else {
    document.body.style.backgroundColor = '#202020'
    colors.style.color = 'white'
    colorz.style.color = 'white'
    imagene.src = 'img/noite.jpg'
  }
}
