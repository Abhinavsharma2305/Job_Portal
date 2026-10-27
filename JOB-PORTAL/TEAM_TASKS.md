# Job Hunt — Team Task Distribution

> **Project**: Job Hunt — MERN Stack Job Portal  
> **Team**: Abhinav (Intermediate), Abhay (Intermediate), Akshat (Beginner)  
> **Repository**: https://github.com/Abhinavsharma2305/Job_Portal  
> **Stack**: React 18 + Vite | Node.js + Express | MongoDB + Mongoose | JWT | Cloudinary | Tailwind CSS

---

## 🔁 Branch & PR Workflow

```
main  (protected — must always be stable)
  ↑ merged via Pull Request after peer review
  └── feature branches (one per task)
```

**Rules:**
1. Always `git pull origin main` before creating a new branch.
2. Create a branch per task: `git checkout -b feat/task-name`
3. Commit focused, meaningful changes with descriptive messages.
4. Push the branch and open a PR on GitHub.
5. At least one other team member must review and approve before merging.
6. Never commit `.env` files, `node_modules/`, or secrets.

---

## 👤 Abhinav — Intermediate (Backend Architecture & Integration)

### Responsibilities
- Backend API design, improvements, and security
- Authentication and authorization flows
- Backend ↔ Frontend integration
- Code reviews and technical coordination
- Complex debugging

---

### TASK AB-01 — Audit and Improve Auth Flow
| Field | Value |
|-------|-------|
| **Priority** | 🔴 High |
| **Branch** | `feat/auth-improvements` |
| **Status** | ⬜ Not Started |
| **Files** | `Backend/controllers/user.controller.js`, `Backend/middleware/`, `Backend/models/user.model.js` |
| **Dependencies** | Initial repo setup (AB-00) |

**Description**: Review the full authentication flow — register, OTP verify, login, logout, forgot/reset password, change password. Ensure tokens are correctly validated, OTP expiry is enforced, and error messages are consistent.

**Acceptance Criteria:**
- [ ] OTP expiry is enforced (reject expired OTPs)
- [ ] Login endpoint returns clear error messages (wrong password vs email not found vs not verified)
- [ ] JWT middleware correctly rejects expired/invalid tokens with 401
- [ ] All auth routes return consistent JSON error shapes `{ success: false, message: "..." }`
- [ ] No secrets logged to console in production mode

---

### TASK AB-02 — Recruiter Dashboard Backend API Hardening
| Field | Value |
|-------|-------|
| **Priority** | 🔴 High |
| **Branch** | `feat/recruiter-api` |
| **Status** | ⬜ Not Started |
| **Files** | `Backend/controllers/company.controller.js`, `Backend/controllers/job.controller.js`, `Backend/controllers/application.controller.js` |
| **Dependencies** | AB-01 |

**Description**: Audit the recruiter-facing API — company create/update, job post/edit, applicant management. Add proper authorization checks (recruiter can only manage their own companies/jobs). Verify Cloudinary upload integration.

**Acceptance Criteria:**
- [ ] Recruiter cannot edit/delete another recruiter's company or job
- [ ] Company logo upload via Cloudinary works end-to-end
- [ ] Job post/edit validates required fields (title, description, salary, location, jobType)
- [ ] Applicants list returns correct data for authenticated recruiter

---

### TASK AB-03 — Backend Input Validation
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `feat/backend-validation` |
| **Status** | ⬜ Not Started |
| **Files** | `Backend/controllers/` (all), `Backend/models/` (all) |
| **Dependencies** | AB-01 |

**Description**: Add server-side input validation to all API endpoints. Currently validation appears to be minimal/controller-level only. Add length limits, format checks, and sanitization.

**Acceptance Criteria:**
- [ ] Email format validated on register, login, forgot-password
- [ ] Password minimum length enforced (≥ 8 chars)
- [ ] Job fields validated (salary range, valid jobType enum)
- [ ] Malformed requests return 400 with descriptive errors

---

### TASK AB-04 — README and API Docs Update
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `docs/api-and-readme` |
| **Status** | ⬜ Not Started |
| **Files** | `README.md`, `TEAM_TASKS.md` |
| **Dependencies** | AB-01, AB-02 |

**Description**: Update the README to reflect team ownership (replace "Author: Ankit Pathak" section), add team members section, update API docs to reflect any new/changed endpoints.

**Acceptance Criteria:**
- [ ] README lists team members and their roles
- [ ] API table is accurate for all current endpoints
- [ ] Setup instructions tested and verified to work
- [ ] No placeholder content or fake screenshots

---

## 👤 Abhay — Intermediate (Frontend Functionality & UX)

### Responsibilities
- Frontend components and feature implementation
- API integration and form handling
- Job listing, search, filtering, application workflow
- Supporting backend tasks where relevant

---

### TASK AY-01 — Job Search & Filter Enhancement
| Field | Value |
|-------|-------|
| **Priority** | 🔴 High |
| **Branch** | `feat/job-search-filter` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/components_lite/Filtercard.jsx`, `Frontend/src/components/components_lite/Jobs.jsx`, `Frontend/src/components/components_lite/Browse.jsx` |
| **Dependencies** | Initial repo setup |

**Description**: Improve the job search and filter UX. The `Filtercard.jsx` component exists — verify it works correctly with the backend's `/api/job/get` endpoint. Add keyword search, location filter, job type filter, and salary range. Ensure filters update the URL query params for shareability.

**Acceptance Criteria:**
- [ ] Keyword search filters jobs by title/description
- [ ] Location filter narrows results correctly
- [ ] Job type filter (full-time/part-time/contract/internship) works
- [ ] Filters persist when navigating back to job list
- [ ] "No results found" state shown when filters return empty

---

### TASK AY-02 — Job Application Workflow
| Field | Value |
|-------|-------|
| **Priority** | 🔴 High |
| **Branch** | `feat/application-workflow` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/components_lite/Description.jsx`, `Frontend/src/components/components_lite/AppliedJob.jsx`, `Frontend/src/components/components_lite/Job1.jsx` |
| **Dependencies** | AY-01 |

**Description**: Audit and test the full job application flow — view job details → apply → confirmation. Verify `AppliedJob.jsx` correctly shows applied jobs from the backend. Handle loading, error, and success states properly.

**Acceptance Criteria:**
- [ ] Job detail page shows all job fields (title, company, location, salary, requirements)
- [ ] "Apply" button disabled / shows "Applied" if user already applied
- [ ] Applied Jobs page lists all applications with status
- [ ] API errors are shown as toast notifications (Sonner)
- [ ] Unauthenticated users prompted to login before applying

---

### TASK AY-03 — Save/Bookmark Jobs
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `feat/saved-jobs` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/components_lite/SavedJobs.jsx`, `Frontend/src/components/components_lite/Job1.jsx`, `Frontend/src/redux/` |
| **Dependencies** | AY-01 |

**Description**: `SavedJobs.jsx` exists in the frontend — verify the backend has a corresponding "save job" endpoint, or implement one if missing. Wire up the bookmark toggle on job cards and the saved jobs page.

**Acceptance Criteria:**
- [ ] Bookmark icon on job card toggles save/unsave
- [ ] Saved Jobs page shows all saved jobs
- [ ] Saved state persists across page reloads (via API or Redux persist)
- [ ] Backend endpoint for saving/unsaving jobs is verified or created

---

### TASK AY-04 — Profile & Edit Profile
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `feat/profile-page` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/components_lite/Profile.jsx`, `Frontend/src/components/components_lite/EditProfileModal.jsx` |
| **Dependencies** | Initial setup |

**Description**: Fully test the profile page and edit modal. Verify photo upload (Cloudinary), bio and skills update, resume link update, and change-password OTP flow.

**Acceptance Criteria:**
- [ ] Profile page shows user name, email, bio, skills, resume link, applied jobs count
- [ ] Edit modal pre-fills current values
- [ ] Photo upload sends to Cloudinary and updates avatar
- [ ] Skills can be added/removed
- [ ] Change password OTP flow works end-to-end

---

## 👤 Akshat — Beginner (Documentation, UI Polish & Testing)

### Responsibilities
- README and setup documentation
- Responsive UI improvements
- Form validation and small frontend components
- Bug fixes with clear scope
- Simple feature additions with mentorship

---

### TASK AK-01 — Setup Documentation & example.env Verification
| Field | Value |
|-------|-------|
| **Priority** | 🔴 High |
| **Branch** | `setup/initial-env-docs` |
| **Status** | ⬜ Not Started |
| **Files** | `JOB-PORTAL/Backend/example.env`, `README.md` |
| **Dependencies** | None (first task) |

**Description**: Verify that `example.env` lists all required environment variables. Follow the README setup instructions from scratch to check they are complete and accurate. Update any missing steps.

**Acceptance Criteria:**
- [ ] All env variables in `example.env` are documented with descriptions
- [ ] README setup section is complete and tested step-by-step
- [ ] No `.env` file committed to repo
- [ ] `example.env` is committed and up to date

---

### TASK AK-02 — Responsive UI Audit & Fixes
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `style/responsive-ui` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/components_lite/Navbar.jsx`, `Frontend/src/components/components_lite/Footer.jsx`, `Frontend/src/components/components_lite/Home.jsx`, `Frontend/src/index.css` |
| **Dependencies** | AK-01 |

**Description**: Test the app at mobile (375px), tablet (768px) and desktop (1280px) viewports. Fix any layout breaks, overflow issues, or hidden elements. Focus on Navbar, Footer, Home, Job cards, and Profile.

**Acceptance Criteria:**
- [ ] No horizontal scroll on mobile
- [ ] Navbar collapses properly on mobile (hamburger or drawer)
- [ ] Job cards layout properly on all screen sizes
- [ ] Footer displays correctly on mobile

---

### TASK AK-03 — Form Validation (Frontend)
| Field | Value |
|-------|-------|
| **Priority** | 🟡 Medium |
| **Branch** | `feat/form-validation` |
| **Status** | ⬜ Not Started |
| **Files** | `Frontend/src/components/authentication/Register.jsx`, `Frontend/src/components/authentication/Login.jsx` |
| **Dependencies** | AK-01 |

**Description**: Add client-side form validation to Login and Register forms. Show inline error messages before the API call is made (email format, password length, required fields).

**Acceptance Criteria:**
- [ ] Register: email format, password ≥ 8 chars, all required fields highlight if empty
- [ ] Login: email format required, password required
- [ ] Errors shown inline below each field (not just a toast)
- [ ] Form cannot be submitted while a request is in progress (disable button)

---

### TASK AK-04 — Basic Bug Fixes & Quality
| Field | Value |
|-------|-------|
| **Priority** | 🟢 Low |
| **Branch** | `fix/ui-bugs` |
| **Status** | ⬜ Not Started |
| **Files** | Any identified during testing |
| **Dependencies** | AK-01 |

**Description**: Document and fix small UI bugs found during testing — broken links, console errors, typos, missing loading states. Each fix should be a separate commit with a clear message.

**Acceptance Criteria:**
- [ ] No broken internal navigation links
- [ ] No uncaught console errors on main flows (home, jobs, login, register)
- [ ] Loading spinners shown during API calls
- [ ] Properly handle "not found" routes (404 page or redirect)

---

## 📋 Task Summary Table

| Task | Owner | Priority | Branch | Status |
|------|-------|----------|--------|--------|
| AB-01 Auth Flow Audit | Abhinav | 🔴 High | `feat/auth-improvements` | ⬜ |
| AB-02 Recruiter API | Abhinav | 🔴 High | `feat/recruiter-api` | ⬜ |
| AB-03 Backend Validation | Abhinav | 🟡 Medium | `feat/backend-validation` | ⬜ |
| AB-04 README & API Docs | Abhinav | 🟡 Medium | `docs/api-and-readme` | ⬜ |
| AY-01 Job Search & Filter | Abhay | 🔴 High | `feat/job-search-filter` | ⬜ |
| AY-02 Application Workflow | Abhay | 🔴 High | `feat/application-workflow` | ⬜ |
| AY-03 Saved/Bookmark Jobs | Abhay | 🟡 Medium | `feat/saved-jobs` | ⬜ |
| AY-04 Profile & Edit | Abhay | 🟡 Medium | `feat/profile-page` | ⬜ |
| AK-01 Setup Docs | Akshat | 🔴 High | `setup/initial-env-docs` | ⬜ |
| AK-02 Responsive UI | Akshat | 🟡 Medium | `style/responsive-ui` | ⬜ |
| AK-03 Form Validation | Akshat | 🟡 Medium | `feat/form-validation` | ⬜ |
| AK-04 Bug Fixes | Akshat | 🟢 Low | `fix/ui-bugs` | ⬜ |

---

## ✅ Commit Message Convention

```
feat: add job search filters
fix: handle API 401 error on job apply
style: fix mobile navbar overflow
docs: update setup instructions in README
refactor: extract OTP validation to utility function
test: add register form validation tests
```

---

*Last updated: 2026-10-27 | Status key: ⬜ Not Started | 🔄 In Progress | ✅ Done*
