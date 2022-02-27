const Employee = require("../lib/Employee");

test('creates a Employee object', () => {
  const employee = new Employee('junjie', 1, 'email@gmail.com');

  expect(employee.name).toBe('junjie');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('email@gmail.com');
})

test("Test name", () => {
  const employee = new Employee('junjie', 1, 'email@gmail.com');
  expect(employee.getName()).toEqual(expect.any(String));
});

test("Test role", () => {
  const employee = new Employee('junjie', 1, 'email@gmail.com');
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("Test school", () => {
  const employee = new Employee('junjie', 1, 'email@gmail.com');
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("Test role", () => {
  const employee = new Employee('junjie', 1, 'email@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});