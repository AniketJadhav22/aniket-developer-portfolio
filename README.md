# Developer Portfolio — React + Spring Boot + MySQL

A dark, responsive portfolio for a Java Full Stack Developer. Frontend uses React + Vite + plain CSS (no TypeScript). Backend uses Spring Boot, Spring Web, Spring Data JPA, Validation, and MySQL.

## Included
- Responsive hero, about, skills, projects, education, certifications, contact sections
- Smooth scroll, reveal-on-scroll animations, hover states, mobile navigation
- Contact form submits to Spring Boot API when backend is configured
- Fallback: mailto link if the API is unavailable
- Resume download placeholder
- MySQL schema and Vercel configuration

## 1. Requirements
- Node.js 20+
- Java 21
- Maven 3.9+
- MySQL 8+

## 2. Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Vite normally starts at http://localhost:5173.

Create `frontend/.env` if needed:
```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://linkedin.com/in/your-username
```

## 3. Run the backend
Create a MySQL database:
```sql
CREATE DATABASE portfolio_db;
```
Set environment variables before running:
- `DB_URL=jdbc:mysql://localhost:3306/portfolio_db`
- `DB_USERNAME=your_mysql_username`
- `DB_PASSWORD=your_mysql_password`
- `PORT=8080` (optional)

Then:
```bash
cd backend
mvn spring-boot:run
```
API endpoint: `POST http://localhost:8080/api/contact`

Example request:
```json
{
  "name": "Jane Visitor",
  "email": "jane@example.com",
  "subject": "Opportunity",
  "message": "I'd like to discuss a role."
}
```

## 4. Personalize before publishing
Search the frontend for `Aniket Jadhav` and update:
- email address and social URLs
- resume file: put your PDF at `frontend/public/Aniket-Jadhav-Resume.pdf`
- GitHub project URLs
- project descriptions, dates, certifications and any claims that need verification

Do not publish database credentials or secrets. Do not claim experience, metrics, or certifications that you cannot verify.

## 5. Deploy
### Frontend on Vercel
1. Push this project to GitHub.
2. In Vercel, import the repository.
3. Set **Root Directory** to `frontend`.
4. Add environment variables: `VITE_API_BASE_URL`, `VITE_EMAIL`, `VITE_GITHUB_URL`, `VITE_LINKEDIN_URL`.
5. Deploy. `vercel.json` includes SPA rewrites.

### Backend
Vercel is best suited to the static frontend. Deploy Spring Boot separately to a Java-capable host (for example, Render, Railway, or a VPS) and use a managed MySQL database. Set `VITE_API_BASE_URL` to the deployed backend URL plus `/api`, then redeploy the frontend. Configure CORS for your Vercel domain in production.

## Note
This is a starter implementation. Contact submissions are stored in MySQL; add rate limiting, email verification/notification, spam protection, and production monitoring before relying on it publicly.
