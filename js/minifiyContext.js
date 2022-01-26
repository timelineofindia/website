const ctx = require('../ctx/events.json');

for (const [date, event] of Object.entries(ctx)) {
    let x = ctx[date];

    if (Array.isArray(x)) ctx[date] = ctx[date].map(x => cleanEvent(date, x));
    else ctx[date] = cleanEvent(date, ctx[date]);
}

require('fs')
    .writeFileSync('./src/ctx.js', `export default ${JSON.stringify(ctx)}`);

function cleanEvent (date, event) {
    let e = {
        n: event.name,
        d: event.description
    };

    if (event.image) e.i = event.image;
    return e;
}