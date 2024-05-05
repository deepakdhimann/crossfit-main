import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swipper.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTestimonialsAction } from "../../redux/slices/testimonialSlices";
import { useState } from "react";
const SwiperComponent = () => {
  const [data1, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const mess = "hi";
    dispatch(allTestimonialsAction(mess));
  }, []);

  // let test = useSelector((state)=>state.testimonial?.testimonials?.test);
  const test1 = useSelector((state) => state.testimonial?.testimonials.test);

  // test1.reverse();
  // console.log(test1);
  // const {test: test2} = test1
  // console.log(test2);
  // let dataf = [];
  // for(let i in test2){
  //   console.log(i);
  //   // dataf.push(test2[i].captionHeading)
  //   dataf.push({captionDescription: test2[i].captionDescription,
  //               captionHeading: test2[i].captionHeading,
  //               image_link: test2[i].user.avatar,
  //             user: test2[i].user.name})

  // }
  // console.log(dataf);
  // let dataArray=[];
  // console.log(typeof(dataArray));
  // for(let i in test){
  //   dataArray.push(test[i])
  // }
  // console.log(test);
  // console.log(dataArray);
  // console.log(typeof(dataArray));
  return <div className="app1"></div>;
};

export default SwiperComponent;
