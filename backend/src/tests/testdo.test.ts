import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
//@ts-ignore
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test', () => {
  it('should return 2', async () => {
    expect(1 + 1).to.equal(2);
  });
  afterEach(() => {
    sinon.restore();
  });
});
