/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FAQ from "./FAQ";
import HomeCard from "./HomeCard";
import { useState } from "react";
import a from '../../../Photos/a.png'
import b from '../../../Photos/b.png'
import c from '../../../Photos/d.jpg'
import d from '../../../Photos/l.jpg'
import e from '../../../Photos/f.jpg'
import f from '../../../Photos/e.jpg'

const Home = () => {
    const assignments = useLoaderData();
    const [ass, setAss] = useState(6)

    return (
        <div >
            <Banner></Banner>
            <div className="bg-slate-100 mx-auto p-4 m-4 rounded-xl">
                <div>
                    <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Assignments Feature</h2>
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Crafting Your Assignment Experience. Seamlessly upload PDF files, input your username, and jot down quick notes for clarity and collaboration. Elevate your assignment submission process with ease and efficiency </p>
                    </p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {
                        assignments.slice(0, ass).map(assignment => <HomeCard key={assignment._id} assignment={assignment}></HomeCard>)
                    }
                </div>
            </div>
            <p className="text-center">
                <Link to='/assignments'> <button className="btn bg-emerald-300 btn-outline">Show All Assignment</button> </Link>
            </p>
            <div className="mt-10">
                <h2 className="text-3xl text-center font-bold text-green-600">Student Review</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Discover why students rave about our website! Read on to see how our transformed the learning experience for countless users. From quick solutions to insightful tips, find out why students trust us as their go-to resource for academic support</p>
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={a} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Robert Dalton</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">This group study website has been a game-changer for me! Its so easy to connect with classmates, collaborate on assignments, and share resources. My grades have improved significantly since I started using it</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={b} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Robert Hook</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">Ive always struggled with staying focused while studying alone, but this website has completely turned that around. Being able to study with friends virtually has made learning much more enjoyable and productive.</p>

                    </div>
                    {/* Review 2 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={f} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Matrin Kooker</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">I love how intuitive the interface is on this group study website. Its simple to navigate, and the features like document sharing and video chat make collaborating with classmates a breeze</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={c} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Mathu Meaden</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">As someone who learns best through discussion and interaction, this website has been a godsend. Its like having a virtual study group at my fingertips whenever I need it</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={d} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Q De Cock</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">Ive made some great friends through this group study website! Its amazing how it brings students together from all over to support each other academically. Its more than just a study tool</p>

                    </div>
                    {/* Review 1 */}
                    <div className="card bg-base-100 shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <img src={e} alt="Shoes" className="rounded-full w-1/3 " />
                        </figure>
                        <h2 className=" font-bold p-4 text-green-600 text-center">Moyen Ali</h2>
                        <p className="pl-4 mr-4 pb-4 text-justify">The flexibility of scheduling study sessions on this website is fantastic. Whether its early morning or late at night, theres always someone available to study with. Its made balancing </p>

                    </div>
                </div>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;