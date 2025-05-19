# Docusaurus

This is a template to get a basic Docusaurus site up and running quickly.  
By default, it deploys via GitHub Actions to GitHub Pages.

---

## GitHub Pages
To get started:

1\. Click the `Use this template` button (top-right).  
2\. Choose `Create a new repository`.  
3\. Enable GitHub Pages from `Settings` > `Pages` > `Deploy from Branch` > `gh-pages`  
4\. Trigger the GitHub Actions workflow by editing any Markdown file.  
5\. Visit your published site at: `https://<your-username>.github.io/<your-repo-name>/`  
6\. For example: https://therepos.github.io/docusaurus/

--- 

## Local Deployment
1\. To deploy it locally::  
```bash
git clone https://github.com/therepos/docusaurus.git
```

2\. Install npm packages:
```bash
cd docusaurus
npm install
npm run start
```

3\. Deploy locally:
```bash
npm run build
```

4\. Push to GitHub repo:
```bash
git add . 
git commit -m "Updates"
git push
```

5\. (Optional) Preview site locally only:
```bash
npm run serve
```

---

## References
[Official Docusaurus Guide](https://docusaurus.io/docs)
