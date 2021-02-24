const { ValidateID, isValidDate } = require("../src/idValidator");
//specs
describe('ValidateID', function() {
	it('should return true if the ID number is valid', function() {
		expect(ValidateID('2001014800086')).toBe(true);
	});

	it('should return true if the ID number is valid', function() {
		expect(ValidateID('2909035800085')).toBe(true);
	});

	it('should return false if the date digits ia above 31', function() {
		expect(ValidateID('2909325800085')).toBe(false);
	});

	it('should return false if the citizen digit © is not 0 or 1', function() {
		expect(ValidateID('2909035800285')).toBe(false);
	});

	it('should return false if you rearrange the ID number', function() {
		expect(ValidateID('0021014800086')).toBe(false);
	});

	it('should return False if you pass it a string that is too short', function() {
		expect(ValidateID('20010148000')).toBe(false);
	});

	it('should return False if you pass it a string that is too long', function() {
		expect(ValidateID('20010148000862020')).toBe(false);
	});

	it('should return False if you pass it a string that contains characters that aren’t numbers', function() {
		expect(ValidateID('200101A4800086')).toBe(false);
	});

	it('should return false if it takes any numbers not corresponding to the id format', function() {
		expect(ValidateID('1234567899876')).toBe(false);
	});

	it('should check for leap years', function() {
		expect(isValidDate(29, 02, 2020)).toBe(true);
		expect(isValidDate(29, 02, 2024)).toBe(true);
		expect(isValidDate(29, 02, 2021)).toBe(false);
	});

	it('should check days in month', function() {
		expect(isValidDate(30, 04, 2021)).toBe(true);
		expect(isValidDate(31, 04, 2021)).toBe(false);
	});
});
