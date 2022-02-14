# wordle-list
## This is the API powering;
* [My Wordle clone](https://github.com/ma1ted/wordle)
* The projects built by following along with my Wordle clone tutorial article on Replit

## Overview
Internally, the Wordle game has two lists of words.
* One very long list (10638 words) containing all the words that are allowed to be guessed. This is to stop players eliminating letters by guessing things like *aeiou*.
* One shorter list (2309 words) containing all the words that have been, are, or will be a day's answer, or *Wordle*.

This API makes it simple to get new words from the short list or to validate a player's input word against both lists.

I am hosting this myself, and while there is a rate limit in place, it is generous enough that you will not hit it if you are using the API in a legitimate manner. Don't spoil a nice thing.
## API Reference

### Base URL
```
http://api.malted.dev/wordle-list/
```

---

### Validate a word

```
GET /valid
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `word` | `string` | **Required**. The word you wish to validate |
#### Example
`http://api.malted.dev/wordle-list/valid?word=acorn`
#### Response
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `valid` | `boolean` | Whether the supplied word was in the list of valid words |

---

### Get a new word
```
GET /choice
```
#### Example
`http://api.malted.dev/wordle-list/choice`

#### Response
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `word` | `string` | A random word from the list of choice words |
