import React from "react";
import PageHero from "./PageHero";
import BlogPreview from "../components/BlogPreview.jsx";
import CircleSlider from "../components/CircleSlider.jsx";

import blogThumb1 from "../assets/images/fav-icon/blog-thumb.png";
import blogThumb2 from "../assets/images/fav-icon/blog-thumb2.png";
import blogThumb3 from "../assets/images/fav-icon/blog-thumb3.png";
import blogThumb4 from "../assets/images/fav-icon/blog-thumb7.png";
import blogThumb5 from "../assets/images/fav-icon/blog-thumb8.png";
import blogThumb6 from "../assets/images/fav-icon/blog-thumb9.png";
import blogThumb7 from "../assets/images/fav-icon/blog-thumb3.png";
import blogThumb8 from "../assets/images/fav-icon/blog-thumb10.png";
import blogThumb9 from "../assets/images/fav-icon/blog-thumb11.png";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Top 5 Benefits of Regular House Cleaning",
      date: "August 5, 2025",
      excerpt:
        "Discover how maintaining a clean home can improve your health, mood, and productivity.",
      img: blogThumb1,
    },
    {
      title: "Eco-Friendly Cleaning: Tips and Tricks",
      date: "August 2, 2025",
      excerpt:
        "Learn about green cleaning methods that are safe for your family and the environment.",
      img: blogThumb2,
    },
    {
      title: "Floor Care Hacks for Modern Homes",
      date: "August 1, 2025",
      excerpt: "Simple steps to keep your floors sparkling clean every day.",
      img: blogThumb3,
    },
    {
      title: "Deep Cleaning Checklist for Every Room",
      date: "July 28, 2025",
      excerpt: "A complete guide to deep cleaning your home efficiently.",
      img: blogThumb4,
    },
    {
      title: "Cleaning Mistakes to Avoid at Home",
      date: "July 25, 2025",
      excerpt: "Learn common cleaning mistakes and how to avoid them.",
      img: blogThumb5,
    },
    {
      title: "Time-Saving Cleaning Hacks for Busy Families",
      date: "July 20, 2025",
      excerpt: "Quick and effective cleaning hacks for households on the go.",
      img: blogThumb6,
    },
    {
      title: "Organizing Your Home Like a Pro",
      date: "July 18, 2025",
      excerpt: "Tips to declutter and organize your home efficiently.",
      img: blogThumb7,
    },
    {
      title: "Pet-Friendly Cleaning Tips",
      date: "July 15, 2025",
      excerpt: "Keep your home clean while keeping your pets happy and safe.",
      img: blogThumb8,
    },
    {
      title: "Cleaning Tools You Didn’t Know You Needed",
      date: "July 10, 2025",
      excerpt: "Discover modern cleaning tools that make your life easier.",
      img: blogThumb9,
    },
  ];

  return (
    <>
      <PageHero title="Blog Grid" extraClass="pt-28 md:pt-32" />
      <BlogPreview posts={blogPosts} limit={null} />
      <div className="mt-2 mb-16">
        <CircleSlider total={4} />
      </div>
    </>
  );
};

export default BlogPage;
