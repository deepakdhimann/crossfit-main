import React from "react";
import "./cardpost.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singleUserAction } from "../../redux/slices/userSlice";
// import {AiOutlineHeart} from "react-icons/ai"
// import {MdOutlineModeComment} from "react-icons/md"
const CardPost = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { findUser } = useSelector((state) => state.users);
  console.log(findUser);

  const getsingleUser = () => {
    dispatch(singleUserAction({ id: props.id }));

    navigate("/community/user");
  };
  return <div onClick={getsingleUser} className="post-social"></div>;
};

export default CardPost;
