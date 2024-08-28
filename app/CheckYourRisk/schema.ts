import { z } from "zod";

export enum RiskCalculatorAgeGroup {
  "15-19",
  "20-24",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45 and above",
}

export enum RiskCalculatorPlaceOfBirth {
  "Australia",
  "North Africa and Middle East",
  "South Asia and Central Asia",
  "Nouth Asia, East Asia and Southeast Asia",
  "Europe",
  "Americas",
  "Other",
}

export const riskCalculatorFormSchema = z.object({
  ageGroup: z.nativeEnum(RiskCalculatorAgeGroup),
  placeOfBirth: z.nativeEnum(RiskCalculatorPlaceOfBirth),
  weight: z.number(),
  height: z.number(),
  familyHistory: z.boolean(),
  addictions: z.boolean(),
});
