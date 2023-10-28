import { createServer } from "miragejs"

export default function server() {
  createServer({
    routes() {
      this.namespace = "api"
      this.urlPrefix = 'http://localhost:3000';

      this.get("/skills", () => {
        return {
          skills: [],
        }
      })
    },
  });
}
