


const assert = require('assert'); // assert module
const expect = require('chai').expect //chai module
const request = require('supertest'); // supertest module
const app = require('../app') // application


describe('Unit testing the /home route', function() {

  it('should return OK status', function() {
    return request(app)
      .get('/home') 
      .then(function(response){
          assert.equal(response.status, 200)
      })
  });

});


it('should return message on rendering', function() {
  return request(app)
      .get('/home')
      .then(function(response){
          expect(response.text).to.contain('Welcome Home Dude !!');
      })
});



/*
from our api we could have a route called people. From there we expect it to have two properties, 
name and id. We also want to have a status code 200. We create a  async function because  we want  
to await our promise that we get from our API. We check for our length of the body to be 2, which should be name  
and  id, with expect. Then we use expect again two check  that the propertys is 'id' and 'name'.
We also check the status code to be 200 which indicates that the request has succeed.
*/

describe("GET /people", () => {
  test("It responds with an array of people", async () => {
    const response = await request(app).get("/people");
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.statusCode).toBe(200);
  });
});

/*
We also could make a test for adding a new person to our api which we do with POST. As before 
we create an async function to await our promse. We then POST to the people route and sends in a 
new person with the name: John.

Then we make sure that we add it correctly buy  using expect  to se that the 
*/

describe("POST /people", () => {
  test("It responds with the newly created person", async () => {
    const newPerson = await request(app)
      .post("/people")
      .send({
        name: "John"
      });

    expect(newPerson.body).toHaveProperty("id");
    expect(newPerson.body.name).toBe("John");
    expect(newPerson.statusCode).toBe(200);

    // make sure we have 3 people now
    const response = await request(app).get("/people");
    expect(response.body.length).toBe(3);
  });
});
