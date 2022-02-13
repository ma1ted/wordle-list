export default async function Choice(ctx: any) {
	const file = await Deno.readTextFile("./lists/choices.txt");
	const words = file.split("\r\n");

	ctx.response.body = JSON.stringify({
		word: words[Math.floor(Math.random() * words.length)],
	});
}
