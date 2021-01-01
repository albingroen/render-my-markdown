# Render My Markdown

> Render any markdown through a simple url

```javascript
const markdown = '# Title'

const url = `https://rmmd.link/?markdown=${encodeURIComponent(markdown)}`

<a href={markdown}>Share markdown</a>
```

## Query parameters

| Name     | Type    | Required | Default   | Description                                                          |
|----------|---------|----------|-----------|----------------------------------------------------------------------|
| markdown | String  | true     | undefined | A raw markdown string that will be rendered as HTML on the page.     |
| darkMode | Boolean | false    | false     | Setting this to true will render a dark page instead of a light one. |