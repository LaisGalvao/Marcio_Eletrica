<template>
    <div class="article-detail">
        <!-- Botão de Voltar -->
        <a href="/" class="back-button">Voltar</a>

        <!-- Título do Artigo -->
        <h1 class="heading-primary">{{ article.title }}</h1>

        <!-- Imagem do Artigo -->
        <img :src="article.image_url" :alt="`Imagem do artigo ${article.title}`" class="image-large" />

        <!-- Resumo do Artigo -->
        <!-- <p class="text-body summary">{{ article.summary }}</p> -->

        <!-- Conteúdo do Artigo -->
        <div v-html="article.content" class="content"></div>
    </div>
</template>

<script>
import { getArticleById } from '@/services/api';
export default {
    name: "ArticleDetail",
    props: ["id"],
    data() {
        return {
            article: {},
        };
    },
    watch: {
        id: {
            immediate: true,
            handler(newId) {
                this.fetchArticle(newId);
            }
        }
    },
    methods: {
        async fetchArticle(id) {
            this.article = await getArticleById(id);
        }
    },
    mounted() {        
        this.fetchArticle(this.id);
    }
};
</script>
<style scoped>
/* ==================== */
/* Estilos Gerais */
/* ==================== */
.article-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem 1rem;
    padding-top: 5rem;
    /* Espaço extra no topo para evitar sobreposição */
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.article-detail h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
}

.article-detail p {
    font-size: 1rem;
    line-height: 1.75;
    color: #555;
    margin-bottom: 1.5rem;
    text-align: justify;
}

/* ==================== */
/* Imagem do Artigo */
.image-large {
    width: 100%;
    max-width: 700px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 2rem;
    /* Espaço inferior */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    /* Garante que a imagem seja exibida corretamente */
}

/* ==================== */
/* Botão de Voltar */
.back-button {
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    z-index: 1000;
    /* Garante que o botão fique acima do conteúdo */
}

.back-button:hover {
    background-color: #0056b3;
}

/* ==================== */
/* Estilos Responsivos */
/* ==================== */
@media (max-width: 768px) {
    .article-detail {
        padding: 1.5rem;
        padding-top: 5rem;
        /* Mantém o espaço no topo em telas menores */
    }

    .article-detail h1 {
        font-size: 2rem;
    }

    .article-detail p {
        font-size: 0.9rem;
    }

    .back-button {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .article-detail {
        padding: 1rem;
        padding-top: 5rem;
        /* Mantém o espaçamento em dispositivos pequenos */
    }

    .article-detail h1 {
        font-size: 1.75rem;
    }

    .article-detail p {
        font-size: 0.85rem;
    }

    .back-button {
        padding: 0.5rem;
        font-size: 0.85rem;
    }
}
</style>