const [emoji, text, expiration] = Deno.args[0].split(" ");
const res = await fetch("https://slack.com/api/users.profile.set", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      "Bearer TOKEN",
  },
  body: JSON.stringify({
    profile: {
      status_text: text || "",
      status_emoji: emoji || "",
      status_expiration: expiration || 0,
    },
  }),
});

const body = JSON.parse(
  new TextDecoder().decode(new Uint8Array(await res.arrayBuffer()))
);

await Deno.stdout.write(
  new TextEncoder().encode(
    `Successfully set status to ${body.profile.status_emoji} ${body.profile.status_text}`
  )
);
