"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch("/ourteam/ourteam.json");
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="lds-ring">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto max-w-[1440px] py-10">
      <h2 className="text-center text-4xl font-medium pb-8">OUR TEAM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col lg:gap-4 gap-2 justify-between items-center text-center uppercase"
          >
            <Image
              src={member.photo}
              alt={`${member.name} photo`}
              width={320}
              height={392}
              className="w-full h-auto object-cover"
            />
            <div>
              <p className="xl:text-2xl lg:text-xl text-base font-medium">
                {member.name.toUpperCase()}
              </p>
              <p className="text-[#0000007F] xl:text-xl lg:text-lg text-sm font-normal">
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
