import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden">
      <div className="relative w-full h-40 md:h-56 lg:h-72 rounded-t-xl overflow-hidden">
        {/* For small screens use object-contain to avoid cropping */}
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-contain md:object-cover"
        />
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            {gitUrl && (
              <Link href={gitUrl} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </a>
              </Link>
            )}
            {previewUrl && (
              <Link href={previewUrl} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <EyeIcon className="w-6 h-6 text-white" />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="py-4 px-5">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
