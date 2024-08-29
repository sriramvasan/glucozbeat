"use client";

import { z } from "zod";
import {
  RiskCalculatorAgeGroup,
  riskCalculatorFormSchema,
  RiskCalculatorPlaceOfBirth,
} from "./schema";
import { createRef, useEffect, useState } from "react";
import { LearnMoreAboutGSMRisks } from "./LearnMore";

interface ResultsProps {
  formData: z.infer<typeof riskCalculatorFormSchema>;
}

const calculateRiskScore = (
  formData: z.infer<typeof riskCalculatorFormSchema>
) => {
  let riskScore = 0;

  const bmi = formData.weight / (formData.height / 100) ** 2;
  console.log(bmi);
  if (bmi <= 24.9) {
    riskScore += 5;
  } else if (bmi <= 29.9) {
    riskScore += 10;
  } else if (bmi <= 34.9) {
    riskScore += 25;
  } else {
    riskScore += 50;
  }

  console.log("bmi", riskScore);

  const highestAgeInGroup = RiskCalculatorAgeGroup[formData.ageGroup].includes(
    "-"
  )
    ? parseInt(RiskCalculatorAgeGroup[formData.ageGroup].split("-")[1])
    : parseInt(RiskCalculatorAgeGroup[formData.ageGroup].split(" ")[0]);
  if (highestAgeInGroup <= 19) {
    riskScore += 5;
  } else if (highestAgeInGroup <= 24) {
    riskScore += 10;
  } else if (highestAgeInGroup <= 29) {
    riskScore += 15;
  } else if (highestAgeInGroup <= 34) {
    riskScore += 20;
  } else if (highestAgeInGroup <= 39) {
    riskScore += 25;
  } else if (highestAgeInGroup <= 44) {
    riskScore += 30;
  } else {
    riskScore += 35;
  }

  console.log("age", riskScore);

  switch (formData.placeOfBirth) {
    case RiskCalculatorPlaceOfBirth["Australia"]:
      riskScore += 8;
      break;
    case RiskCalculatorPlaceOfBirth["North Africa and Middle East"]:
      riskScore += 10;
      break;
    case RiskCalculatorPlaceOfBirth["South Asia and Central Asia"]:
      riskScore += 15;
      break;
    case RiskCalculatorPlaceOfBirth["Nouth Asia, East Asia and Southeast Asia"]:
      riskScore += 12;
      break;
    case RiskCalculatorPlaceOfBirth["Europe"]:
      riskScore += 5;
      break;
    case RiskCalculatorPlaceOfBirth["Americas"]:
      riskScore += 6;
      break;
    default:
      riskScore += 7;
  }

  console.log("place", riskScore);

  if (formData.addictions) {
    riskScore += 5;
  }

  return riskScore;
};

const getRiskCategory = (riskScore: number): "Low" | "Moderate" | "High" => {
  if (riskScore <= 40) {
    return "Low";
  } else if (riskScore <= 70) {
    return "Moderate";
  } else {
    return "High";
  }
};

// const HighRiskNextSteps = () => {
//   const [option, setOption] = useState(0);

//   return (
//     <>
//       <div className="divider px-12"></div>
//       <h3>
//         Since you&apos;re at <b className="text-red-400">high risk</b>
//       </h3>
//       <div>
//         <div className="form-control">
//           <label className="label cursor-pointer justify-normal">
//             <input
//               type="radio"
//               name="radio-10"
//               className="radio"
//               checked={option === 0}
//               onChange={() => setOption(0)}
//             />
//             <span className="label-text pl-2">
//               I want to learn how to{" "}
//               <b className="text-red-400">prevent or delay type 2 diabetes.</b>
//             </span>
//           </label>
//         </div>
//         <div className="form-control">
//           <label className="label cursor-pointer justify-normal">
//             <input
//               type="radio"
//               name="radio-10"
//               className="radio"
//               checked={option === 1}
//               onChange={() => setOption(1)}
//             />
//             <span className="label-text pl-2">
//               I have been diagnosed with type 1 or type 2 diabetes.
//             </span>
//           </label>
//         </div>
//       </div>
//       <div className="card glass text-sm px-4 py-2 mt-2">
//         {option === 0 && (
//           <p>
//             Even with prediabetes, you have the power to improve your health.
//             Studies show that a National Diabetes Prevention Program can help
//             you lose weight, reduce your risk for diabetes, and improve your
//             overall wellbeing.
//           </p>
//         )}
//         {option === 1 && (
//           <p>
//             Managing diabetes can be a challenge and can seem overwhelming.
//             Having a diabetes educator can make managing your diabetes easier.
//             They work with you to develop a plan to stay healthy, and give you
//             the tools and ongoing support you need to make that plan a regular
//             part of your life.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

export const Results = ({ formData }: ResultsProps) => {
  const riskScore = calculateRiskScore(formData);
  const riskCategory = getRiskCategory(riskScore);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const riskCategoryColor = {
    Low: "text-green-400",
    Moderate: "text-yellow-400",
    High: "text-red-400",
  }[riskCategory];

  const learnMoreRef = createRef<HTMLDialogElement>();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 pt-8">
      <div className="flex flex-col justify-center gap-2">
        <div className="rating rating-lg gap-1">
          <input
            type="radio"
            name="riskCategory"
            className="mask mask-heart bg-green-400"
            disabled
            checked={riskCategory === "Low"}
          />
          <input
            type="radio"
            name="riskCategory"
            className="mask mask-heart bg-yellow-400"
            disabled
            checked={riskCategory === "Moderate"}
          />
          <input
            type="radio"
            name="riskCategory"
            className="mask mask-heart bg-red-400"
            disabled
            checked={riskCategory === "High"}
          />
        </div>
        <h1 className={`text-2xl font-bold text-center ${riskCategoryColor}`}>
          {riskCategory} Risk
        </h1>
      </div>
      <div role="alert" className="alert w-full md:w-1/2 mx-auto">
        <div>
          {riskCategory === "Low" && (
            <div className="text-sm">
            <h3 className="bold-16" style={{ marginBottom: '1rem' }}>Your results indicate a low GSM risk</h3>
              Great news! 
              Keep up your healthy habits and continue to take care of yourself and 
              your baby. Remember, regular check-ups and maintaining a balanced diet 
              and exercise routine are key to a healthy pregnancy.
            </div>
          )}

          {riskCategory === "Moderate" && (
            <div className="text-sm">
                <h3 className="bold-16" style={{ marginBottom: '1rem' }}>Your results indicate a moderate GSM risk</h3>
              This is a good time to focus on your health and take proactive steps to manage 
              your well-being. Consider speaking with your healthcare provider about your 
              results. They can provide guidance on diet, exercise, and monitoring to help 
              you reduce your risk and ensure a healthy pregnancy.
            </div>
          )}

          {riskCategory === "High" && (
            <div className="text-sm">
                <h3 className="bold-16" style={{ marginBottom: '1rem' }}>Your results indicate a high GSM risk</h3>
              It's important to take this seriously, but don't worry—we're here to support you. 
              We recommend reaching out to your healthcare provider as soon as possible to discuss 
              your results and the best steps forward. With the right care and lifestyle adjustments, 
              you can manage this risk and have a healthy pregnancy.
            </div>
          )}
        </div>
      </div>

      <div>
        <LearnMoreAboutGSMRisks />
      </div>

      {/* {riskCategory === "High" && (
        <div className="w-full md:w-1/2 mx-auto">
          <HighRiskNextSteps />
        </div>
      )} */}
    </div>
  );
};
