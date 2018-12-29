# Sanity Content Studio

```bash
npm install
npm start
```

You need a sanity.json file in `/cms/`.

```json
{
  "root": true,
  "project": {
    "name": "artemis"
  },
  "api": {
    "projectId": "<Project-Id>",
    "dataset": "production"
  },
  "plugins": [
    "@sanity/base",
    "@sanity/components",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool"
  ],
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema.js"
    }
  ]
}
```
