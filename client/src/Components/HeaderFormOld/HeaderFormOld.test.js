import Person from './Person.js'


describe('first', () => {

    beforeEach(() => {
        person1 = new Person({
            first_name: "first_name100",
            last_name: "last_name100",
            nationality: "China",
            gender: "Female",
            tagline: "tagline1",
            profile_headline: "profile_headline1",
            linkedin_url: "linkedin1.com",
            github_url: "github1.com",
        });

        handleCancel = jest.fn();
    });

    afterEach(() => {
        person1 = undefined;
    })

    it('should first', () => { second })
})