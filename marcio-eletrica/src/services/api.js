// src/api.js
import supabase from './supabase'

// Function to get all todos
export const getAllArticles = async () => {
  const { data, error } = await supabase.from('articles').select('*')

  if (error) {
    const fallback =  [{
      title: 'Título',
      description: 'Descrição'
    }]
    console.error('Error fetching articles:', error)
    return fallback
  }
  if (!data.length) {
    const fallback =  [{
      id: 0,
      title: 'Título',
      description: 'Descrição'
    }]
    return fallback
  }

  return data
}


// Function to get a single article by ID
export const getArticleById = async (id) => {
  const { data, error } = await supabase
    .from('articles') // Nome da tabela
    .select('*')      // Seleciona todas as colunas
    .eq('id', id)     // Filtra pelo ID

  if (error) {
    console.error('Error fetching article by ID:', error)
    return null
  }

  if (data.length === 0) {
    console.warn('No article found with the given ID.')
    return null
  }

  return data[0] // Retorna o primeiro registro encontrado
}

// Função para pegar a URL pública de uma imagem
export const getPublicUrl = (fileKey) => {
  const { publicURL, error } = supabase.storage
    .from('images') // Nome do seu bucket
    .getPublicUrl(fileKey)

  if (error) {
    console.error('Erro ao acessar a imagem:', error)
    return null
  }

  return publicURL // URL pública da imagem
}