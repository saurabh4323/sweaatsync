"use client";
import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  Bell,
  Camera,
  MoreHorizontal,
  Send,
  Users,
  Hash,
} from "lucide-react";

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      avatar:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
      content:
        "Just started a new HIIT program! Anyone want to join and be accountability partners? 💪",
      media:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
      likes: 243,
      isLiked: false,
      timeAgo: "2h",
      comments: [
        {
          id: 1,
          author: "Mike Ross",
          avatar:
            "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
          content: "I'm in! Been looking for a workout buddy",
          timeAgo: "1h",
        },
        {
          id: 2,
          author: "Emma Wilson",
          avatar:
            "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
          content: "What time do you usually workout?",
          timeAgo: "30m",
        },
      ],
      group: "HIIT Warriors",
    },
  ]);

  const [groups] = useState([
    {
      id: 1,
      name: "Morning Runners Club",
      members: 1240,
      avatar:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
      description: "Early birds catching the sunrise while running 🌅",
      isJoined: true,
    },
    {
      id: 2,
      name: "Yoga Enthusiasts",
      members: 890,
      avatar:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
      description: "Find your inner peace through yoga 🧘‍♀",
      isJoined: false,
    },
  ]);

  const [discussions] = useState([
    {
      id: 1,
      title: "Best Post-Workout Nutrition",
      author: "NutritionPro",
      replies: 45,
      lastActive: "5m",
    },
    {
      id: 2,
      title: "Home vs Gym Workouts",
      author: "FitnessFanatic",
      replies: 89,
      lastActive: "10m",
    },
  ]);

  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: post.comments.length + 1,
                author: "You",
                avatar:
                  "https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp",
                content: newComment,
                timeAgo: "now",
              },
            ],
          };
        }
        return post;
      })
    );
    setNewComment("");
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <nav
        className=" border-b sticky top-0 z-50"
        // style={{ backgroundColor: "#1a212e" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 mt-[100px]">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ">
              SWEAT SYNC
            </h1>

            <div className="flex items-center space-x-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search communities, discussions..."
                  className="w-72 pl-10 pr-4 py-2 rounded-full bg-gray-100 
                    focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>

              <button className="relative">
                <Bell className="w-6 h-6 text-gray-700" />
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full 
                  text-white text-xs flex items-center justify-center animate-pulse"
                >
                  3
                </span>
              </button>

              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp"
                alt="Profile"
                className="w-10 h-10 rounded-full ring-2 ring-gray-200"
              />
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 -mb-px">
            {[
              { id: "feed", label: "Feed", icon: MessageCircle },
              { id: "groups", label: "Groups", icon: Users },
              { id: "discussions", label: "Discussions", icon: Hash },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 font-medium transition-colors
                  ${
                    activeTab === tab.id
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "feed" && (
              <div className="space-y-6">
                {/* Create Post */}
                <div
                  className=" rounded-xl p-4 shadow-sm"
                  style={{ backgroundColor: "#1a212e" }}
                >
                  <div className="flex space-x-4">
                    <img
                      src="https://colorlib.com/wp/wp-content/uploads/sites/2/socifly-community-website-template.jpg.webp"
                      alt="Your avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <input
                      type="text"
                      placeholder="Share your fitness journey..."
                      className="flex-1 bg-gray-100 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
                      <Camera className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.avatar}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div
                              className="font-semibold"
                              style={{ color: "#000" }}
                            >
                              {post.author}
                            </div>
                            <div className="text-sm text-gray-500">
                              {post.timeAgo} • {post.group}
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-gray-900 mb-4">{post.content}</p>

                      {post.media && (
                        <img
                          src={post.media}
                          alt=""
                          className="w-full rounded-lg mb-4"
                        />
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                            <Heart className="w-6 h-6" />
                            <span>{post.likes}</span>
                          </button>
                          <button
                            onClick={() => setShowComments(!showComments)}
                            className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors"
                          >
                            <MessageCircle className="w-6 h-6" />
                            <span>{post.comments.length}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                            <Share2 className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    {showComments && (
                      <div className="border-t">
                        <div className="p-4 space-y-4">
                          {post.comments.map((comment) => (
                            <div key={comment.id} className="flex space-x-3">
                              <img
                                src={comment.avatar}
                                alt=""
                                className="w-8 h-8 rounded-full"
                              />
                              <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl p-3">
                                  <div className="font-medium">
                                    {comment.author}
                                  </div>
                                  <p className="text-gray-700">
                                    {comment.content}
                                  </p>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {comment.timeAgo}
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Add Comment */}
                          <div className="flex space-x-3 mt-4">
                            <img
                              src="/api/placeholder/32/32"
                              alt="Your avatar"
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1 flex">
                              <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="flex-1 bg-gray-100 rounded-l-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                              <button
                                onClick={() => handleAddComment(post.id)}
                                className="bg-purple-600 text-white px-4 rounded-r-full hover:bg-purple-700 transition-colors"
                              >
                                <Send className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "groups" && (
              <div className="grid grid-cols-2 gap-6">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className=" rounded-xl p-6 shadow-sm"
                    style={{ border: "1px solid #fff" }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={group.avatar}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <p className="text-gray-500">{group.members} members</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <button
                      className={`w-full py-2 rounded-lg font-medium ${
                        group.isJoined
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      } transition-colors`}
                    >
                      {group.isJoined ? "Joined" : "Join Group"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "discussions" && (
              <div
                className=" rounded-xl shadow-sm"
                style={{ border: "1px solid #fff" }}
              >
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold">Recent Discussions</h2>
                </div>
                <div className="divide-y">
                  {discussions.map((discussion) => (
                    <div
                      key={discussion.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-lg hover:text-purple-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Started by {discussion.author} •{" "}
                            {discussion.replies} replies • Active{" "}
                            {discussion.lastActive} ago
                          </p>
                        </div>
                        <button className="px-4 py-2 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors">
                          Join Discussion
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-80 hidden lg:block">
            <div
              className=" rounded-xl p-6 shadow-sm sticky top-24"
              style={{ borderLeft: "1px solid #fff" }}
            >
              <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "#Fitness",
                  "#Motivation",
                  "#Workout",
                  "#HealthyLiving",
                  "#Exercise",
                  "#Wellness",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 
                      hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommunityHub;
