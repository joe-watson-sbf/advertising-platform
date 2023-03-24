import Image from "next/image";
import Container from "./container";
import {MdMarkEmailUnread} from 'react-icons/md'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'


export default function About() {
    return (

        <Container id="about" className="sm:px-8 sm:mt-32 mt-16">
            <div>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                                <div className="lg:pl-20">
                                    <div className="max-w-xs px-2.5 lg:max-w-none">
                                        <Image alt="about-image" 
                                            sizes="(min-width: 1024px) 32rem, 20rem" 
                                            src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80" 
                                            width={800} height={800} decoding="async" data-nimg={1} 
                                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" 
                                            loading="lazy" style={{ color: 'transparent' }} />
                                    </div>
                                </div>
                                <div className="lg:order-first lg:row-span-2">
                                    <h1 className="text-4xl font-light tracking-tight text-primary sm:text-5xl">Lorem ipsum dolor sit amet, quis sit nostrud adipiscing elit</h1>
                                    <div className="mt-6 space-y-7 text-base text-primary-fade">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat non proident, sunt 
                                            in culpa qui officia deserunt mollit anim id est laborum. <em>can</em> sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                    </div>
                                </div>
                                <div className="lg:pl-20">
                                    <ul role="list">
                                        <li className="flex">
                                            <a className="group flex text-sm font-medium text-primary transition hover:text-teal-500" href="/about#">
                                                <FaTwitter className="h-6 w-6 flex-none text-primary-fade transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow on Twitter</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a className="group flex text-sm font-medium text-primary transition hover:text-teal-500" href="/about#">
                                                <FaInstagram className="h-6 w-6 flex-none text-primary-fade transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow on Instagram</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a className="group flex text-sm font-medium text-primary transition hover:text-teal-500" href="/about#">
                                                <FaFacebook className="h-6 w-6 flex-none text-primary-fade transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow on Facebook</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a className="group flex text-sm font-medium text-primary transition hover:text-teal-500" href="/about#">
                                                <FaLinkedinIn className="h-6 w-6 flex-none text-primary-fade transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow on LinkedIn</span>
                                            </a>
                                        </li>
                                        <li className="mt-8 border-t border-zinc-300 pt-8 flex">
                                            <a className="group flex text-sm font-medium text-primary transition hover:text-teal-500" href="mailto:spencer@planetaria.tech">
                                                
                                                <MdMarkEmailUnread className="h-6 w-6 flex-none text-primary-fade transition group-hover:fill-teal-500" />
                                                <span className="ml-4">contact@haitiedtech.ht</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}