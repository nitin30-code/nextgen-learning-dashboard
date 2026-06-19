"use client";

import { BookOpen, Code, FileCode, Server } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  progress: number;
  iconName: string;
}

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-zinc-900 rounded-xl p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        {iconName === "BookOpen" && <BookOpen size={22} />}
        {iconName === "Code" && <Code size={22} />}
        {iconName === "FileCode" && <FileCode size={22} />}
        {iconName === "Server" && <Server size={22} />}

        <h3 className="font-semibold">{title}</h3>
      </div>

      <div className="mt-4 h-2 bg-zinc-800 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
          }}
          className="h-2 bg-purple-500 rounded-full"
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {progress}% Complete
      </p>
    </motion.article>
  );
}