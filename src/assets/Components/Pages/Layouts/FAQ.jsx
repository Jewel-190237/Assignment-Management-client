import image from '../../../Photos/cranium.png'
const FAQ = () => {
    return (
        <div className='bg-slate-100 rounded-xl m-4 w-full p-4 mx-auto'>
            <div>
                <div>
                    <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Frequent Asked Question</h2>
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Your burning questions, answered! Dive into our comprehensive FAQ section to find solutions, tips, and insights to common queries. Whether you are curious about our products, policies, or processes, weve got you covered with detailed responses crafted to make your experience seamless and hassle-free. Explore now and empower yourself with knowledge </p>
                    </p>
                </div>
                
            </div>
            <div className="flex">
                <div>
                    <img className='w-1/2 mx-auto ' src={image} alt="" />
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is online group study for assignment control?
                        </div>
                        <div className="collapse-content">
                            <p>Online group study for assignment control refers to a collaborative effort among students to work on assignments, projects, or study materials remotely using digital platforms. The aim is to manage and control the progress and quality of the work collectively.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How does online group study help with assignment control?
                        </div>
                        <div className="collapse-content">
                            <p>Online group study enables students to divide tasks, set deadlines, monitor progress, and ensure the quality of work through collaboration and communication tools available online. It facilitates better organization and accountability among group members.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What are the benefits of online group study for assignment control ?
                        </div>
                        <div className="collapse-content">
                            <p>Efficiency: Tasks can be divided based on individual strengths, leading to quicker completion.
                                Quality: Collaboration allows for diverse perspectives and feedback, improving the overall quality of the assignment.
                                Accountability: Group members can hold each other accountable for deadlines and task completion.
                                Flexibility: Group members can work from anywhere, providing flexibility in scheduling study sessions.
                                Learning: Discussing concepts and teaching each other can deepen understanding and retention of course material.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Which online platforms can be used for online group study?
                        </div>
                        <div className="collapse-content">
                            <p>Popular platforms include Google Workspace (formerly G Suite), Microsoft Teams, Zoom, Slack, Discord, and Trello. Choose a platform based on your groups preferences and needs for communication, file sharing, and task management.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can we manage assignments and tasks effectively in an online group study setup ?
                        </div>
                        <div className="collapse-content">
                            <p>Popular platforms include Google Workspace (formerly G Suite), Microsoft Teams, Zoom, Slack, Discord, and Trello. Choose a platform based on your groups preferences and needs for communication, file sharing, and task management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;