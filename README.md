# Render My Markdown

> Render any markdown through a simple url

## Demos

[Changelog example](https://rmmd.link/?markdown=%23%20Week%2036%20new%20features%0A%23%23%20Features%0A%0A-%20Add%20more%20buttons%20for%20accessibility%0A%20%20-%20For%20creating%20note%0A%20%20-%20For%20browsing%20notes%20in%20edit%20mode%0A-%20Easier%20login%20and%20signup%0A-%20Default%20note%20in%20%22logged%20out%22%20view%0A-%20Clickable%20checkboxes%0A-%20Use%20tooltips%20to%20display%20shortcut%0A-%20Dynamic%20spotlight%20%2F%20command%20palette%0A-%20Resize%20right%20pane%0A%0A%23%23%20Bug%20fixes%0A%0A-%20Block%20delete%20modal%20when%20there%20are%20no%20active%20or%20select%20notes%0A-%20Fix%20html%20showing%20up%20sometimes%20in%20list%20view%0A-%20Block%20enter%20click%20in%20heading&darkMode=true)

![Changelog example](https://res.cloudinary.com/albin-groen/image/upload/f_auto/v1609523144/CleanShot_2021-01-01_at_18.42.52_r6aaz8.png)

## Example usage

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