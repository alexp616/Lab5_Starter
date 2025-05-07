// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// TODO - Part 2
// isPhoneNumber tests
test('111-111-1111 is a valid phone number', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});

test('123 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123 456-7890')).toBe(true);
});

test('banana isnt a valid phone number', () => {
  expect(isPhoneNumber('banana')).toBe(false);
});

test('2 isnt a valid phone number', () => {
  expect(isPhoneNumber(2)).toBe(false);
});


// isEmail tests
test('alpan@ucsd.edu is a valid email', () => {
  expect(isEmail('alpan@ucsd.edu')).toBe(true);
});

test('a@f.cd is a valid email', () => {
  expect(isEmail('a@f.cd')).toBe(true);
});

test('awefawef isnt a valid email', () => {
  expect(isEmail('awefawef')).toBe(false);
});

test('a@b.c is a valid email', () => {
  expect(isEmail('a@b.c')).toBe(false);
});


// isStrongPassword tests
test('a234 is valid password', () => {
  expect(isStrongPassword('a234')).toBe(true);
});

test('a23456789012345 is valid password', () => {
  expect(isStrongPassword('a23456789012345')).toBe(true);
});

test('12345 isnt a valid password', () => {
  expect(isStrongPassword('12345')).toBe(false);
});

test('abc isnt a valid password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});


// isDate tests
test('12/34/5678 is valid date', () => {
  expect(isDate('12/34/5678')).toBe(true);
});

test('1/3/5678 is valid date', () => {
  expect(isDate('1/3/5678')).toBe(true);
});

test('12/34/567 isnt valid date', () => {
  expect(isDate('12/34/567')).toBe(false);
});

test('1/a4/1234 isnt valid date', () => {
  expect(isDate('1/a4/1234')).toBe(false);
});

// isHexColor tests
test('#fff is valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('#0f0f0f is valid hex color', () => {
  expect(isHexColor('#0f0f0f')).toBe(true);
});

test('abcd isnt valid hex color', () => {
  expect(isHexColor('abcd')).toBe(false);
});

test('#ffff isnt valid hex color', () => {
  expect(isHexColor('#ffff')).toBe(false);
});