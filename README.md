# Counselix - AI-Powered & Data-Driven JEE Counselling Assistant

> **MERN Stack Architecture | JoSAA & CSAB Analytics | College Rank Predictor & Choice List Engine**

Counselix is a comprehensive full-stack counselling platform designed for JEE Main & Advanced candidates in India. It empowers students with historical cutoff analytics, personalized college/branch recommendation engines (Safe/Target/Dream classification), fee structures, placement reports, scholarship matching, and choice-list optimization.

---

## 🚀 Key Features

- **College & Branch Predictor:** Real-time prediction algorithm based on candidate's rank (CRL / Category), category (OPEN, OBC-NCL, SC, ST, EWS), home state quota (HS/OS/AI), and 12th board marks.
- **JoSAA/CSAB Cutoff Analytics:** Multi-year cutoff trends visualizer using dynamic charts (Recharts).
- **College Comparison Tool:** Side-by-side comparison of up to 3 institutes across NIRF rankings, closing ranks, fees, and placement packages.
- **Scholarship Finder:** Criteria-based filtering for central and state government scholarships (PMSS, EBC, Post-Matric).
- **Choice List Generator:** Algorithm-backed automated choice ordering based on candidate preference weights and admission probabilities.
- **Data Provenance Transparency:** Every cutoff and statistic cites its official source (JoSAA/CSAB archives, NIC, Institute reports) and last-updated timestamps.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React (Vite), Tailwind CSS, Material UI (MUI), Recharts, React Router DOM, Lucide Icons |
| **Backend** | Node.js, Express.js REST API |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JWT (JSON Web Tokens) with HttpOnly Cookies & Bcrypt.js |
| **Testing** | Jest, Supertest, React Testing Library |
| **DevOps & CI/CD** | GitHub Actions, Render/Heroku (Backend), Vercel/Netlify (Frontend) |

---

## 🗄️ Database Schemas (MongoDB Collections)

1. **`users`**: Student profiles, JEE Main/Adv ranks, category, home state, 12th marks, saved colleges, choice list.
2. **`colleges`**: Meta info for IITs, NITs, IIITs, GFTIs, location, NIRF ranks, website.
3. **`programs`**: Academic programs offered by colleges (Degree, Branch, Duration).
4. **`cutoffs`**: Historical cutoff records (Year, Round, Category, Quota, Gender, Opening Rank, Closing Rank).
5. **`fees`**: Tuition, hostel, mess, and total annual expenses per program.
6. **`placements`**: Average, median, highest packages, and placement percentage stats.
7. **`scholarships`**: Government and institute scholarship eligibility rules and amounts.
8. **`choices`**: User generated preference priority lists.
9. **`sources`**: Audit log of data provenance (Source Name, URL, DataType, Last Updated).

---

