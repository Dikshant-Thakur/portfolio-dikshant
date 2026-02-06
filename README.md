# Hi, this is my personal website!

My name is Dikshant Thakur , I am robotics enthusiat doing my masters (about to graduate) from University of Genoa, Italy. 

This repo contains the source code to my personal website, which is inspired by Steven. 

Checkout my site at: 

## Development

To install dependencies: 
```bash
npm install
```

To run it locally: 
```bash
npm start
```

To build for production:
```bash
npm run build
```

## Deployment

This site is automatically deployed using GitHub Actions. When you push to the `production` branch, it will:

1. Build the Gatsby site
2. Deploy to GitHub Pages
3. Update your live site

Problem - 
Problem Kya Thi? 
Jab  shuruat mein repo daali, toh GitHub Pages by default Jekyll naam ka engine use kar raha tha aur wo repository ke /docs folder ya root mein index.html dhund raha tha. Kyunki project Gatsby (React framework) par hai, toh real files src folder mein thi. GitHub ko koi index.html nahi mili, isliye usne default mein README.md file ko hi website ki tarah dikhana shuru kar diya.
Solution - 
1. Bypassing Jekyll: Gatsby site ko GitHub ke default Jekyll engine ki zaroorat nahi hoti. Isliye root directory mein ek khali .nojekyll file banayi. Isse GitHub ko signal mila ki usey site build karne ki koshish nahi karni hai, balki humare custom system ka wait karna hai.
2. Switching to GitHub Actions: Pehle "Deploy from branch" use kar rahe the. Humne Settings > Pages mein ja kar source ko "GitHub Actions" par set kiya. Gatsby ek modern framework hai, toh GitHub Actions khud-ba-khud npm install aur gatsby build command chalata hai taaki static files (HTML/CSS) generate ho sakein.
3. Correcting the Deployment Branch: workflow production branch par set tha lekin aapka code main branch par ja raha tha ya mix ho raha tha. saara final code production branch par push kiya taaki GitHub Actions ka "Robot" trigger ho sake.

## Quality Assurance

### Pull Request Checks
Every Pull Request automatically triggers a build check to ensure:
- Dependencies install correctly
- Gatsby builds successfully
- No breaking changes are introduced

## Manual Deployment

Running this command in your local terminal will deploy your current branch to "main" branch and update gh pages. There is no checks, and forces update immediately

```bash
npm run deploy
```


