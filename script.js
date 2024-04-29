// Função para carregar o menu usando AJAX e verificar o consentimento de cookies
function loadMenuAndCheckCookies() {
  // Verificar o consentimento de cookies
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies-btn');

  acceptCookiesBtn.addEventListener('click', function() {
    // Definir um cookie para indicar que o usuário aceitou os cookies
    document.cookie = 'cookieConsent=accepted; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    
    // Ocultar o banner de consentimento de cookies
    cookieBanner.style.display = 'none';
  });

  if (!document.cookie.includes('cookieConsent=accepted')) {
    // Se o cookie de consentimento não foi encontrado, exibir o banner de consentimento
    cookieBanner.style.display = 'block';
  }

  // Carregar o menu usando AJAX
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById('menu').innerHTML = xhr.responseText;
      } else {
        console.error('Erro ao carregar o menu: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', 'menu.php', true);
  xhr.send();
}

// Carregar o menu, verificar os cookies e inicializar o carrossel de fotos ao carregar a página
window.onload = function() {
  loadMenuAndCheckCookies();

  // Carrossel de Fotos
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
};
