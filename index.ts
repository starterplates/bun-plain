import { Hono } from 'hono'
import testingRouter from './routes/testing'

console.log("------------- " + Bun.env.NODE_ENV + " -------------")

const app = new Hono()

app.get("/", async (c) => c.text("Hello from Bun! Visit /testing for a test route."))
app.route("/testing", testingRouter)

export default {
    port: Bun.env.PORT || 8080,
    fetch: app.fetch,
} 