import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    //Arrange: setting up any data that needs to be tested
    const birthYear = 1986;
    //Act: running the code that needs to be tested
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    //Assert: making claims about what we expect the outcome to be
    expect(ageOfPerson).toBe(38);
  });
});
