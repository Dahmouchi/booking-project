/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HostRegistrationData } from '@/lib/types';
import { AMENITIES, ADDITIONAL_SERVICES } from '@/constant/data';
import * as LucideIcons from 'lucide-react';

interface AmenitiesStepProps {
  formData: HostRegistrationData;
  errors: Record<string, string>;
  onUpdateField: (field: keyof HostRegistrationData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const AmenitiesStep: React.FC<AmenitiesStepProps> = ({
  formData,
  errors,
  onUpdateField,
  onNext,
  onPrev,
}) => {
  const handleAmenityChange = (amenityId: string) => {
    const currentAmenities = formData.amenities;
    if (currentAmenities.includes(amenityId)) {
      onUpdateField(
        'amenities',
        currentAmenities.filter((id) => id !== amenityId)
      );
    } else {
      onUpdateField('amenities', [...currentAmenities, amenityId]);
    }
  };

  const handleServiceChange = (serviceId: string) => {
    const currentServices = formData.additionalServices;
    if (currentServices.includes(serviceId)) {
      onUpdateField(
        'additionalServices',
        currentServices.filter((id) => id !== serviceId)
      );
    } else {
      onUpdateField('additionalServices', [...currentServices, serviceId]);
    }
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Quels équipements proposez-vous ?
          </CardTitle>
          <p className="text-center text-gray-600">
            Sélectionnez les équipements et services disponibles dans votre propriété.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Équipements essentiels</h3>
            {errors.amenities && (
              <p className="text-sm text-red-500 mb-4">{errors.amenities}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {AMENITIES.map((amenity) => (
                <div
                  key={amenity.id}
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.amenities.includes(amenity.id)
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-blue-400'
                  }`}
                  onClick={() => handleAmenityChange(amenity.id)}
                >
                  {getIcon(amenity.icon)}
                  <span className="mt-2 text-sm text-center">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services supplémentaires (optionnel)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {ADDITIONAL_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${formData.additionalServices.includes(service.id)
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-green-400'
                  }`}
                  onClick={() => handleServiceChange(service.id)}
                >
                  {getIcon(service.icon)}
                  <span className="mt-2 text-sm text-center">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={onPrev}>
              Précédent
            </Button>
            <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
              Suivant
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};