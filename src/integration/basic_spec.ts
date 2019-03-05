import {getColumn} from "../support/selectors";

describe("Page structure tests", function() {
    before(function() {
        cy.visit("/");
    });

    it("Verify app logo visible", function() {
        cy.get(".App-logo").should("be.visible");
        // TODO: add logo img verification here
    });

    it("Verify app title text", function() {
        cy.get(".App-title").should("contain", "OpenOceanStudio: Crew Applications");
    });

    it("Verify filters form", function() {
        cy.get("#filters").should($f => {
            expect($f, "Filters doesn't contain correct Name text").to.contain("Name:");
            expect($f, "Filters doesn't contain correct City text").to.contain("City:");
        });

        // Verify filters contains correct text
        cy.get("#filters").within(() => {
                cy.get("button[type='submit']").invoke("text").should("contain", "Submit");
                cy.get("button").eq(1).invoke("text").should("contain", "Clear");
            });
    });

    it("Verify table with 3 columns are displayed", function() {
        cy.get(`${getColumn(1)} h2`).should("contain", "Applied");
        cy.get(`${getColumn(2)} h2`).should("contain", "Interviewing");
        cy.get(`${getColumn(3)} h2`).should("contain", "Hired");
    });
});
