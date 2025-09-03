"use client";

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import { FaLocationArrow, FaUserGear } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-80 mt-20 gap-y-48">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            // title={item.link ? item.title : "Work in Progress"}
                            href={item.link}
                            title={
                                !item.link
                                    ? "Site Coming Soon"
                                    : item.link === "/"
                                        ? "Site Not Available"
                                        : "Visit Site"
                            }
                        >
                            <div
                                className="relative sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10 overflow-hidden lg:rounded-3xl flex items-center justify-center"
                                style={{ backgroundColor: "#13162D" }}
                            >
                                {/* background image */}
                                <Image
                                    src="/bg.png"
                                    alt="bgimg"
                                    fill
                                    className="object-cover pointer-events-none"
                                />
                                <div className="flex items-center justify-center w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                                    <Image
                                        src={item.img || "/work-in-progress.png"}
                                        alt="cover"
                                        width={300}
                                        height={300}
                                        className="object-contain w-[60%] h-auto"
                                    />
                                </div>
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`,
                                            }}
                                        >
                                            <Image src={icon} alt="icon5" className="p-2" fill={true}/>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    {item.link === "/" ? null : item.link ? (
                                        <>
                                            <p className="flex lg:text-lg md:text-xs w-full text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                        </>
                                    ) : (
                                        <>
                                            <p className="flex lg:text-md md:text-sm w-full text-gray-400">
                                                Work in Progress
                                            </p>
                                            <FaUserGear className="ms-3" color="#9CA3AF" />
                                        </>
                                    )}
                                </div>

                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;