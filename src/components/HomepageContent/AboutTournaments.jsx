import styles from "./AboutTournaments.module.css";
import hardCourt from "../../assets/hardCourt.jpg"
import grassCourt from "../../assets/grassCourt.jpg";
import clayCourt from "../../assets/clayCourt.jpg";

function AboutTournaments() {
    return (
        <div className={styles.aboutTournaments}>
            <h4 className={styles.title}>Tournaments over the year</h4>
            <div className={styles.courts}>
                <div className={styles.hardCourt}>
                    <p className={styles.hardCourtDescription}>
                        <strong>Tennis hard courts</strong> are made of
                        synthetic/acrylic layers on top of a concrete or asphalt
                        foundation and can vary in color. These courts tend to
                        play medium-fast to fast because there is little energy
                        absorption by the court, as with grass courts but unlike
                        clay courts. The ball tends to bounce high and players
                        are able to apply many types of spin during play. Flat
                        balls are favored on hard courts because of the
                        extremely quick play style. Speed of rebound after
                        tennis balls bounce on hard courts is determined by how
                        much sand is in the synthetic/acrylic layer placed on
                        top of the asphalt foundation. More sand will result in
                        a slower bounce due to more friction. Of the Grand Slam
                        tournaments, the US Open and Australian Open currently
                        use hard courts, and it is the predominant surface type
                        used on the professional tour.
                    </p>
                    <img src={hardCourt} alt="Tennis hard court" />
                </div>
                <div className={styles.grassCourt}>
                    <img src={grassCourt} alt="Tennis hard court" />
                    <p className={styles.grassCourtDescription}>
                        <strong>A grass court</strong> is one of the types of
                        tennis court on which the sport of tennis, originally
                        known as "lawn tennis", is played. Grass courts are made
                        of grasses in different compositions depending on the
                        tournament. Although grass courts are more traditional
                        than other types of tennis courts, maintenance costs of
                        grass courts are higher than those of hard courts and
                        clay courts. Grass courts (in the absence of suitable
                        covers) must be left for the day if rain appears, as the
                        grass becomes very slippery when wet and will not dry
                        for many hours. This is a disadvantage on outdoor courts
                        compared to using hard and clay surfaces, where play can
                        resume in 30 to 120 minutes after the end of rain (clay
                        courts even remain playable in light rain). Grass courts
                        are most common in the United Kingdom and Australia,
                        although the Northeastern United States also has some
                        private grass courts.
                    </p>
                </div>
                <div className={styles.clayCourt}>
                    <p className={styles.clayCourtDescription}>
                        <strong>A clay court</strong> is one of the types of
                        tennis court on which the sport of tennis is played.
                        Clay courts are built on a foundation of crushed stone,
                        brick, shale, and other aggregate, with a thin layer of
                        fine clay particles on top. Clay courts are more common
                        in Continental Europe and Latin America than in North
                        America, Asia-Pacific or Britain. The only Grand Slam
                        tournament that uses clay courts is the French Open.
                        Clay courts come in the more common red clay, which is
                        actually crushed brick, and the slightly harder green
                        clay, also known as "rubico", which is actually crushed
                        metabasalt. Although slightly less expensive to
                        construct than other types of tennis courts, the
                        maintenance costs of clay are high as the surface must
                        be watered and rolled regularly to preserve texture and
                        flatness, and brushed carefully before each game.
                    </p>
                    <img src={clayCourt} alt="Tennis hard court" />
                </div>
            </div>
        </div>
    );
}

export default AboutTournaments;