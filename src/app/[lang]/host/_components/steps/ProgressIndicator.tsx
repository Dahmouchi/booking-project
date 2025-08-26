"use client";

import React from "react";
import { motion } from "framer-motion";
import { REGISTRATION_STEPS } from "@/constant/data";

interface ProgressIndicatorProps {
  currentStep: number;
  progress: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  progress,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-10">
      {/* Top header */}
      <div className="flex justify-between items-center mb-4">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium text-gray-700"
        >
          Étape <span className="font-semibold text-blue-600">{currentStep}</span>{" "}
          sur {REGISTRATION_STEPS.length}
        </motion.div>

        <motion.div
          key={progress}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium text-gray-700"
        >
          {Math.round(progress)}% complété
        </motion.div>
      </div>

      {/* Gradient progress bar */}
      <div className="relative w-full h-2 rounded-full bg-gray-200 mb-8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>

      {/* Steps indicators */}
      <div className="hidden md:flex justify-between items-start">
        {REGISTRATION_STEPS.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;

          return (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center text-center max-w-[140px] ${
                isCompleted || isCurrent ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 shadow-md ${
                  isCompleted
                    ? "bg-blue-600 text-white"
                    : isCurrent
                    ? "bg-blue-100 text-blue-600 border-2 border-blue-600"
                    : "bg-gray-200 text-gray-400"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {isCompleted ? "✓" : index + 1}
              </motion.div>

              <div className="text-sm font-semibold">{step.title}</div>
              <div className="text-xs text-gray-500 mt-1">{step.description}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
