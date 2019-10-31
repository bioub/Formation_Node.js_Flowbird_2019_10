const authenticate = require('../../middlewares/authenticate');
const user = require('../../models/user');
//const assert = require('assert');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
// const assert = chai.assert;
const expect = chai.expect;
// chai.should();
chai.use(sinonChai);

describe('authenticate middleware', () => {
  beforeEach(() => {
    user.tokens.push('12345');
  });

  afterEach(() => {
    user.tokens.pop();
  });

  it('should return status 401 when token is missing', () => {
    const req = {
      headers: {}
    };
    const res = {
      json: sinon.spy(),
    };
    const next = () => {};

    authenticate(req, res, next);
    // assert.equal(res.statusCode, 401);
    expect(res.statusCode).to.equals(401);
    // expect(res.statusCode).not.to.equals(200);
    expect(res.json).to.have.been.calledOnceWithExactly({
      msg: 'Unauthorized',
    });
    // res.statusCode.should.equal(401);
  });

  it('should call next when token is valid', () => {
    const req = {
      headers: {
        authorization: '12345'
      }
    };
    const res = {};
    const next = sinon.spy();

    authenticate(req, res, next);
    expect(next).to.have.been.calledOnceWithExactly();
  });
});
