import Validator from "../js/app";

test("Test 1", () => {
  const received = Validator.validateUsername("Ksenia");
  expect(received).toBeTruthy();
});

test("Test 2", () => {
  const received = Validator.validateUsername("Ksenia222");
  expect(received).toBeFalsy();
});

test("Test 3", () => {
  const received = Validator.validateUsername("Ksеnia");
  expect(received).toBeFalsy();
});

test("Tst 4", () => {
  const received = Validator.validateUsername("KSENIA");
  expect(received).toBeTruthy();
});

test("Test 5", () => {
  const received = Validator.validateUsername("25Kseni");
  expect(received).toBeFalsy();
});

test("Test 6", () => {
  const received = Validator.validateUsername("_Ksenia");
  expect(received).toBeFalsy();
});

test("test 7", () => {
  const received = Validator.validateUsername("Ksenia-");
  expect(received).toBeFalsy();
});

test("Test 8", () => {
  const received = Validator.validateUsername("-Ksenia");
  expect(received).toBeFalsy();
});

test("Test 9", () => {
  const received = Validator.validateUsername("Ksenia_");
  expect(received).toBeFalsy();
});

test("Test 10", () => {
  const received = Validator.validateUsername("Kse123456nia");
  expect(received).toBeFalsy();
});

test("Test 11 ", () => {
  const received = Validator.validateUsername("Kse123nia");
  expect(received).toBeTruthy();
});