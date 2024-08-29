"use client";

import React, { 
    ChangeEvent, 
    ReactNode, 
    useReducer, 
    useRef, 
    useState 
} from "react";
import { z } from "zod";
import {
    RiskCalculatorAgeGroup,
    riskCalculatorFormSchema,
    RiskCalculatorPlaceOfBirth,
} from "./schema";
import { Results } from "./Results";
import Image from "next/image";

const partialFormSchema = riskCalculatorFormSchema.partial();

interface FormStepProps {
    formData: z.infer<typeof partialFormSchema>;
    setFormData: (data: z.infer<typeof partialFormSchema>) => void;
    prevStep: () => void;
    nextStep: () => void;
    isFormDataValid: (
        key: keyof z.infer<typeof riskCalculatorFormSchema>
    ) => boolean;
    getFormDataErrorMessage: (
        key: keyof z.infer<typeof riskCalculatorFormSchema>
      ) => string | undefined;
    updateFormData: (
        key: keyof z.infer<typeof riskCalculatorFormSchema>,
        value: any
    ) => void;
}

const StepNavigation = ({
    prevStep,
    nextStep,
    eligibleToProceed,
}: {
    prevStep: () => void;
    nextStep: () => void;
    eligibleToProceed: boolean;
}) => {
    return (
        <div className="card-actions justify-between mt-4">
            <button className="btn" onClick={prevStep}>
                Back
            </button>
            <button
                className="btn btn-primary"
                onClick={nextStep}
                disabled={!eligibleToProceed}
            >
                Next
            </button>
        </div>
    );
};

const WhyDoesThisMatter = ({ children }: { children: ReactNode }) => {
    return (
        <div className="collapse mt-1">
            <input type="checkbox" className="absolute" />
            <div className="collapse-title p-0 min-h-0 text-gray-500">
                🛈 Why does this matter?
            </div>
            <div className="collapse-content pl-0">{children}</div>
        </div>
    );
};

const IntroStep = ({ nextStep }: FormStepProps) => {
    return (
        <>
            <h2 className="card-title text-3xl">
                Let's explore your gestational health together
            </h2>
            <p className="regular-20">
            <span className="bold-purple">Gestational diabetes</span> is a type of diabetes 
            that can happen during pregnancy, even if you've never had diabetes before. 
            Most women are checked for gestational diabetes <span className="bold-purple">between
                 24 and 28 weeks of pregnancy</span>, but some may need to be tested earlier. 
                 Since this condition usually doesn’t cause any symptoms, testing is very 
                 important to keep you and your baby healthy.
            </p>
            <p className="regular-20">
                In this quiz, we’ll help you understand more about your gestational health 
                during pregnancy. Let's explore this journey together and give you the 
                information you need to stay well!
            </p>
            <button className="btn btn-primary btn-lg btn-wide" onClick={nextStep}>
                Start My Health Check
            </button>
            <div className="mt-1 text-gray-500">
                <p className="text-sm">
                This Gestational health check was developed by EZPZ based on Australian Institute of Health and Welfare 2021 Diabetes statistics in combination with other academic studies.
                This is not intended to be a substitute for professional medical advice and should not be relied on as health or personal advice
                </p>
                <p className="text-sm mt-4">&copy; 2024 Glucoz</p>
            </div>
        </>
    );
};

const AgeGroupStep = ({
    formData,
    updateFormData,
    isFormDataValid,
    prevStep,
    nextStep,
}: FormStepProps) => {
    return (
        <>
            <div>
                <h2 className="card-title text-3xl">What&apos;s your age group?</h2>
                <WhyDoesThisMatter>
                    As we get older, the chance of developing diabetes can increase.
                </WhyDoesThisMatter>
                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {Object.keys(RiskCalculatorAgeGroup)
                        .filter((key) => isNaN(Number(key)))
                        .map((ageGroup) => (
                            <input
                                key={ageGroup}
                                type="radio"
                                name="ageGroup"
                                aria-label={ageGroup}
                                value={ageGroup}
                                className="btn"
                                checked={
                                    formData.ageGroup ===
                                    RiskCalculatorAgeGroup[
                                    ageGroup as keyof typeof RiskCalculatorAgeGroup
                                    ]
                                }
                                onChange={(e) => {
                                    updateFormData(
                                        "ageGroup",
                                        RiskCalculatorAgeGroup[
                                        e.target.value as keyof typeof RiskCalculatorAgeGroup
                                        ]
                                    );
                                    setTimeout(nextStep, 800);
                                }}
                            />
                        ))}
                </form>
            </div>
            <StepNavigation
                prevStep={prevStep}
                nextStep={nextStep}
                eligibleToProceed={isFormDataValid("ageGroup")}
            />
        </>
    );
};

const PlaceOfBirthStep = ({
    formData,
    updateFormData,
    isFormDataValid,
    prevStep,
    nextStep,
}: FormStepProps) => {
    return (
        <>
            <div>
                <h2 className="card-title text-3xl">Where were you born?</h2>
                <WhyDoesThisMatter>
                    Some racial and ethnic groups may have a higher chance of developing
                    diabetes.
                </WhyDoesThisMatter>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <form className="grid grid-cols-1 sm:grid-cols-2 md:3 gap-4 mt-4">
                            {Object.keys(RiskCalculatorPlaceOfBirth)
                                .filter((key) => isNaN(Number(key)))
                                .map((placeOfBirth) => (
                                    <input
                                        key={placeOfBirth}
                                        type="radio"
                                        name="placeOfBirth"
                                        aria-label={placeOfBirth}
                                        value={placeOfBirth}
                                        className="btn"
                                        checked={
                                            formData.placeOfBirth ===
                                            RiskCalculatorPlaceOfBirth[
                                            placeOfBirth as keyof typeof RiskCalculatorPlaceOfBirth
                                            ]
                                        }
                                        onChange={(e) => {
                                            updateFormData(
                                                "placeOfBirth",
                                                RiskCalculatorPlaceOfBirth[
                                                e.target
                                                    .value as keyof typeof RiskCalculatorPlaceOfBirth
                                                ]
                                            );
                                            setTimeout(nextStep, 800);
                                        }}
                                    />
                                ))}
                        </form>
                    </div>
                    <div className="order-first lg:order-last">
                        <Image
                            className="ml-auto"
                            src="/asia-region-map.webp"
                            alt=""
                            width={500}
                            height={384}
                        />
                    </div>
                </div>
            </div>
            <StepNavigation
                prevStep={prevStep}
                nextStep={nextStep}
                eligibleToProceed={isFormDataValid("placeOfBirth")}
            />
        </>
    );
};

const WeightAndHeightStep = ({
    formData,
    updateFormData,
    isFormDataValid,
    getFormDataErrorMessage,
    prevStep,
    nextStep,
}: FormStepProps) => {
    return (
        <>
            <div>
                <h2 className="card-title text-3xl">
                    What were your most recent weight and height before you got pregnant?
                </h2>
                <WhyDoesThisMatter>
                    Your weight and height help us calculate your Body Mass Index (BMI). A
                    higher BMI can increase the chance of developing diabetes.
                </WhyDoesThisMatter>
                <div className="px-8 flex flex-col lg:flex-row items-center justify-center mt-4 [&_input.grow]:max-w-32">
                    <label className="form-control relative">
                        <div className="input input-bordered flex items-center gap-2">
                            Weight
                            <input
                                type="number"
                                name="weight"
                                aria-label="Weight"
                                value={formData.weight}
                                className="grow"
                                onChange={(e) =>
                                    updateFormData("weight", Number(e.target.value))
                                }
                            />
                            kg
                        </div>
                        <div className="label absolute top-10">
                            <span className="label-text-alt text-error">
                                {getFormDataErrorMessage("weight")}
                            </span>
                        </div>
                    </label>
                    <span className="text-gray-500 text-lg px-4">/</span>
                    <div className="indicator">
                        <span className="indicator-item badge">2</span>
                        <label className="form-control relative">
                            <div className="input input-bordered flex items-center gap-2">
                                Height
                                <input
                                    type="number"
                                    name="height"
                                    aria-label="Height"
                                    value={formData.height}
                                    className="grow"
                                    onChange={(e) =>
                                        updateFormData("height", Number(e.target.value))
                                    }
                                />
                                cm
                            </div>
                            <div className="label absolute top-10">
                                <span className="label-text-alt text-error">
                                    {getFormDataErrorMessage("height")}
                                </span>
                            </div>
                        </label>
                    </div>
                    <span className="text-gray-500 text-lg px-4">=</span>
                    <label className="input input-bordered flex items-center gap-2">
                        BMI
                        <input
                            readOnly
                            value={
                                formData.weight && formData.height
                                    ? (formData.weight / (formData.height / 100) ** 2).toFixed(1)
                                    : ""
                            }
                            className="grow"
                        />
                    </label>
                </div>
            </div>
            <StepNavigation
                prevStep={prevStep}
                nextStep={nextStep}
                eligibleToProceed={
                    isFormDataValid("weight") && isFormDataValid("height")
                }
            />
        </>
    );
};

const FamilyHistoryStep = ({
    formData,
    updateFormData,
    isFormDataValid,
    prevStep,
    nextStep,
}: FormStepProps) => {
    return (
        <>
            <div>
                <h2 className="card-title text-3xl">
                    Have your parents, brothers, or sisters been told they have diabetes
                    (type 1 or type 2)?
                </h2>
                <WhyDoesThisMatter>
                    Having a family history of diabetes may increase your chance of
                    developing diabetes.
                </WhyDoesThisMatter>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <input
                        type="radio"
                        name="familyHistory"
                        aria-label="Yes"
                        value="true"
                        className="btn"
                        checked={formData.familyHistory === true}
                        onChange={(e) => {
                            updateFormData("familyHistory", true);
                            setTimeout(nextStep, 500);
                        }}
                    />
                    <input
                        type="radio"
                        name="familyHistory"
                        aria-label="No"
                        value="false"
                        className="btn"
                        checked={formData.familyHistory === false}
                        onChange={(e) => {
                            updateFormData("familyHistory", false);
                            setTimeout(nextStep, 500);
                        }}
                    />
                </form>
            </div>
            <StepNavigation
                prevStep={prevStep}
                nextStep={nextStep}
                eligibleToProceed={isFormDataValid("familyHistory")}
            />
        </>
    );
};

const AddictionsStep = ({
    formData,
    updateFormData,
    isFormDataValid,
    prevStep,
    nextStep,
}: FormStepProps) => {
    return (
        <>
            <div>
                <h2 className="card-title text-3xl">
                    Do you smoke cigarettes or use other tobacco products every day?
                </h2>
                <WhyDoesThisMatter>
                    Smoking during pregnancy can raise the chances of developing diabetes.
                </WhyDoesThisMatter>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <input
                        type="radio"
                        name="addictions"
                        aria-label="Yes"
                        value="true"
                        className="btn"
                        checked={formData.addictions === true}
                        onChange={(e) => {
                            updateFormData("addictions", true);
                            setTimeout(nextStep, 500);
                        }}
                    />
                    <input
                        type="radio"
                        name="addictions"
                        aria-label="No"
                        value="false"
                        className="btn"
                        checked={formData.addictions === false}
                        onChange={(e) => {
                            updateFormData("addictions", false);
                            setTimeout(nextStep, 500);
                        }}
                    />
                </form>
            </div>
            <StepNavigation
                prevStep={prevStep}
                nextStep={nextStep}
                eligibleToProceed={isFormDataValid("addictions")}
            />
        </>
    );
};

const ResultsStep = ({ formData }: FormStepProps) => {
    const data = riskCalculatorFormSchema.parse(formData);
    return <Results formData={data} />;
};

interface StepDef {
    key: string;
    label?: string;
    component: React.FC<FormStepProps>;
}

const steps: StepDef[] = [
    {
        key: "start",
        component: IntroStep,
        label: "Start",
    },
    {
        key: "age-group",
        component: AgeGroupStep,
    },
    {
        key: "place-of-birth",
        component: PlaceOfBirthStep,
    },
    {
        key: "weight-and-height",
        component: WeightAndHeightStep,
    },
    {
        key: "family-history",
        component: FamilyHistoryStep,
    },
    {
        key: "addictions",
        component: AddictionsStep,
    },
    {
        key: "results",
        component: ResultsStep,
        label: "Results",
    },
].map((step, i) => ({ ...step, label: step.label ?? i.toString() }));

export default function CheckYourRiskPage() {
    const [formData, setFormData] = useState<z.infer<typeof partialFormSchema>>({
        ageGroup: undefined,
        placeOfBirth: undefined,
        weight: undefined,
        height: undefined,
        familyHistory: undefined,
        addictions: undefined,
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [finishedSteps, markStepAsFinished] = useReducer(
        (finishedSteps: boolean[], stepIndex: number) => {
            const newFinishedSteps = [...finishedSteps];
            newFinishedSteps[stepIndex] = true;
            return newFinishedSteps;
        },
        steps.map(() => false)
    );

    const errorDialogRef = useRef<HTMLDialogElement>(null);
    const [errorDialogMessage, setErrorDialogMessage] = useState("");

    const stepProps: FormStepProps = {
        formData,
        setFormData,
        prevStep: () => {
            if (currentStep - 1 >= 0) {
                setCurrentStep(currentStep - 1);
            }
        },
        nextStep: () => {
            if (currentStep + 1 < steps.length) {
                markStepAsFinished(currentStep);
                setCurrentStep(currentStep + 1);
            }
        },
        isFormDataValid: (key) => {
            // @ts-ignore
            return riskCalculatorFormSchema.pick({ [key]: true }).safeParse({
                [key]: formData[key],
            }).success;
        },
        getFormDataErrorMessage: (key) => {
            const { success, error } = riskCalculatorFormSchema
                // @ts-ignore
                .pick({ [key]: true })
                .safeParse({
                    [key]: formData[key],
                });
            if (success) {
                return undefined;
            }
            return error.format()[key]?._errors[0];
        },
        updateFormData: (key, value) => {
            const { success, error } = riskCalculatorFormSchema
                // @ts-ignore
                .pick({ [key]: true })
                .safeParse({ [key]: value });
            setFormData({ ...formData, [key]: value });
        },
    };

    return (
        <div className="container mx-auto pb-12 sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold py-6 text-gray-900 sm:truncate sm:text-5xl">
                Your Pregnancy Wellness Check
            </h2>

            <div className="card glass">
                <div className="card-body">
                    <div role="tablist" className="tabs tabs-boxed mb-2">
                        {steps.map((step, i) => (
                            <button
                                key={step.key}
                                role="tab"
                                className={`tab ${currentStep === i ? "tab-active" : ""}`}
                                onClick={() => finishedSteps[i] && setCurrentStep(i)}
                            >
                                {step.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-y-4">
                        {steps[currentStep].component(stepProps)}
                    </div>

                    <dialog className="modal" ref={errorDialogRef}>
                        <div className="modal-box">
                            <p className="py-4">
                                {errorDialogMessage || "Something went wrong"}
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
}
