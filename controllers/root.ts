// deno-lint-ignore no-explicit-any
export default function Root(ctx: any) {
  ctx.response.body = JSON.stringify({
    running: true,
  });
}
