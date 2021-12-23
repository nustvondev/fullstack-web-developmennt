import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api"

export const get: RequestHandler = (request)=> {
    return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) => {
    //console.log(request.body.get("text"));
    return api(request, {
        uid: `${Date.now()}`,//TODO: notice uid from the database
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });
}