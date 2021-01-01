# Render My Markdown

> Render any markdown on a white page through a simple url

⚠️ REMEMBER TO URL ENCODE YOUR MARKDOWN ⚠️

```javascript
const markdown = '...'

const url = `https://[DOMAIN_COMING_SOON]?markdown=${encodeURIComponent(markdown)}`

<a href={markdown}>Share markdown</a>
```