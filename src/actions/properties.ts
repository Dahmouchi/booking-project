/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";


import { uploadImage } from "./images";

interface PropertyFormData {
  title:string;
  description?: string;
  address?: string;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  maxGuests?: number;
  propertyType: string;
  pricePerNight?: number;
  city?: string;
  country?: string;
  minStayDuration?: number;
  maxStayDuration?: number;
  bookingNotice?: string;
  seasonalPricing?: boolean;
  longStayDiscounts?: boolean;
  images?:File[]; // must be URLs (not File objects)
  amenities?: string[];
  additionalServices?: string[];
}

export async function createProperty(formData: PropertyFormData,userId:string) {
  try {
    const {
      title,
      description,
      address,
      bedrooms,
      beds,
      bathrooms,
      maxGuests,
      propertyType,
      pricePerNight,
      city,
      country,
      minStayDuration,
      maxStayDuration,
      bookingNotice,
      seasonalPricing,
      longStayDiscounts,
      images,
      amenities,
      additionalServices,
    } = formData;

    // Upload photos to Cloudflare if any
    const uploadedPhotoUrls: string[] = [];
    if (images && images.length > 0) {
      for (const photo of images) {
        try {
          // Assuming `photo` is a File object
          const url = await uploadImage(photo as unknown as File);
          uploadedPhotoUrls.push(url);
        } catch (err) {
          console.error("Erreur lors de l'upload d'une photo:", err);
          // Optionally skip failed uploads instead of stopping
        }
      }
    }

    // Create property
    const property = await prisma.property.create({
      data: {
        title,
        description,
        address,
        bedrooms,
        beds,
        bathrooms,
        maxGuests,
        type: propertyType as any,
        pricePerNight,
        city,
        country,
        minStayDuration,
        maxStayDuration,
        bookingNotice,
        seasonalPricing,
        longStayDiscounts,
        images: uploadedPhotoUrls, // <-- store uploaded URLs
        ownerId: userId,
      },
    });
    if (amenities && amenities.length > 0) {
      await prisma.propertyAmenity.createMany({
        data: amenities.map((amenityId: string) => ({
          propertyId: property.id,
          amenityId,
        })),
        skipDuplicates: true, // avoid duplicate entries
      });
    }

    // Connect additional services
    if (additionalServices && additionalServices.length > 0) {
      await prisma.propertyService.createMany({
        data: additionalServices.map((serviceId: string) => ({
          propertyId: property.id,
          serviceId,
        })),
        skipDuplicates: true,
      });
    } 

    return { success: true, property };
  } catch (error: any) {
    console.error("❌ Error:", error);
    return { success: false, error: error.message };
  }
}

export async function updateProperty(propertyId: string, formData: PropertyFormData) {
  try {
    const {
      title,
      description,
      address,
      bedrooms,
      beds,
      bathrooms,
      maxGuests,
      propertyType,
      pricePerNight,
      city,
      country,
      minStayDuration,
      maxStayDuration,
      bookingNotice,
      seasonalPricing,
      longStayDiscounts,
      images,
      amenities,
      additionalServices,
    } = formData;

    const uploadedPhotoUrls: string[] = [];
    if (images && images.length > 0) {
      for (const photo of images) {
        try {
          const url = await uploadImage(photo as unknown as File);
          uploadedPhotoUrls.push(url);
        } catch (err) {
          console.error("Erreur upload photo:", err);
        }
      }
    }

    const property = await prisma.property.update({
      where: { id: propertyId },
      data: {
        title,
        description,
        address,
        bedrooms,
        beds,
        bathrooms,
        maxGuests,
        type: propertyType as any,
        pricePerNight,
        city,
        country,
        minStayDuration,
        maxStayDuration,
        bookingNotice,
        seasonalPricing,
        longStayDiscounts,
        images: uploadedPhotoUrls.length > 0 ? uploadedPhotoUrls : undefined,
      },
    });

    if (amenities) {
      await prisma.propertyAmenity.deleteMany({ where: { propertyId } });
      await prisma.propertyAmenity.createMany({
        data: amenities.map((amenityId: string) => ({
          propertyId,
          amenityId,
        })),
      });
    }

    if (additionalServices) {
      await prisma.propertyService.deleteMany({ where: { propertyId } });
      await prisma.propertyService.createMany({
        data: additionalServices.map((serviceId: string) => ({
          propertyId,
          serviceId,
        })),
      });
    }

    return { success: true, property };
  } catch (error: any) {
    console.error("❌ Error updating:", error);
    return { success: false, error: error.message };
  }
}

export async function listPropertis() {
  try {
    return await prisma.property.findMany({
      include: {
        services: true,
        amenities: true,
      },
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.error("Error listing services:", error);
    throw new Error("Impossible de charger les services");
  }
}

export async function getPropertyById(id:string) {
  try {
    return await prisma.property.findUnique({
      where:{id},
      include: {
        services: {
          select:{
            id:true
          }
        },
        amenities: {
           select:{
            id:true
          }
        },
      },
    });
  } catch (error) {
    console.error("Error listing services:", error);
    throw new Error("Impossible de charger les services");
  }
}