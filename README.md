# Dapur Buzzer - Test Project

## Deskripsi Singkat
Project ini merupakan simulasi CRUD untuk sistem manajemen konten Dapur Buzzer, yang mencakup:
- Dashboard utama dengan fitur manajemen categories
- Management kategori (CRUD operations)
- Fitur pengecekan username (username validation)

## Tech Stack
- **Frontend**: Next.js, Shadcn UI
- **Backend**: Laravel 12
- **Deployment**: Vercel (Frontend), Dewaweb (Backend)

## Arsitektur
- **Frontend**: Next.js dengan Shadcn UI components
- **Backend**: Laravel REST API
- **API Communication**: Frontend mengonsumsi API dari backend Laravel

## Cara Menjalankan Proyek

### Prerequisites
- Node.js (untuk frontend)
- PHP & Composer (untuk backend)
- MySQL/PostgreSQL database

### Frontend (Next.js)
```bash
# Clone repository
git clone [repository-url]

# Masuk ke directory frontend
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
