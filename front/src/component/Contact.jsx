import React from "react";
import Card from "./Card";
import list from '../Data/list.json'
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Connect krte hai{" "}
            <span className="text-pink-500">jadui dunia mei!!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga
            temporibus ipsam blanditiis voluptatem totam explicabo voluptatibus
            perferendis vel molestias.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-2xl mt-10">Back</button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
                list.map((item)=>(<Card key={item.id} item={item}/>))

            }
            
        </div>
      </div>
    </>
  );
}

export default Contact;
