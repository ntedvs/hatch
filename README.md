# Hatch

A dead man's switch for unpaid client websites. Include the script, set a date — if you don't get paid, the site slowly fades to invisible.

## Usage

```html
<script src="https://hatch.ntedvs.com/hatch.js?date=2026-01-01"></script>
```

## Parameters

| Param | Required | Default | Description |
|-------|----------|---------|-------------|
| `date` | Yes | — | When the fade begins (YYYY-MM-DD) |
| `percentage` | No | `1` | Opacity lost per day (%) |

## Example

With `?date=2026-01-01&percentage=2`, the site loses 2% opacity per day starting Jan 1, 2026. After 50 days it's fully invisible.
