export const getDefaultCompetitionName = () => {
    let date = new Date();
    return "Scrambles for " + date.toISOString().split("T")[0];
};

export const competitionName2Id = (competitionName: string) => {
    // fold accents to ASCII before stripping so accented Latin characters are not dropped
    // (see thewca/tnoodle#923)

    // TODO: NFD only decomposes Latin diacritics, so
    // chars like æ or ø still won't match WCA transliteration
    return competitionName
        .normalize("NFD")                // split into base char and accent
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[\W]/gi, "");
};
