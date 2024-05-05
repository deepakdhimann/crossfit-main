import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { singleUserAction } from "../../redux/slices/userSlice";

const UserCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { findUser } = useSelector((state) => state.users);
  console.log(findUser);

  const getsingleUser = () => {
    dispatch(singleUserAction({ id: item._id }));

    navigate("/community/user");
  };

  return <div onClick={getsingleUser} className="user-palette"></div>;
};

export default UserCard;
