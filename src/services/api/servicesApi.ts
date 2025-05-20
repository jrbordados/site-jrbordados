import { type Service } from '../domain/services'
import { mockServices } from '../mocks/services.mock'

export async function getServices(): Promise<Service[]> {
  // Simula delay de requisição
  await new Promise(res => setTimeout(res, 3))
  return mockServices
}
