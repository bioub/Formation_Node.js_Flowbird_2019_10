const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiHttp);

const app = require('../app');
const Contact = require('../models/contact');

describe('functionnal tests', () => {
  describe('GET /api/contacts', () => {
    /** @type {import('sinon').SinonMock} */
    let mock;
    beforeEach(() => {
      mock = sinon.mock(Contact);
    });

    afterEach(() => {
      mock.verify();
    });

    it('should respond statusCode 200', async () => {
      mock.expects('find').once().resolves([{prenom: 'A'}, {prenom: 'B'}]);

      const res = await chai.request(app).get('/api/contacts');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal([{prenom: 'A'}, {prenom: 'B'}]);
    });
  });
});
