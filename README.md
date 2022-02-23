# wordle-list

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ma1ted/wordle-list/Deno?label=tests)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m790673309-43940cd3e21d3c2a6f037250)

## Overview

Internally, the Wordle game has two lists of words.

- One very long list (10638 words) containing all the words that are allowed to
  be guessed. This is to stop players eliminating letters by guessing things
  like _aeiou_.
- One shorter list (2309 words) containing all the words that have been, are, or
  will be a day's answer, or _Wordle_.

This API makes it simple to get new words from the short list or to validate a
player's input word against both lists.

I am hosting this myself, and while there is a rate limit in place, it is
generous enough that you will not hit it if you are using the API in a
legitimate manner. Don't spoil a nice thing.

## API Reference

### Base URL

```
https://wordle-list.malted.dev/
```

---

### Validate a word

```
GET /valid
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `word`    | `string` | **Required**. The word you wish to validate |

#### Example

`https://wordle-list.malted.dev/valid?word=acorn`

#### Response

| Parameter | Type      | Description                                              |
| :-------- | :-------- | :------------------------------------------------------- |
| `valid`   | `boolean` | Whether the supplied word was in the list of valid words |

---

### Get a new word

```
GET /choice
```

#### Example

`https://wordle-list.malted.dev/choice`

#### Response

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `word`    | `string` | A random word from the list of choice words |
