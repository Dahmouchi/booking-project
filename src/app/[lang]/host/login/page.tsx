/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useTransition } from "react";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";
import { WelcomeStep } from "../_components/steps/WelcomeStep";
import { PersonalInfoStep } from "../_components/steps/PersonalInfoStep";
import { PropertyDetailsStep } from "../_components/steps/PropertyDetailsStep";
import { AmenitiesStep } from "../_components/steps/AmenitiesStep";
import { PhotosStep } from "../_components/steps/PhotosStep";
import { AvailabilityStep } from "../_components/steps/AvailabilityStep";
import { PricingStep } from "../_components/steps/PricingStep";
import { ReviewAndPublishStep } from "../_components/steps/ReviewAndPublishStep";
import { ProgressIndicator } from "../_components/steps/ProgressIndicator";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { createPropertyAndUpdateUser, UpdateToHost } from "@/actions/host";
import { useRouter } from "next/navigation";
import Image from "next/image";

function App() {
    const { data: session, update } = useSession();

  const {
    currentStep,
    formData,
    errors,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    getProgress,
  } = useRegistrationForm();
  console.log(session?.user);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const finish = async () => {
    if (session) {
      startTransition(async () => {
        const result = await createPropertyAndUpdateUser(formData);

        if (result.success) {
          const res = await UpdateToHost(session?.user.id);
          if (res.success) {
            await update({ role: "HOST" });
            toast.success(
              "Félicitations ! Votre annonce a été publiée avec succès !"
            );

            router.push("/host/dashboard");
          }
        } else {
          toast.error("Erreur: " + result.error);
        }
      });
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onNext={nextStep} />;
      case 2:
        return (
          <PersonalInfoStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <PropertyDetailsStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <AmenitiesStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <PhotosStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return (
          <AvailabilityStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 7:
        return (
          <PricingStep
            formData={formData}
            errors={errors}
            onUpdateField={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 8:
        return (
          <ReviewAndPublishStep
            formData={formData}
            onNext={finish}
            onPrev={prevStep}
            goToStep={goToStep}
          />
        );
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Étape inconnue</h2>
            <p className="text-gray-600 mb-8">
              Veuillez revenir à la première étape.
            </p>
            <button
              onClick={() => goToStep(1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Retour à l&apos;accueil
            </button>
          </div>
        );
    }
  };
  useEffect(() => {
    if (session?.user.role === "HOST") {
      router.push("/host/dashboard");
    }
  }, [session, router]);
  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep > 1 && (
        <div className="container mx-auto px-4">
          <header className="flex justify-between items-center p-4 border-b">
            <Image src="/images/logo.png" alt="Logo" width={82} height={82} />
            <div className="flex gap-2 lg:text-md text-xs">
              <button className="px-4 py-2 border rounded-full">
                Des questions ?
              </button>
              <button className="px-4 py-2 border rounded-full">
                Enregistrer et quitter
              </button>
            </div>
          </header>
          <ProgressIndicator
            currentStep={currentStep}
            progress={getProgress()}
          />{" "}
        </div>
      )}

      <main className="">{renderStep()}</main>
    </div>
  );
}
export default App;
