export default async function Valid(ctx: any) {
	const validFile = await Deno.readTextFile("./lists/valid.txt");
	const validWords = validFile.split("\r\n");

	const choicesFile = await Deno.readTextFile("./lists/choices.txt");
	const choicesWords = choicesFile.split("\r\n");

	const query = ctx.request.url.searchParams.get("word");

	if (!query || query.trim() === "") {
		ctx.response.body = JSON.stringify({
			error: "no supplied word in the URL parameters to validate 😔",
		});
		return;
	}

	ctx.response.body = JSON.stringify({
		valid: validWords.includes(query) || choicesWords.includes(query),
	});
}
