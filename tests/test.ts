import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";

Deno.test("root endpoint", async () => {
  const res = await fetch("https://wordle-list.malted.dev/");
  const json = await res.json();
  assertEquals(json.running, true);
});

Deno.test("validation endpoint", async () => {
  const res = await fetch("https://wordle-list.malted.dev/valid?word=acorn");
  const json = await res.json();
  assertEquals(json.valid, true);
});

Deno.test("choice endpoint", async () => {
  const res = await fetch("https://wordle-list.malted.dev/choice");
  const json = await res.json();
  assert(json.word);
});
