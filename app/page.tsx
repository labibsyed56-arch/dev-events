import ExploreBtn from "@/components/ExploreBtn";
import {EventCard} from "@/components/EventCard";
import {FeaturedEventsTracker} from "@/components/FeaturedEventsTracker";
import {events} from "@/lib/constants";


const hello = () => {
    return (
<section>
        <h1 className="text-center">THE HUB FOR EVERY DEV <br /> YOU CANT MISS</h1>
<p className="text-center mt-5">HACKATHONS, MEETUPS AND CONFERENCES ALL IN ONE PLACE</p>

<ExploreBtn />
<div className="mt-20 space-y-7">
    <div className="flex flex-row items-center justify-between">
        <h3>Featured Events</h3>
        <FeaturedEventsTracker eventCount={events.length} />
    </div>
    <ul className="events">
        {events.map((event) =>(
         <li key={event.title}>
             <EventCard { ...event} />
         </li>
            ))}
    </ul>
</div>
</section>
    )
}
export default hello
