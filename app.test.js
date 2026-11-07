const test = require('node:test');
const assert = require('node:assert');
const { hitungIps } = require('./app');

test('IPS satu mata kuliah', () => {
  assert.strictEqual(hitungIps([{ sks: 3, bobot: 4 }]), 4);
});

test('IPS tanpa nilai adalah 0', () => {
  assert.strictEqual(hitungIps([]), 0);
});

test('IPS dua mata kuliah dengan SKS sama', () => {
  assert.strictEqual(hitungIps([{ sks: 3, bobot: 4 }, { sks: 3, bobot: 2 }]), 3);
});
