export async function GET(request) {
    const users = [
        { id: 2, name: 'John' },
        { id: 2, name: 'John' },
        { id: 2, name: 'John' },
    ]

    return new Response(JSON.stringify(users))
}