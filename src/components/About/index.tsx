"use client";

import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <div className="border-2 border-gray-300 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 bg-white shadow-md">
                    {/* 画像 */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image 
                            src="/profilePic.png"
                            alt="プロフィール写真"
                            width={200}
                            height={200}
                            className="rounded-3xl object-cover"
                        />
                    </div>

                    {/* テキスト */}
                    <div className="w-full md;w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">About me</h2>
                        <p className="text-gray-700 leading-relaxed">
                            はじめまして、Kazumaです。WEB engineerをやってます。
                            <br />
                            reactとnext.js勉強がてらにこのPortfolio作成中です。
                            <br />
                            これからがんばってこうと思います！
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;