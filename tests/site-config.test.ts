import assert from "node:assert/strict";

import robots from "../app/robots";
import sitemap from "../app/sitemap";

const entries = sitemap();

assert.equal(entries.length, 1, "sitemap should only expose the homepage");
assert.equal(entries[0]?.url, "https://www.harveydelaney.com", "homepage URL should be canonical");
assert.equal(entries[0]?.priority, 1, "homepage priority should remain highest");

const rules = robots();

assert.deepEqual(
  rules.rules,
  {
    userAgent: "*",
    allow: "/",
  },
  "robots rules should allow indexing the portfolio homepage"
);

assert.equal(rules.sitemap, "https://www.harveydelaney.com/sitemap.xml", "robots sitemap should stay canonical");