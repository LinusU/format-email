# Format Email

Format emails according to RFC 5322. Useful for formatting emails before sending them to the Gmail API.

## Installation

```sh
npm install --save format-email
```

## Usage

```js
const formatEmail = require('format-email')

console.log(formatEmail('linus@folkdatorn.se', 'test@example.com', 'Hello, World!', 'This is a small email.'))
// Content-Type: text/plain; charset="us-ascii"
// MIME-Version: 1.0
// Content-Transfer-Encoding: 7bit
// From: linus@folkdatorn.se
// To: test@example.com
// Subject: Hello, World!
//
// This is a small email.

console.log(formatEmail('linus@folkdatorn.se', 'test@example.com', 'Hello, Unicode!', 'This is an 📨.'))
// Content-Type: text/plain; charset="utf-8"
// MIME-Version: 1.0
// Content-Transfer-Encoding: base64
// From: linus@folkdatorn.se
// To: test@example.com
// Subject: Hello, Unicode!
//
// VGhpcyBpcyBhbiDwn5OoLg==
```

## API

### `formatEmail (from: string, to: string, subject: string, body: string): string`

Format an email according to RFC 5322. Returns the entire email as a string.
