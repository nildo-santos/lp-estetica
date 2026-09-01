export function generateWhatsAppLink(serviceName, phoneNumber) {
  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, '')
  const message = `Olá! Estava na página da Dra. Deyse Rodrigues e gostaria de um atendimento humano para entender melhor como funciona o tratamento de ${serviceName}. Podemos conversar?`

  return `https://wa.me/${normalizedPhoneNumber}?text=${encodeURIComponent(message)}`
}
