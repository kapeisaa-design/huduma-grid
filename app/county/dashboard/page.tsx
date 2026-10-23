'use client'
import { useState } from 'react'
export default function CountyDashboard(){
  return (
    <div className='min-h-screen bg-[#f8f9fa] p-4 md:p-8'>
      <div className='max-w-6xl mx-auto space-y-6'>
        <div className='flex justify-between items-start'>
          <div><h1 className='text-3xl font-bold tracking-tight'>Kiambu County • Thika</h1><p className='text-zinc-500'>Revenue Intelligence • Live from 1,240 Dukas • Last sync 2m ago</p></div>
          <div className='px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium'>● Live Grid</div>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='bg-white p-6 rounded-2xl border shadow-sm'><p className='text-sm text-zinc-500'>Levy Collected Today</p><p className='text-3xl font-bold mt-1'>KSh 42,300</p><p className='text-xs text-green-600 mt-2'>↑ 68% from offline sync • M-Pesa</p></div>
          <div className='bg-white p-6 rounded-2xl border shadow-sm'><p className='text-sm text-zinc-500'>Leakage Sealed</p><p className='text-3xl font-bold mt-1'>KSh 18,000</p><p className='text-xs text-amber-600 mt-2'>vs manual collection • Today</p></div>
          <div className='bg-white p-6 rounded-2xl border shadow-sm'><p className='text-sm text-zinc-500'>Disputes</p><p className='text-3xl font-bold mt-1'>0</p><p className='text-xs text-zinc-500 mt-2'>Auto SMS receipt • Zero bribe</p></div>
        </div>
        <div className='bg-amber-50 border border-amber-200 p-4 rounded-2xl'><p className='font-semibold'>⚠️ AI Alert from Grid</p><p className='text-sm mt-1'>Gatitu market under-reporting by 40% (KSh 12k gap). Recommend officer visit tomorrow 9am. Makongeni compliance 92% - best performer.</p></div>
        <div className='bg-white p-6 rounded-2xl border shadow-sm'><p className='font-semibold mb-3'>Thika Markets Heatmap - Real-time Compliance</p><div className='grid grid-cols-3 gap-3'><div className='p-4 bg-green-50 border border-green-200 rounded-xl'><p className='font-bold'>Makongeni</p><p className='text-sm'>92% ✓ KSh 18k</p></div><div className='p-4 bg-amber-50 border border-amber-200 rounded-xl'><p className='font-bold'>Landless</p><p className='text-sm'>68% ~ KSh 9k</p></div><div className='p-4 bg-red-50 border border-red-200 rounded-xl'><p className='font-bold'>Gatitu</p><p className='text-sm'>42% ⚠️ KSh 4k</p></div></div></div>
      </div>
    </div>
  )
}
