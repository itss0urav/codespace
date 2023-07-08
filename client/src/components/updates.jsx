import React from "react";
import Navbar from "./navbar";

const AnnouncementCard = () => {
  const announcements = [
    {
      id: 1,
      title: "New Feature Released!",
      content:
        "We're excited to announce the release of our new feature. Check it out now!",
      date: "July 8, 2023",
    },
    {
      id: 2,
      title: "Important Update",
      content:
        "Please note the upcoming system maintenance scheduled for July 12, 2023.",
      date: "July 10, 2023",
    },
    {
      id: 3,
      title: "Holiday Closure",
      content:
        "Our office will be closed from July 15 to July 20 for the summer holidays.",
      date: "July 14, 2023",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Updates & Announcements
        </h1>

        <div className="max-w-3xl">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-lg shadow-lg mb-6 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {announcement.title}
              </h2>
              <p className="text-gray-600 mb-4">{announcement.content}</p>
              <p className="text-sm text-gray-500">{announcement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
