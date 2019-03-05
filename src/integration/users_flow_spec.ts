import {getColumn, users} from "../support/selectors";

describe("Users flow tests", function() {
    const suiteContxt = {} as {userData: Array<{id: number, city: string, name: string}>};
    before(function() {
        cy.fixture("users.json").as("usersData");
        cy.get("@usersData").then(data => suiteContxt.userData = data as any);
        cy.visit("/");
    });

    it("Verify applied column user card", function() {
        const user = suiteContxt.userData[0];
        // TODO: move this verification to commands
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

    it("Move user card from applied to interviewing column", function() {
        const user = suiteContxt.userData[0];

        cy.get(`${getColumn(1)} ${users.toolbar}`).eq(0).within(() => { // TODO: refactor selectors for more convenient use
            cy.get(users.upBtn).click();
        });

        cy.get(`${getColumn(2)} ${users.info}`).eq(0).within(() => { // TODO: refactor accessing specific elements
            cy.get(users.avatar).should("be.visible"); // TODO: add verification of user photo
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });

        cy.get(`${getColumn(2)} ${users.toolbar}`).eq(0).within(() => {
            cy.get(users.downBtn).should("be.visible");
        });
    });

    it("Move user card from applied to hired column", function() {
        const user = suiteContxt.userData[1];

        cy.get(`${getColumn(1)} ${users.toolbar}`).eq(0).within(() => {
            cy.get(users.upBtn).click();
        });

        cy.get(`${getColumn(2)} ${users.toolbar}`).eq(1).within(() => {
            cy.get(users.upBtn).click();
        });

        cy.get(`${getColumn(3)} ${users.info}`).eq(1).within(() => {
            cy.get(users.avatar).should("be.visible"); // TODO: add verification of user photo
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });

        cy.get(`${getColumn(3)} ${users.toolbar}`).eq(1).within(() => {
            cy.get(users.downBtn).should("be.visible");
            cy.get(users.upBtn).should("not.be.visible");
        });
    });

    it("Move user card from hired to applied column", function() {
        const user = suiteContxt.userData[4];

        cy.get(`${getColumn(3)} ${users.toolbar}`).eq(0).within(() => {
            cy.get(users.downBtn).click();
        });

        cy.get(`${getColumn(2)} ${users.toolbar}`).eq(0).within(() => {
            cy.get(users.downBtn).click();
        });

        cy.get(`${getColumn(1)} ${users.info}`).eq(0).within(() => {
            cy.get(users.avatar).should("be.visible");
            cy.get(users.city).should("be.visible").should($city => {
                expect($city).to.contain(user.city);
            });
            cy.get(users.name).should("be.visible").should($name => {
                expect($name).to.contain(user.name);
            });
        });

        cy.get(`${getColumn(1)} ${users.toolbar}`).eq(0).within(() => {
            cy.get(users.upBtn).should("be.visible");
            cy.get(users.downBtn).should("not.be.visible");
        });
    });
});
