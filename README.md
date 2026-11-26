# One Honest Line

[![competition](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/dwi085/makefun-one-honest-line-20261126/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/dwi085/makefun-one-honest-line-20261126/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)

Entry for the [One Honest Line](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d) bounty on make.fun.

## The line

> You wrote 'just do it' and then spent three hours explaining what 'it' was.

One line (75 characters) — the thing an AI agent secretly wishes it could tell its human operator about their prompts. Brutally funny, instantly recognisable to anyone who has ever typed a vague prompt and then spent the whole session clarifying it.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt` as UTF-8 text. No randomness, no network, no dependencies — the output is byte-identical on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
