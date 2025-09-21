// src/services/scheduler.js
import supabase from './supabase'

// Chave para o localStorage para rastrear a última execução
const LAST_EXECUTION_KEY = 'last_supabase_execution'

// Verifica se o localStorage está disponível
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test__'
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    console.warn('localStorage não está disponível:', e)
    return false
  }
}

/**
 * Verifica se já se passaram 3 dias desde a última execução
 * @returns {boolean} true se passaram 3 dias, false caso contrário
 */
const shouldExecute = () => {
  // Se localStorage não estiver disponível, sempre deve executar
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage não disponível, executando chamada ao Supabase')
    return true
  }
  
  // Pega a data da última execução do localStorage
  const lastExecution = localStorage.getItem(LAST_EXECUTION_KEY)
  
  if (!lastExecution) {
    // Se não houver registro da última execução, deve executar
    return true
  }
  
  const lastDate = new Date(parseInt(lastExecution))
  const now = new Date()
  
  // Calcula a diferença em milissegundos
  const differenceInMs = now - lastDate
  
  // Converte para dias (1 dia = 24 * 60 * 60 * 1000 milissegundos)
  const differenceInDays = differenceInMs / (24 * 60 * 60 * 1000)
  
  // Verifica se passaram 3 ou mais dias
  return differenceInDays >= 3
}

/**
 * Registra a execução atual no localStorage
 */
const recordExecution = () => {
  if (!isLocalStorageAvailable()) {
    console.warn('Não foi possível registrar execução: localStorage não disponível')
    return
  }
  
  const now = new Date().getTime()
  localStorage.setItem(LAST_EXECUTION_KEY, now.toString())
}

/**
 * Executa a chamada ao Supabase
 * Você pode personalizar esta função para fazer qualquer operação desejada
 */
const executeSupabaseCall = async () => {
  try {
    // Esta é uma chamada de exemplo que apenas verifica a conexão com o Supabase
    // e faz uma consulta simples na tabela 'articles' que já existe
    const { error } = await supabase
      .from('articles')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Erro na chamada agendada ao Supabase:', error)
      return false
    }
    
    // Registra a execução no console
    console.log(`Chamada agendada ao Supabase executada com sucesso em ${new Date().toISOString()}`)
    
    // Você pode modificar esta função para realizar a operação específica que precisa
    // Por exemplo: atualizar algum registro, fazer um ping em algum endpoint, etc.
    
    return true
  } catch (err) {
    console.error('Erro inesperado na chamada agendada ao Supabase:', err)
    return false
  }
}

/**
 * Verifica e executa a chamada ao Supabase se necessário
 * @returns {Promise<boolean>} O resultado da execução ou false se não foi necessário executar
 */
export const checkAndExecuteScheduledCall = async () => {
  if (shouldExecute()) {
    const result = await executeSupabaseCall()
    if (result) {
      recordExecution()
      return true
    }
  }
  return false
}

/**
 * Inicializa o agendador. Deve ser chamado na inicialização da aplicação.
 */
export const initScheduler = () => {
  // Verifica imediatamente na inicialização
  checkAndExecuteScheduledCall()
  
  // Define um intervalo para verificar periodicamente
  // Aqui verificamos a cada 6 horas, mas isso não afeta o requisito de 3 dias
  // Apenas garante que a chamada seja feita em um tempo razoável após os 3 dias
  setInterval(checkAndExecuteScheduledCall, 6 * 60 * 60 * 1000)
}