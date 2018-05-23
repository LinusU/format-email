const assert = require('assert')
const formatEmail = require('./')

const testCases = [
  {
    from: 'linus@folkdatorn.se',
    to: 'test@example.com',
    subject: 'Hello, World!',
    body: 'Hello, World!\n\nThis is a very very long line that I hope will trigger some special handling of very long lines in emails.',
    result: 'Content-Type: text/plain; charset="us-ascii"\r\nMIME-Version: 1.0\r\nContent-Transfer-Encoding: 7bit\r\nFrom: linus@folkdatorn.se\r\nTo: test@example.com\r\nSubject: Hello, World!\r\n\r\nHello, World!\r\n\r\nThis is a very very long line that I hope will trigger some special handling of very long lines in emails.'
  },
  {
    from: 'linus@folkdatorn.se',
    to: 'test@example.com',
    subject: 'Hello, Unicode!',
    body: 'Hej jag heter Linus Unnebäck, här är lite svenska ord med konstiga bokstäver. Det låg en ö i en å.',
    result: 'Content-Type: text/plain; charset="utf-8"\r\nMIME-Version: 1.0\r\nContent-Transfer-Encoding: base64\r\nFrom: linus@folkdatorn.se\r\nTo: test@example.com\r\nSubject: Hello, Unicode!\r\n\r\nSGVqIGphZyBoZXRlciBMaW51cyBVbm5lYsOkY2ssIGjDpHIgw6RyIGxpdGUgc3ZlbnNrYSBvcmQg\r\nbWVkIGtvbnN0aWdhIGJva3N0w6R2ZXIuIERldCBsw6VnIGVuIMO2IGkgZW4gw6Uu\r\n'
  }
]

for (const testCase of testCases) {
  assert.strictEqual(formatEmail(testCase.from, testCase.to, testCase.subject, testCase.body), testCase.result)
}
