import React from "react";
import MaterialIcon from "./MaterialIcon.jsx";

export default function RatingStars({ half = false, className = "" }) {
  return (
    <div className={`flex text-amber-400 ${className}`}>
      <MaterialIcon filled>star</MaterialIcon>
      <MaterialIcon filled>star</MaterialIcon>
      <MaterialIcon filled>star</MaterialIcon>
      <MaterialIcon filled>star</MaterialIcon>
      <MaterialIcon filled>{half ? "star_half" : "star"}</MaterialIcon>
    </div>
  );
}
