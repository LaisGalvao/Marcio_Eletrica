<template>
  <footer class="footer footer-scoped">
    <div class="footer-content">
      <p class="text-body">&copy; 2025 Galvão Elétrica. Todos os direitos reservados.</p>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank" class="social-link">
          <i class="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-link">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://wa.me/5511973183283" target="_blank" class="social-link">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-scoped {
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}

.social-links {
  margin-top: 10px;
}

.social-link {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.social-link i {
  margin-right: 5px;
}

.social-link:hover {
  text-decoration: underline;
}
</style>