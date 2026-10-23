'use client'
import { useState, useEffect } from 'react'
import { saveSaleOffline, getOfflineSales, Sale } from '@/lib/offline-db'
import VoiceSale from '@/components/VoiceSale'

export default function Dashboard(){
  const [item,setItem]=useState('')
  const [amount,setAmount]=useState('')
  const [sales,setSales]=useState<Sale[]>(()=>getOfflineSales())
  const [online, setOnline] = useState(true)

  useEffect(()=>{
    setOnline(navigator.onLine)
    const h = ()=>setOnline(navigator.onLine)
    window.addEventListener('online',h)
    window.addEventListener('offline',h)
    return ()=>{window.removeEventListener('online',h); window.removeEventListener('offline',h)}
  },[])

  const handleSale=()=>{
    if(!item||!amount) return
    saveSaleOffline({id:Date.now().toString(),item,amount:Number(amount),synced:false,createdAt:new Date().toISOString()})
    setItem('');setAmount('');setSales(getOfflineSales())
  }

  const handleMpesa = async () => {
    const res = await fetch('/api/mpesa',{method:'POST', body: JSON.stringify({phone:'254700000000', amount: 50}), headers:{'Content-Type':'application/json'}})
    const data = await res.json()
    alert(data.message + ' Receipt: ' + data.receipt)
  }

  return (
    <div className='min-h-screen bg-[#f8f9fa] p-4 md:p-8'>
      <div className='max-w-5xl mx-auto space-y-6'>
        <div className='flex justify-between items-center'>
          <div><h1 className='text-3xl font-bold'>SmartDuka</h1><p className='text-zinc-500'>Offline-first • Thika • Swahili Ready</p></div>
          <div className={online ? 'px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700' : 'px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700'}>{online ? '● Online' : '○ Offline'}</div>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='bg-white p-6 rounded-2xl border'><p className='text-sm text-zinc-500'>Sales Today</p><p className='text-2xl font-bold'>{sales.length}</p></div>
          <div className='bg-white p-6 rounded-2xl border'><p className='text-sm text-zinc-500'>Revenue</p><p className='text-2xl font-bold'>KSh {sales.reduce((a,b)=>a+b.amount,0)}</p></div>
          <div className='bg-white p-6 rounded-2xl border'><p className='text-sm text-zinc-500'>Queue</p><p className='text-2xl font-bold'>{sales.filter(s=>!s.synced).length} pending</p></div>
        </div>
        <div className='bg-white p-6 rounded-2xl border shadow-sm space-y-4'>
          <div className='flex justify-between items-center'><p className='font-semibold'>Record Sale</p><VoiceSale onResult={(t)=>setItem(t)} /></div>
          <div className='grid md:grid-cols-2 gap-3'>
            <input className='border p-3 rounded-xl' placeholder='Item e.g Nyanya' value={item} onChange={e=>setItem(e.target.value)} />
            <input className='border p-3 rounded-xl' placeholder='Amount' type='number' value={amount} onChange={e=>setAmount(e.target.value)} />
          </div>
          <div className='flex gap-3'>
            <button onClick={handleSale} className='flex-1 bg-black text-white p-3 rounded-xl'>Save Offline</button>
            <button onClick={handleMpesa} className='px-6 bg-green-600 text-white p-3 rounded-xl'>Lipa via M-Pesa</button>
          </div>
        </div>
        <div className='bg-white p-6 rounded-2xl border'>
          <p className='font-semibold mb-3'>Today Sales</p>
          <div className='space-y-2'>{sales.length===0 ? <p className='text-sm text-zinc-500'>No sales yet</p> : sales.map(s=><div key={s.id} className='flex justify-between border-b py-2 text-sm'><span>{s.item}</span><span>KSh {s.amount}</span><span className={s.synced ? 'px-2 py-0.5 rounded-full text-xs bg-green-100' : 'px-2 py-0.5 rounded-full text-xs bg-amber-100'}>{s.synced ? 'Synced' : 'Offline'}</span></div>)}</div>
        </div>
      </div>
    </div>
  )
}
