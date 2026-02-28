'use client';
import posthog from "posthog-js";

interface Props {
    eventCount: number;
}

export const FeaturedEventsTracker = ({ eventCount }: Props) => {
    const handleViewAllClick = () => {
        posthog.capture('featured_events_viewed', {
            event_count: eventCount,
        });
    };

    return (
        <button
            type="button"
            onClick={handleViewAllClick}
            className="text-sm underline opacity-60 hover:opacity-100 transition-opacity"
        >
            View all events
        </button>
    );
};
