# Docusaurus

This is a template to get a basic Docusaurus site up and running in no time.  
By default, the template is designed to deploy via GitHub Action on GitHub Pages.

## GitHub Pages
To get started:
1\. Click the `Use this template` button (top-right).  
2\. Choose `Create a new repository`.  
3\. Enable GitHub Pages from `Settings` > `Pages` > `Deploy from Branch` > `gh-pages`  
4\. Run GitHub workflow by editing any of the Markdown file.  
5\. Access the site at your designated repo page, for example: https://therepos.github.io/docusaurus/

## Local 
1\. To deploy it locally::  
```
git clone https://github.com/therepos/docusaurus.git
```

2\. Install npm packages:
```
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

## References
[Official Docusaurus Guide](https://docusaurus.io/docs)
