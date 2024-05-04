function toggleMode() {
  const html = document.documentElement;
  
  //trocar modos
  html.classList.toggle("light"); 
  /*if(html.classList.contains('light')) {
    html.classList.remove('light') 
  } else {
    html.classList.add('light')
  }*/

  //pegar a tag da imagem:
  let image = document.querySelector('#profile img');
  //substituir imagem:
  if (html.classList.contains('light')) {
    image.setAttribute('src', '/assets/avatar-light.png');
    image.setAttribute(
      "alt",
      "Homem sorridente de óculos escuros com camisa preta em um fundo degradê de roxo para azul de esquerda para a direita"
    )
  } else {
    image.setAttribute('src', '/assets/avatar.png')
  }
  
}