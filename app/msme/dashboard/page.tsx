'use client'
import { useState } from 'react'
import { saveSaleOffline, getOfflineSales, Sale } from '../../../lib/offline-db'

export default function Dashboard(){
  const [item,setItem]=useState('')
  const [amount,setAmount]=useState('')
  const [sales,setSales]=useState<Sale[]>(()=>getOfflineSales())

  const handleSale=()=>{
    saveSaleOffline({id:Date.now().toString(),item,amount:Number(amount),synced:false,createdAt:new Date().toISOString()})
    setItem('');setAmount('');setSales(getOfflineSales())
  }
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>SmartDuka - Offline Sales</h1>
      <input className='border p-2 m-1' placeholder='Item e.g Nyanya' value={item} onChange={e=>setItem(e.target.value)} />
      <input className='border p-2 m-1' placeholder='Amount' type='number' value={amount} onChange={e=>setAmount(e.target.value)} />
      <button onClick={handleSale} className='bg-black text-white p-2 m-1 rounded'>Save Sale (Offline)</button>
      <h2 className='mt-6 font-bold'>My Sales Today: {sales.length}</h2>
      {sales.map(s=><div key={s.id} className='border-b py-1'>{s.item} - {s.amount} - {s.synced ? 'Synced' : 'Offline'}</div>)}
    </div>
  )
}
