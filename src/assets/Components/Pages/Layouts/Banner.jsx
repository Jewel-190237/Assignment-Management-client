import img1 from "../../../Photos/a1.jpg"
import img2 from "../../../Photos/a2.jpg"
import img3 from "../../../Photos/a3.jpg"
import img4 from "../../../Photos/a5.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-2xl" />
                    <div className="absolute rounded-2xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute rounded-2xl flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex text-white gap-6 items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="w-2/3 space-y-7 p-4">
                            <h1 className="text-4xl">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-secondary ml-5">Latest Car</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner;