import React, { ReactNode } from "react";

type ExperienceProps = {
  company: string;
  position: string;
  date: string;
  description: ReactNode;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  position,
  date,
  description,
}) => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1f1f1f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex-1 lg:w-1/3 mb-4 lg:mb-0">
        <h3 className="text-xl font-semibold text-white">{company}</h3>
        <h4 className="text-md text-gray-400">{position}</h4>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
      </div>
      <div className="flex-2 lg:w-2/3 lg:pl-6">
        <div className="text-gray-300">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
