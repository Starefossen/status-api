'use strict';

const assert = require('assert');
const request = require('supertest');
const app = request(require('./').app);

process.env.NODE_ENV = 'testing';

describe('/api/v1', () => {
  describe('checks', () => {
    it('returns foo', (done) => {
      app.get('/api/v1/checks')
        .expect(200)
        .expect('access-control-allow-origin', '*')
        .expect('content-type', 'application/json; charset=utf-8')
        .expect(res => {
          assert.equal(typeof res.body.checks, 'object');
          assert.deepEqual(res.body.counts, {
            total: 43,
            limited: 12,
            filtered: 12,
          });

          for (const check of res.body.checks) {
            assert(check.tags instanceof Array);
          }
        })
        .end(done);
    });
  });
});
