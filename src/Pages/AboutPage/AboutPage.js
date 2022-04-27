import React from "react";
import "./AboutPage.css";
import FancyTitle from "./../../Components/FancyTitle/FancyTitle";
import profile from "./../../assets/img/profile.png";

const AboutPage = () => {
    return (
        <section className="about-container">
            <FancyTitle
                className="about-title"
                firstPart={"About"}
                secondPart={" me"}
            />
            <div className="about-content">
                <div className="about-img-container">
                    <img src={profile} alt="profilePhoto" />
                </div>
                <h4 className="about-person-name">samsuzzaman</h4>
                <p className="about-person-subtitle">Learning MERN Stack</p>
                <div className="timeline-wrapper">
                    <div className="timeline">
                        <div className="timeline-container left">
                            <div className="content">
                                <h5>My plans and steps for these 2022 Year</h5>
                            </div>
                        </div>
                        <div className="timeline-container right">
                            <div className="content">
                                <h5>Upto 31 May, 2021 || Finishing Course</h5>
                                <p>
                                    31 May পর্যন্ত একাডেমিক পরীক্ষা ও কোর্স সঠিক
                                    প্র্যাকটিসের মাধ্যমে শেষ করা এখন মুল লক্ষ্য
                                    যাতে করে SCIC তে জায়গা করে নিতে পারি।{" "}
                                </p>
                            </div>
                        </div>
                        <div className="timeline-container left">
                            <div className="content">
                                <h5>From June to next 3-Month</h5>
                                <p>
                                    MERN stack এর ভিতর যে যে বিষয়গুলোর
                                    প্র্যাকটিস কম আছে সেগুলো পূর্ণ করা। সাথে
                                    কিছু প্রোজেক্ট সম্পন্ন করা যাতে করে
                                    পরবর্তীতে জব পাবার ক্ষেত্রে সহজ হয়। এর
                                    পাশাপাশি LinkedIn প্রোফাইল টা ঠিক ভাবে build
                                    up করা।{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
