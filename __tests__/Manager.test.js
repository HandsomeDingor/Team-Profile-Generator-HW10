const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('junjie', 1, 'email@gmail.com', 11);

    expect(manager.name).toBe('junjie');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("Test officeNumber", () => {
    const manager = new Manager('junjie', 1, 'email@gmail.com', 11);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("Test role", () => {
    const manager = new Manager('junjie', 1, 'email@gmail.com', 11);
    expect(manager.getRole()).toBe('Manager');
});