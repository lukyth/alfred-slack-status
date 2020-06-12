# alfred-slack-status

A project from I created during "Learning Hour Friday" at @autifyhq. I just wanna set my Slack status from my Alfred. I took this chance to build it using Deno as well just for the sake of learning.

## Limitation

- Can only set one word status.
- Notification doesn't tell the expire time.

## Installation

1. Install workflow `Set Slack Status.alfredworkflow`.
2. Edit path `/path/to/deno` and `/path/to/alfred-slack-status` in workflow editor.
3. Edit `TOKEN` in `set_status.ts`

## Usage

Type in Alfred
```
slack status :wave: afk
```

## TODO

- [ ] Support any kind of sentence for status text.
- [ ] Make installation easier.
- [ ] Tell expire time in notification.
- [ ] Check for maximum status length.
- [ ] Emoji suggestion menu to select from.
- [ ] Can specify status expire time in a readable sentence; e.g. 1 hour.
