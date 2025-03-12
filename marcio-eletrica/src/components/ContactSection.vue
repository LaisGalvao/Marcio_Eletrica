<template>
  <section class="contact">
    <h2>Entre em Contato</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="btn-submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aqui você pode integrar com um backend ou enviar para o WhatsApp
      alert('Formulário enviado com sucesso!');
      // Simulating email sending
      const emailData = {
        to: 'example@example.com',
        subject: 'New Contact Form Submission',
        body: `Name: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`
      };

      console.log('Email data:', emailData);
      // Here you would typically use an email sending service API
      // For example, using EmailJS, SendGrid, or a backend endpoint
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  background-color: #fff;
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

textarea {
  height: 150px;
}

button {
  padding: 10px 20px;
  background-color: #ff9f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e68a00;
}

@media (max-width: 768px) {
  .contact {
    padding: 20px;
  }

  h2 {
    font-size: 1.75rem;
  }

  input, textarea {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>