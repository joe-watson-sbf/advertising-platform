import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-slate-100 relative overflow-y-hidden sm:h-[80vh] h-[60vh] mb-10 min-w-full flex justify-around px-8 items-center">


            <div className="content z-10 sm:backdrop-blur-none backdrop-blur-md p-8">
                <h1 className="md:text-8xl text-4xl font-extralight my-8 uppercase text-primary">
                    Lorem ipsum <br/>dolor sit
                </h1>
                <h2 className="md:text-2xl text-xl text-primary-fade">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    quis nostrud exercitation ullamco laboris nisi
                </h2>
                <button className="default-btn-color px-4 py-2 my-8 rounded">
                    Get Started
                </button>
            </div>

            <div className="sm:block flex sm:-ml-14 -ml-0 justify-center items-center sm:relative sm:w-1/2 absolute w-full left-0 top-0 backdrop-filter">
                <Image
                    src="https://images.unsplash.com/photo-1495985429137-999cdd47722a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2412&q=80"
                    alt="hero"
                    width={700}
                    height={500}
                    className=" sm:w-auto sm:h-auto h-full w-full sm:rounded-md shadow-2xl origin-top-left"
                    priority
                />
            </div>
        </div>
    );
}
