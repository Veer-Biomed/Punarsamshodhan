document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.site-footer .footer-row span');

  if (footer) {
    footer.textContent = `© ${year} Punarsamshodhan`;
  }
});
