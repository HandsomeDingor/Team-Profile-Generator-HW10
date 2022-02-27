const Intern = require("../lib/Intern");

test('creates an Inter object', () => {
  const intern = new Intern('junjie', 1, 'email@gmail.com', 'Bootcamps');

  expect(intern.name).toBe('junjie');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe('email@gmail.com');
  expect(intern.school).toBe('Bootcamps');
})

test("Test school", () => {
  const intern = new Intern('junjie', 1, 'email@gmail.com', 'Bootcamps');
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Test role", () => {
  const intern = new Intern('junjie', 1, 'email@gmail.com', 11);
  expect(intern.getRole()).toBe('Intern');
});