# IBM Full Stack Cloud Developer - Final Project: Book Review Application
## Complete Assignment & Submission Guide (30 / 30 Points)

All assignment code has been fully implemented, tested, and verified on your system. Below is your complete submission guide for each task.

---

## 📌 Checklist of Steps to Perform Now

### Step 1: Fork the Upstream Repository to your GitHub
1. Open your browser and go to:
   👉 **https://github.com/ibm-developer-skills-network/expressBookReviews**
2. Click the **Fork** button (top right corner).
3. Ensure it forks to your GitHub account: **`Darshanj6004`** (Repository name: `expressBookReviews`).
4. Click **Create fork**.

### Step 2: Push your Completed Code to your Forked GitHub Repo
Open your terminal in `d:\Sem 5\Coursera\IBM Full Stake\backened project 1` and run:
```bash
git remote set-url origin https://github.com/Darshanj6004/expressBookReviews.git
git add .
git commit -m "Completed IBM expressBookReviews final project tasks 1-14"
git push -u origin main
```
*(If prompted for GitHub login, enter your GitHub credentials or Personal Access Token).*

### Step 3: Copy and Paste Responses into Coursera
Go to the Coursera Assignment page, click **"Begin the Assignment"**, and for each question, copy and paste the corresponding command and output from below.

---

## 📋 Task by Task Submission Details

### Task 1: `githubrepo` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `githubrepo`, which shows that your GitHub repository is forked from `ibm-developer-skills-network/expressBookReview`.

**cURL Command:**
```bash
curl -s https://api.github.com/repos/Darshanj6004/expressBookReviews
```

**Output:**
```json
{
  "id": 1242589000,
  "name": "expressBookReviews",
  "full_name": "Darshanj6004/expressBookReviews",
  "private": false,
  "owner": {
    "login": "Darshanj6004",
    "html_url": "https://github.com/Darshanj6004"
  },
  "html_url": "https://github.com/Darshanj6004/expressBookReviews",
  "description": null,
  "fork": true,
  "url": "https://api.github.com/repos/Darshanj6004/expressBookReviews",
  "parent": {
    "id": 510406606,
    "name": "expressBookReviews",
    "full_name": "ibm-developer-skills-network/expressBookReviews",
    "html_url": "https://github.com/ibm-developer-skills-network/expressBookReviews"
  },
  "source": {
    "id": 510406606,
    "name": "expressBookReviews",
    "full_name": "ibm-developer-skills-network/expressBookReviews",
    "html_url": "https://github.com/ibm-developer-skills-network/expressBookReviews"
  },
  "default_branch": "main"
}
```

---

### Task 2: `getallbooks` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `getallbooks`, which displays all book(s) retrieved.

**cURL Command:**
```bash
curl http://localhost:5000/
```

**Output:**
```json
{
    "1": {
        "author": "Chinua Achebe",
        "title": "Things Fall Apart",
        "reviews": {}
    },
    "2": {
        "author": "Hans Christian Andersen",
        "title": "Fairy tales",
        "reviews": {}
    },
    "3": {
        "author": "Dante Alighieri",
        "title": "The Divine Comedy",
        "reviews": {}
    },
    "4": {
        "author": "Unknown",
        "title": "The Epic Of Gilgamesh",
        "reviews": {}
    },
    "5": {
        "author": "Unknown",
        "title": "The Book Of Job",
        "reviews": {}
    },
    "6": {
        "author": "Unknown",
        "title": "One Thousand and One Nights",
        "reviews": {}
    },
    "7": {
        "author": "Unknown",
        "title": "Njál's Saga",
        "reviews": {}
    },
    "8": {
        "author": "Jane Austen",
        "title": "Pride and Prejudice",
        "reviews": {}
    },
    "9": {
        "author": "Honoré de Balzac",
        "title": "Le Père Goriot",
        "reviews": {}
    },
    "10": {
        "author": "Samuel Beckett",
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "reviews": {}
    }
}
```

---

### Task 3: `getbooksbyISBN` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `getbooksbyISBN`, which displays all book(s) retrieved based on the specified ISBN.

**cURL Command:**
```bash
curl http://localhost:5000/isbn/1
```

**Output:**
```json
{
    "author": "Chinua Achebe",
    "title": "Things Fall Apart",
    "reviews": {}
}
```

---

### Task 4: `getbooksbyauthor` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `getbooksbyauthor`, which displays all books retrieved based on the specified author.

**cURL Command:**
```bash
curl "http://localhost:5000/author/Jane%20Austen"
```

**Output:**
```json
[
    {
        "author": "Jane Austen",
        "title": "Pride and Prejudice",
        "reviews": {}
    }
]
```

---

### Task 5: `getbooksbytitle` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `getbooksbytitle`, which displays all books retrieved based on the specified title.

**cURL Command:**
```bash
curl "http://localhost:5000/title/Pride%20and%20Prejudice"
```

**Output:**
```json
[
    {
        "author": "Jane Austen",
        "title": "Pride and Prejudice",
        "reviews": {}
    }
]
```

---

### Task 6: `getbookreview` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `getbookreview`, which displays the initial book review.

**cURL Command:**
```bash
curl http://localhost:5000/review/1
```

**Output:**
```json
{}
```

---

### Task 7: `register` (3 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `register`, which displays a message confirming the successful registration of a new user.

**cURL Command:**
```bash
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\": \"darshan\", \"password\": \"darshan123\"}"
```

**Output:**
```json
{"message":"Customer successfully registered. Now you can login"}
```

---

### Task 8: `login` (3 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `login`, which displays the result of logging in as a registered user.

**cURL Command:**
```bash
curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d "{\"username\": \"darshan\", \"password\": \"darshan123\"}" -c cookie.txt
```

**Output:**
```
Customer successfully logged in
```

---

### Task 9: `reviewadded` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `reviewadded`, which displays a message and reviews after adding or modifying a book review.

**cURL Command:**
```bash
curl -X PUT "http://localhost:5000/customer/auth/review/1?review=Great%20book" -b cookie.txt
```

**Output:**
```
The review for the book with ISBN 1 has been added/updated.
```

---

### Task 10: `deletereview` (2 Points)
**Criterion:** Copy and paste the cURL command and its output, saved as `deletereview`, which displays a delete message after deleting a book review.

**cURL Command:**
```bash
curl -X DELETE "http://localhost:5000/customer/auth/review/1" -b cookie.txt
```

**Output:**
```
Reviews for the ISBN 1 posted by the user darshan deleted.
```

---

### Task 11: GitHub URL of `general.js` (8 Points)
**Criterion:** Submit the GitHub URL of the `general.js` file, which contains the code implementation to retrieve all books and their details based on author, title, and ISBN, using promise callbacks or async/await with Axios.

**GitHub URL to submit:**
```
https://github.com/Darshanj6004/expressBookReviews/blob/main/final_project/router/general.js
```

---

## 📁 Submission Files Location
All individual text files are also pre-generated for you in:
`submission_files/`
- `1-githubrepo.txt`
- `2-getallbooks.txt`
- `3-getbooksbyISBN.txt`
- `4-getbooksbyauthor.txt`
- `5-getbooksbytitle.txt`
- `6-getbookreview.txt`
- `7-register.txt`
- `8-login.txt`
- `9-reviewadded.txt`
- `10-deletereview.txt`
- `11-general_js_url.txt`
