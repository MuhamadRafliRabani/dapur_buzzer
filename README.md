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

## Website Url

- **Frontend**: https://dapur-buzzer-hm9r.vercel.app/
- **Backend**: https://dpxstore.id/

## Url Untuk Setiap Tugas

- **Tugas 1**: https://dapur-buzzer-hm9r.vercel.app/
- **Tugas 1.2**: https://dapur-buzzer-hm9r.vercel.app/dashboard/categories
- **Backend**: https://dpxstore.id/categories

## Cara Menjalankan Proyek

### Prerequisites

- Node.js (untuk frontend)
- PHP & Composer (untuk backend)
- MySQL/PostgreSQL database

### Frontend (Next.js)

```bash
# Clone repository
git clone https://github.com/MuhamadRafliRabani/dapur_buzzer.git

# Masuk ke directory frontend
cd frontend

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

# Backend (Laravel)

# Clone repository

git clone https://github.com/MuhamadRafliRabani/backend_dapur_buzzer.git

# Install dependencies

composer install

# Copy environment file

cp .env.example .env

# Generate application key

php artisan key:generate

# Configure database di .env

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dapur_buzzer
DB_USERNAME=root
DB_PASSWORD=

# Jalankan migrations

php artisan migrate

# Jalankan server

php artisan serve
