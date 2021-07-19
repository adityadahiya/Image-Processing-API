import Request from 'request';

describe('Server', () => {
  describe('GET /image 200 status', () => {
    let status: number;
    beforeAll((done) => {
      Request.get(
        'http://localhost:3000/image?name=palmtunnel&width=600&height=400',
        (error, response, body) => {
          status = response.statusCode;
          done();
        }
      );
    });
    it('Status 200', () => {
      expect(status).toBe(200);
    });
  });

  describe('GET /image 404 status - File not found', () => {
    let status: number;
    beforeAll((done) => {
      Request.get(
        'http://localhost:3000/image?name=almtunnel&width=600&height=400',
        (error, response, body) => {
          console.log(response.statusCode);
          status = response.statusCode;
          done();
        }
      );
    });
    it('Status 404', () => {
      expect(status).toBe(404);
    });
  });
});
