"use client";

import img1 from "@/assets/pexels-expect-best-79873-323705.webp";
import img2 from "@/assets/pexels-mantasink-1106476.webp";
import img3 from "@/assets/pexels-pixabay-162031.webp";
import img4 from "@/assets/pexels-pixabay-417339.webp";
import img5 from "@/assets/pexels-pixasquare-1123982.webp";
import img6 from "@/assets/pexels-rickyrecap-1662159.webp";
import img7 from "@/assets/pexels-scottwebb-27406.webp";
import img8 from "@/assets/pexels-sevenstormphotography-443383.webp";
import img9 from "@/assets/pexels-walidphotoz-1372014.webp";
import img10 from "@/assets/pexels-wangming-photo-115695-354941.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import "swiper/css";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

export default function Page() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".img-container", {
      xPercent: 100,
      duration: 2,
    });

    gsap.utils.toArray(".img-container img").forEach((img: any, i) => {
      gsap.fromTo(
        img,
        {
          scaleY: 1 * i + 1,
          translateY: 0,
        },
        {
          scaleY: 1,
          duration: 1.5,
          translateY: (i + 1) % 2 == 0 ? 15 * i + 1 : 0,
        }
      );
    });

    gsap.from(".text-content > *", {
      opacity: 0,
      y: 300,
      duration: 2,
      scrollTrigger: {
        trigger: "text-content",
      },
    });

    gsap.from(".swiper-container", {
      xPercent: 100,
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".swiper-container",
      },
    });

    gsap.from(".bg-text", {
      y: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".bg-text",
      },
    });

    gsap.utils.toArray(".article").forEach((article: any, i: number) => {
      gsap.from(article, {
        opacity: 0,
        xPercent: i % 2 ? 100 : -100,
        duration: 1,
        scrollTrigger: {
          trigger: article,
        },
      });
    });

    gsap.from(".box", {
      opacity: 0,
      duration: 2,
      stagger: { amount: 1 },
      scrollTrigger: { trigger: ".box" },
    });
  });

  const imgs = [
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];
  const articles = [
    {
      id: 1,
      img: img1,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
    {
      id: 2,
      img: img2,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
    {
      id: 3,
      img: img3,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
    {
      id: 4,
      img: img4,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
    {
      id: 5,
      img: img5,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
    {
      id: 6,
      img: img6,
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit quo esse aspernatur eligendi rem aut quas.",
    },
  ];

  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeSlide, setActiveSlide] = useState(1);

  const CustomNextArrow = () => (
    <button className="swiper-button-next">
      <FaArrowRightLong />
    </button>
  );
  const CustomPrevArrow = () => (
    <button className="swiper-button-prev">
      <FaArrowLeftLong />
    </button>
  );

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  const [isClick, setIsClick] = useState(false);

  return (
    <main className="bg-[#e7eeee] w-full min-h-screen">
      <nav className="bg-[#e7eeee] fixed w-full z-50 flex items-center justify-between py-6 px-[5%] border-b border-b-gray-400">
        <h1 className="text-lg md:text-2xl font-bold">Binhoff</h1>
        <>
          <ul className="hidden lg:flex items-center gap-40 text-sm font-medium [&>*]:cursor-pointer">
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className="hidden lg:block font-bold border border-gray-300 py-3 px-8 rounded-full">
            signup
          </button>
        </>
        <span className="lg:hidden">
          <RxHamburgerMenu size={32} />
        </span>
      </nav>
      <section className="h-screen overflow-hidden">
        <div className="flex items-center justify-between h-full">
          <div className="p-20 flex-1">
            <p className="text-[9rem] font-bold leading-none mb-10">
              Invest in <br /> real estate
            </p>
            <div className="flex gap-4">
              <button className="btn bg-green-500 text-white">
                Request a call
              </button>
              <button className="btn border border-gray-600 font-medium">
                To get the consultation
              </button>
            </div>
          </div>
          <div className="img-container flex-1 flex gap-4 justify-end">
            <Image alt="hero section image" src={img1} className="img" />
            <Image alt="hero section image" src={img2} className="img" />
            <Image alt="hero section image" src={img3} className="img" />
            <Image alt="hero section image" src={img4} className="img" />
            <Image alt="hero section image" src={img5} className="img" />
            <Image alt="hero section image" src={img6} className="img" />
          </div>
        </div>
      </section>
      <section className="py-20 px-40">
        <div className="text-content overflow-hidden py-20 flex flex-col gap-5 border-b border-gray-300">
          <h1 className="text-gray-800 text-6xl leading-normal font-medium">
            The property that <br /> suits you perfectly
          </h1>
          <p className="text-gray-700 text-3xl leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam est
            eius fugit facilis labore vel architecto dolor, veritatis rem quo.
            Reiciendis fugit laboriosam, consequuntur autem aspernatur aperiam
            voluptate dolorum labore.
          </p>
        </div>
      </section>
      <section className="p-20">
        <div>
          <div className="flex items-center justify-around mb-10">
            <h1 className="text-4xl font-bold">Binhoff gallery</h1>
            <div className="flex items-center">
              <div onClick={handlePrev}>
                <CustomPrevArrow />
              </div>
              <span>
                {activeSlide}/{imgs.length}
              </span>
              <div onClick={handleNext}>
                <CustomNextArrow />
              </div>
            </div>
          </div>
          <div className="px-20 ml-40 h-[500px] swiper-container">
            <Swiper
              className="h-full"
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSwiper={setSwiper}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
            >
              {imgs.map(({ id, img }) => (
                <div key={id}>
                  <SwiperSlide>
                    <Image
                      className="h-full object-cover w-[90%] rounded-xl"
                      src={img}
                      alt={`image-${id}`}
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="py-20 overflow-hidden">
        <div className="bg-img">
          <div className="h-full bg-text flex flex-col gap-4 items-center justify-center text-white px-80">
            <h1 className="text-6xl font-bold">Our Mission</h1>
            <p className="text-xl leading-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              minus porro ab dolorum laboriosam ut quam nihil dolorem eveniet
              hic molestias alias, inventore non, quisquam architecto
              necessitatibus at qui aspernatur.
            </p>
          </div>
        </div>
      </section>
      <section className="p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300">
        <h1 className="text-4xl font-bold">Actual News</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {articles.map((article, i) => (
            <div
              key={i}
              className={`${
                i >= 4 && !isClick && "hidden"
              } article flex flex-col gap-2 w-96`}
            >
              <Image
                src={article.img}
                alt="article image"
                className="min-h-[500px] max-h-[600px] h-full object-cover rounded-lg"
              />
              <h3>{article.headline}</h3>
              <button className="font-bold text-green-500">More detials</button>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsClick((prev) => !prev)}
          className="btn border border-gray-500 px-12 mt-12"
        >
          See {!isClick ? "More" : "Less"}
        </button>
      </section>
      <section className="p-40">
        <h1 className="text-6xl p-40 text-gray-800 text-center">
          The unique investment opportunity
        </h1>
        <div className="flex gap-12 items-center justify-center p-12">
          <div className="box">
            <Image src={img3} alt="" />
            <h3>Private Investors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              quo esse aspernatur eligendi rem aut quas.
            </p>
            <button>View More</button>
          </div>
          <div className="box">
            <Image src={img3} alt="" />
            <h3>Private Investors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              quo esse aspernatur eligendi rem aut quas.
            </p>
            <button>View More</button>
          </div>
          <div className="box">
            <Image src={img3} alt="" />
            <h3>Private Investors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              quo esse aspernatur eligendi rem aut quas.
            </p>
            <button>View More</button>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-bg flex items-center justify-center flex-col gap-10">
          <h1 className="text-white text-5xl text-center">
            Learn more about <br />
            investing with Binhoff
          </h1>
          <div className="flex gap-4">
            <input
              className="bg-white w-80 px-6 rounded-lg outline-none py-4"
              type="text"
              placeholder="Enter your Email"
              name=""
              id=""
            />
            <button className="btn bg-black border border-gray-800 text-white px-20">
              Sign up
            </button>
          </div>
        </div>
      </section>
      <footer className="p-20 flex items-center justify-around">
        <div className="font-bold text-2xl">Binhoff.co</div>
        <ul className="menu">
          <li>Product</li>
          <li>Install</li>
          <li>Quickstart</li>
        </ul>
        <ul className="menu">
          <li>Blog</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaFacebook />
          </div>
          <div className="icon">
            <AiFillInstagram />
          </div>
        </div>
      </footer>
    </main>
  );
}
