# Yadnesh Patil — AWS Cloud Portfolio

This repository powers the main portfolio website:

`https://yadnesh-09.github.io/`

It provides one public link for viewing all AWS, cloud, DevOps, serverless and AI projects.

## Files

```text
Yadnesh-09.github.io/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── favicon.svg
├── PROJECT-CHECKLIST.md
└── README.md
```

## Update a project

Open `script.js` and find the `projects` array.

Each project contains:

```javascript
{
  title: "Project name",
  description: "Short project description",
  services: ["S3", "Lambda"],
  categories: ["serverless"],
  status: "Completed",
  liveUrl: "",
  repositoryUrl: ""
}
```

After the project is deployed:

1. Add the public website URL to `liveUrl`.
2. Add the GitHub repository URL to `repositoryUrl`.
3. Change the status to `Live`.
4. Commit and push.

## Deploy through GitHub Pages

The GitHub repository must be named:

```text
Yadnesh-09.github.io
```

Push these files to the `main` branch. The site will use:

```text
https://yadnesh-09.github.io/
```

## Local preview

Open `index.html` directly, or run:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Security

Never upload:

- AWS access keys
- Secret access keys
- `.pem` files
- `.env` files
- Database passwords
- Admin access keys
- Private API credentials
