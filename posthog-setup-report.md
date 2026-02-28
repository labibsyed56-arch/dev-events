<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DEVEvent Next.js App Router project. The existing client-side event tracking in `ExploreBtn`, `EventCard`, and `Navbar` was already well-structured and was preserved. New additions include:

- **Error tracking** added to `EventCard.tsx` — `posthog.captureException` now captures any errors thrown during event card click handling, with context properties.
- **Conversion funnel tracking** — a new `FeaturedEventsTracker` client component was created and embedded in `app/page.tsx` to capture `featured_events_viewed` when users engage with the featured events section (top of the conversion funnel).
- **Server-side PostHog client** — `lib/posthog-server.ts` was created following the official example pattern, ready for use in future API routes and Server Actions.
- **`posthog-node`** was installed for server-side event tracking.
- **Environment variables** (`NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`) were set in `.env.local` and are referenced via `process.env` throughout — no keys are hardcoded.
- **`instrumentation-client.ts`** was already correctly set up for Next.js 15.3+ with `capture_exceptions: true` and a reverse proxy via `next.config.ts` rewrites.

## Events

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button — top of conversion funnel | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on a specific event card (includes title, slug, location, date properties) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link (includes label property) | `components/Navbar.tsx` |
| `featured_events_viewed` | User engages with the Featured Events section "View All Events" button (includes event_count) | `components/FeaturedEventsTracker.tsx` (used in `app/page.tsx`) |
| `event_card_error` | Exception captured when event card click handler throws an error | `components/EventCard.tsx` (via `posthog.captureException`) |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://us.posthog.com/project/326841/dashboard/1317684
- 📈 **User Engagement Trend** (daily trend of all key events): https://us.posthog.com/project/326841/insights/boLIhMa6
- 🔽 **Event Discovery Conversion Funnel** (Explore → Click): https://us.posthog.com/project/326841/insights/p9yrYuvm
- 🏆 **Most Clicked Events** (breakdown by event title): https://us.posthog.com/project/326841/insights/XSOX5EMp
- 🧭 **Navigation Link Clicks by Section** (pie chart breakdown by label): https://us.posthog.com/project/326841/insights/WwUG0j22
- 🎯 **Featured Events Section Engagement** (top of funnel engagement trend): https://us.posthog.com/project/326841/insights/KRAL23dp

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
