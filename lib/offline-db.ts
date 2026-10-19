export type Sale = { id: string, item: string, amount: number, synced: boolean, createdAt: string }
export function saveSaleOffline(sale: Sale) {
  if(typeof window === 'undefined') return
  const all = JSON.parse(localStorage.getItem('huduma_sales') || '[]')
  all.push(sale)
  localStorage.setItem('huduma_sales', JSON.stringify(all))
}
export function getOfflineSales(): Sale[] {
  if(typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('huduma_sales') || '[]')
}
