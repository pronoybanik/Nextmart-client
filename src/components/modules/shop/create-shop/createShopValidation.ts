import { z } from "zod";

export const createShopSchema = z.object({
  shopName: z.string().min(1, "Shop name is required"),
  businessLicenseNumber: z.string().min(1, "Business License Number is required"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid contact number format"),
  website: z.string().url("Invalid website URL").optional(),
  establishedYear: z
    .number()
    .int("Must be a whole number")
    .min(1900, "Year must be after 1900")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  taxIdentificationNumber: z.string().min(1, "Tax Identification Number is required"),
  socialMediaLinks: z
    .object({
      facebook: z.string().url("Invalid Facebook URL").optional(),
      twitter: z.string().url("Invalid Twitter URL").optional(),
      instagram: z.string().url("Invalid Instagram URL").optional(),
    })
    .partial(), 
  servicesOffered: z
    .string()
    .min(1, "At least one service is required"),
});
