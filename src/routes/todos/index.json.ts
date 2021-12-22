import type { RequestHandler } from "@sveltejs/kit";
//TODO: INSERT FROM DATABASE
let todos: Todo[]= [];

export const get: RequestHandler = ()=> {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    //console.log(request.body.get("text"));
    todos.push({
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}