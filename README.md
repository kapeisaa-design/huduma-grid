# HUDUMA GRID - Last Mile OS for Kenya
### MSME + County Revenue + M-Pesa | Offline-First PWA

**Live Demo:** https://huduma-grid.vercel.app  
**Repository:** https://github.com/kapeisaa-design/huduma-grid

---

## 📋 Overview
HUDUMA GRID is a Last Mile Operating System for Kenyan MSMEs (Mama Mboga, Dukas) and County Governments. It solves revenue collection in low-connectivity areas by enabling offline sales capture that syncs when online.

> Problem: 70% of MSMEs operate offline, County revenue collection is manual.
> Solution: Offline-first PWA + M-Pesa Daraja + County sync.

## ✨ Features

### 1. Offline-First PWA (WORKING ✅)
- Works 100% offline using IndexedDB / localStorage
- Service Worker ready
- No internet needed for sales entry

### 2. SmartDuka - MSME Dashboard (WORKING ✅)
- Route: /msme/dashboard
- Add Item (Nyanya, Unga) + Amount
- Save Sale offline with synced:false flag
- View sales today with offline/synced status
- File: lib/offline-db.ts

### 3. County Revenue Dashboard (WORKING ✅)
- Route: /county/dashboard
- View total collections from MSMEs
- Ready for M-Pesa Daraja integration

### 4. Roadmap
- [ ] M-Pesa Daraja STK Push
- [ ] Background sync when online
- [ ] USSD *384# fallback
- [ ] County admin analytics

## 🛠️ Tech Stack
- Next.js 16.4.2 + TypeScript + Tailwind
- Offline: IndexedDB wrapper (lib/offline-db.ts)
- PWA + Vercel + 【entity-GitHub¦canonical_name=GitHub】

## 🚀 Getting Started
npm install
npm run dev
# http://localhost:3000

npm run lint
npm run build

## 📱 Offline Test
1. Go to /msme/dashboard
2. Add sale: Nyanya 100
3. Turn OFF WiFi
4. Refresh - sales still there!

## 🎯 Attachment Objectives Met
- ✅ Next.js PWA
- ✅ Offline-first architecture
- ✅ MSME dashboard working
- ✅ County dashboard working
- ✅ Clean build (0 errors)
- ✅ 【entity-GitHub¦canonical_name=GitHub】 + Vercel deployment

## Author
Kape Isaa - Attachment 2026
Built for Kenya's last-mile economy.