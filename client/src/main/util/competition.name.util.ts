export const getDefaultCompetitionName = () => {
    let date = new Date();
    return "Scrambles for " + date.toISOString().split("T")[0];
};

export const competitionName2Id = (competitionName: string) => {
    // fold accents to ASCII before stripping so accented characters are not dropped

    // TODO: only folds accents NFD decomposes into a base letter + combining mark
    // (á -> a); characters it doesn't decompose (ø, ß, etc.) are still dropped
    return competitionName
        .normalize("NFD") // split into base char and accent
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[\W]/gi, "");
};
