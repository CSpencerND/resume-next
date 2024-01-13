export default function Home() {
    return (
        <main className="prose prose-sm max-w-none mx-[0.75in] my-[0.5in]">
            <section id="Header">
                <h1>Christopher Spencer</h1>
                <p className="font-medium flex flex-row justify-between">
                    <span>(347) 706-5294</span>
                    <Separator />
                    <span>cspencernd@gmail.com</span>
                    <Separator />
                    <span>linkedin.com/in/cspencernd</span>
                    <Separator />
                    <span>New York, NY</span>
                </p>
            </section>

            {/* Summary & Skills */}
            <section id="Summary">
                <CategoryHeading>Summary & Skills</CategoryHeading>
                <p>
                    Meticulously organized, strong critical thinker, with ability to work
                    independently. Adept at research and problem solving. Mindful of accuracy
                    and efficiency.
                </p>
                <p className="font-medium flex flex-row justify-between">
                    HTML, CSS
                    <Separator />
                    JavaScript, React
                    <Separator />
                    Node.JS, PostgreSQL
                    <Separator />
                    Python, C, Bash, Linux
                    <Separator />
                    82 WPM
                </p>
            </section>

            {/* Work History */}
            <section id="WorkHistory">
                <CategoryHeading>Work History</CategoryHeading>
                {workHistory.map((w, i) => (
                    <WorkHistorySection key={i} {...w} />
                ))}
            </section>

            {/* Education */}
            <section>
                <CategoryHeading>Education</CategoryHeading>
                <h4>Zero To Mastery Academy</h4>
                <p>Web Development & Computer Science</p>
                <h4>National Personal Training Institute</h4>
                <p>Human Anatomy, Kinesiology, Exercise Science</p>
            </section>
        </main>
    );
}

function List(props: React.HTMLAttributes<HTMLUListElement>) {
    return <ul className="pl-0 prose-li:pl-0" {...props} />;
}

function Separator() {
    return <span className="text-gray-300"> | </span>;
}

function CategoryHeading(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className="bg-gray-200 px-2 py-1 rounded-md -mx-2" {...props} />;
}

type WorkHistoryProps = {
    jobTitle: string;
    date: string;
    companyName: string;
    location: string;
    descriptors: string[];
};

function WorkHistorySection(props: WorkHistoryProps) {
    const { jobTitle, companyName, descriptors, date, location } = props;

    return (
        <>
            <h4 className="flex flex-row justify-between">
                {jobTitle} <span>{date}</span>
            </h4>
            <h4 className="flex flex-row justify-between text-gray-400 font-bold">
                {companyName} <span>{location}</span>
            </h4>
            <List>
                {descriptors.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </List>
        </>
    );
}

const workHistory: WorkHistoryProps[] = [
    {
        jobTitle: "Web Developer / Software Engineer",
        date: "Current",
        companyName: "Gryffyn Labs",
        location: "Remote",
        descriptors: [
            "Successfully built and deployed fully functional websites.",
            "Created an informative weather applet.",
            "Contributed to open-source projects, and assisted with troubleshooting and bug fixes.",
        ],
    },

    {
        jobTitle: "Assistant Manger",
        date: "2017 - 2020",
        companyName: "Beyond Vape",
        location: "New York, NY",
        descriptors: [
            "Keyholder and inventory management.",
            "Consistently met and exceeded sales goals.",
            "Provided high quality customer service and technical support.",
            "Curated products to stock in the store.",
        ],
    },

    {
        jobTitle: "Stock Manager",
        date: "2015 - 2017",
        companyName: "Journeys",
        location: "Brooklyn, NY",
        descriptors: [
            "Responsible for managing inventory as well as sending and receiving transfers between locations.",
            "Efficiently and neatly organized the stock room.",
        ],
    },
];
