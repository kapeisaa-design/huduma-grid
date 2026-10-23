'use client'
import { useState } from 'react'
export default function VoiceSale({ onResult }: { onResult: (t:string)=>void }) {
  const [on, setOn] = useState(false)
  const start = () => {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    if(!SR){ alert('Use Chrome for voice'); return }
    const r = new SR(); r.lang='sw-KE'; r.onstart=()=>setOn(true)
    r.onresult=(e:any)=>{ onResult(e.results[0][0].transcript); setOn(false) }
    r.onerror=()=>setOn(false)
    r.start()
  }
  return <button onClick={start} type="button" className='px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium'>{on?'🎤 Nasikiliza...':'🎙️ Sema Mauzo (Swahili)'}</button>
}
