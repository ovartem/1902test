import {filter, getColumn, users} from "../support/selectors";

describe("User search tests", function() {
    const suiteContxt = {} as {userData: Array<{id: number, city: string, name: string}>};
    before(function() {
        cy.fixture("users.json").as("usersData");
        cy.get("@usersData").then(data => suiteContxt.userData = data as any);
        cy.visit("/");
    });

    beforeEach(function() {
        cy.get(filter.clearBtn).click();
        cy.get(filter.nameTxtField).clear();
        cy.get(filter.cityTxtField).clear();
    });

    it("Perform search by first part of the name", function() {
        const user = suiteContxt.userData[0],
            searchText = user.name.split(" ")[0];
        cy.get(filter.nameTxtField).type(searchText);
        cy.get(filter.submitBtn).click();

        cy.get(`${getColumn(1)} ${users.info}`).eq(0).within(() => { // TODO: add verification if user is present in that column
            cy.get(users.avatar).should("be.visible"); // TODO: add verification of user photo
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });
    });

    it("Perform search by second part of the name", function() {
        const user = suiteContxt.userData[0],
            searchText = user.name.split(" ")[1];
        cy.get(filter.nameTxtField).type(searchText);
        cy.get(filter.submitBtn).click();

        cy.get(`${getColumn(1)} ${users.info}`).eq(0).within(() => { // TODO: add verification if user is present in that column
            cy.get(users.avatar).should("be.visible"); // TODO: add verification of user photo
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });
    });

    it("Perform search by city", function() {
        const user = suiteContxt.userData[0],
            searchText = user.city;
        cy.get(filter.cityTxtField).type(searchText);
        cy.get(filter.submitBtn).click();

        cy.get(`${getColumn(1)} ${users.info}`).eq(0).within(() => { // TODO: add verification if user is present in that column
            cy.get(users.avatar).should("be.visible"); // TODO: add verification of user photo
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });
    });

    it("Perform search by name and city", function() {
        const user = suiteContxt.userData[0],
            searchTextName = user.name,
            searchTextCity = user.city;
        cy.get(filter.cityTxtField).type(searchTextCity);
        cy.get(filter.nameTxtField).type(searchTextName);
        cy.get(filter.submitBtn).click();

        cy.get(`${getColumn(1)} ${users.info}`).should("not.be.visible");
    });
});
