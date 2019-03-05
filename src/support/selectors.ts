export const getColumn = (ind: number): string => `.App-container > :nth-child(${ind})`; // starts with 1
export const filter = {
    nameTxtField: "#filters #name",
    cityTxtField: "#filters #city",
    submitBtn: "#filters button[type='submit']",
    clearBtn: "#filters button[type='button']",
};

export const users = {
    info: ".CrewMember-info",
    avatar: ".CrewMemeber-photo",
    name: ".CrewMemeber-name div:nth-child(1)",
    city: ".CrewMemeber-name div:nth-child(2)", // TODO: seems like a bug as city is part of "CrewMemeber-name"
    toolbar: ".CrewMember-toolbar",
    downBtn: ":not(.CrewMember-up)", // TODO: refactor this selector
    upBtn: ".CrewMember-up",
};