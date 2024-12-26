import { Hono } from "hono";

const testingRouter = new Hono();

testingRouter.get("/", async (c) => {
    return c.json({ message: "This is a testing route returning JSON" })
});

export default testingRouter;