import { competitionName2Id } from "../main/util/competition.name.util";

describe("competitionName2Id", () => {
    it("transliterates accented Latin characters", () => {
        expect(competitionName2Id("Fátima en Montevideo 2024")).toBe(
            "FatimaenMontevideo2024"
        );

        expect(competitionName2Id("Cañada 2024")).toBe("Canada2024");

        expect(competitionName2Id("Ürünü Open 2022")).toBe("UrunuOpen2022");
    });

    it("leaves plain ASCII names unchanged apart from removing spaces", () => {
        expect(competitionName2Id("WCA World Championship 2026")).toBe(
            "WCAWorldChampionship2026"
        );
    });
});
