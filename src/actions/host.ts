/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { hash } from "bcrypt";

import { uploadImage } from "./images";
export async function UpdateToHost(
  userId: string
) {
  try {
    const res = await prisma.user.update({
        where:{
            id:userId,
        },
        data:{
            role:"HOST",
        }
    })

    

    revalidatePath("/");
    return { success: true};
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}
export async function getClientById(id: string) {
  try {
    const client = await prisma.user.findUnique({
      where: { id },
    });
    return client;
  } catch (error) {
    console.error("Error fetching client:", error);
    return null;
  }
}

interface PropertyFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
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
  images?: string[]; // must be URLs (not File objects)
}

export async function createPropertyAndUpdateUser(
  formData: PropertyFormData
) {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
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
    } = formData;

    // Hash password if provided
    let hashedPassword: string | undefined;
    if (password) {
      hashedPassword = await hash(password, 10);
    }

    // Update user
    const user = await prisma.user.update({
      where: { email },
      data: {
        name: `${firstName} ${lastName}`,
        prenom: firstName,
        phone: Number(phone),
        ...(hashedPassword && { password: hashedPassword }),
      },
    });

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
        title: `${firstName} ${lastName} - Property`,
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
        ownerId: user.id,
      },
    });

    return { success: true, property, user };
  } catch (error: any) {
    console.error("❌ Error:", error);
    return { success: false, error: error.message };
  }
}

