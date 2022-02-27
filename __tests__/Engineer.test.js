const Engineer = require("../lib/Engineer");

test('creates an Engineer object', () => {
  const engineer = new Engineer('junjie', 1, 'email@gmail.com', 'https://github.com/HandsomeDingor');

  expect(engineer.name).toBe('junjie');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe('email@gmail.com');
  expect(engineer.github).toBe('https://github.com/HandsomeDingor');
})

test("Test school", () => {
  const engineer = new Engineer('junjie', 1, 'email@gmail.com', 'https://github.com/HandsomeDingor');
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("Test role", () => {
  const engineer = new Engineer('junjie', 1, 'email@gmail.com', 'https://github.com/HandsomeDingor');
  expect(engineer.getRole()).toBe('Engineer');
});