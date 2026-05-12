import { propertyManagementRepository } from "../repositories/propertyManagement.repository";
import { createCustomError } from "../utils/customError";
import { cloudinaryRemove, cloudinaryUpload } from "../utils/cloudinary";

export const propertyManagementService = {
  create: async (
    tenantId: number, 
    payload: any, 
    files?: Express.Multer.File[]
  ) => {
    if (!payload.name) throw createCustomError(400, "Name wajib diisi");
    if (!payload.categoryId) throw createCustomError(400, "Category wajib diisi");
    if (!payload.description) throw createCustomError(400, "Description wajib diisi");
    if (!payload.address) throw createCustomError(400, "Address wajib diisi");
    if (!files || files.length === 0) throw createCustomError(400, "Picture wajib diupload");

    const upload = await cloudinaryUpload(files[0], "properties");

    return propertyManagementRepository.create({
      tenantId,
      categoryId: Number(payload.categoryId),
      name: payload.name,
      description: payload.description,
      address: payload.address,
      image: upload.secure_url,
    });
  },

  detail: async (propertyId: number, tenantId: number) => {
    const property = await propertyManagementRepository.findById(propertyId);
    if (!property) throw createCustomError(404, "Property tidak ditemukan");
    if (property.tenantId !== tenantId) throw createCustomError(403, "Forbidden");
    return property;
  },

  update: async (propertyId: number, tenantId: number, payload: any, file?: Express.Multer.File) => {
    const property = await propertyManagementRepository.findById(propertyId);
    if (!property) throw createCustomError(404, "Property tidak ditemukan");
    if (property.tenantId !== tenantId) throw createCustomError(403, "Forbidden");

    let imageUrl = property.image;

    if (file) {
      await cloudinaryRemove(property.image);
      const upload = await cloudinaryUpload(file, "properties");
      imageUrl = upload.secure_url;
    }

    return propertyManagementRepository.update(propertyId, {
      name: payload.name ?? property.name,
      description: payload.description ?? property.description,
      address: payload.address ?? property.address,
      categoryId: payload.categoryId ? Number(payload.categoryId) : property.categoryId,
      image: imageUrl,
    });
  },

  remove: async (propertyId: number, tenantId: number) => {
    const property = await propertyManagementRepository.findById(propertyId);
    if (!property) throw createCustomError(404, "Property tidak ditemukan");
    if (property.tenantId !== tenantId) throw createCustomError(403, "Forbidden");

    await cloudinaryRemove(property.image);
    return propertyManagementRepository.remove(propertyId);
  },

  listTenant: async (tenantId: number) => {
    return propertyManagementRepository.findTenantProperties(tenantId);
  },
};
