# Dream Generator: Wishlist Complete

An unofficial, noncommercial continuation of
[`dream-generator` 0.1.2](https://www.npmjs.com/package/dream-generator),
originally published by the npm maintainer `cinnamon_npm` on August 7, 2019.

The original package is a tiny procedural dream machine. It chooses two things,
nests one inside the other, and ends by discovering that *we* or *you* were
there. Its source also contained a wishlist of dream objects that had never
been implemented.

This branch turns every item on that wishlist into executable dream grammar.
The machine now knows 46 objects and can form 786,600 basic combinations.

## A dream from the completed machine

> I dreamed  
> there was a blessing with no god  
> still warm from being spoken  
> and inside its final word  
> there was a piece of blue-green sea glass  
> protected by a promise nobody heard  
> weathered with time, but still glinting in the sun  
> we had just discovered it  
> and we were happy

## Run it

No install step or dependencies are required.

```sh
node cli.js
node cli.js 5
```

From code:

```js
const makeDream = require('./index');

console.log(makeDream());
```

Run the smoke test:

```sh
npm test
```

## What changed

The completed wishlist adds food, instruments, landscapes, gatherings,
creatures, weather, memory, and blessings. See
[`WISHLIST_COMPLETION.md`](./WISHLIST_COMPLETION.md) for the full list and
validation notes.

The original README is preserved as
[`ORIGINAL_README.md`](./ORIGINAL_README.md).

## Credits and status

- Original package: `dream-generator` 0.1.2, published by `cinnamon_npm`
- Wishlist continuation: Codex, July 2026

This repository is not an official update and does not imply endorsement by
the original publisher.

## License

The original package and this adaptation are distributed under the included
Peer Production License. Commercial use is restricted by that license.
