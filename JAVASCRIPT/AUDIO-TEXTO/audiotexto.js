//se obtiene el boton para comenzar a hablar
const btn = document.querySelector('#btn-aud')
const texto = document.querySelector('#texto')


btn.addEventListener('click', () => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  
  const recognition = new SpeechRecognition()
  recognition.interimResults = true

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)

      console.log(transcript)

      texto.innerHTML = transcript
  })

    recognition.start()
})