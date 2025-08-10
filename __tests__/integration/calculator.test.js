import request from "supertest";
import server from "../../src/server";

describe("Calculator API", () => {
    it("should calculate percentage", async () => {
        const response = await request(server)
            .get("/calculator/50/percentage/200");
        expect(response.body.result).toBe(25);
    });
});