import { categoryRepository } from "../repositories/category.repository";
import { createCustomError } from "../utils/customError";

export const categoryService = {
  create: async (name: string) => {
    if (!name) throw createCustomError(400, "Name wajib diisi");
    return categoryRepository.create(name);
  },

  getAll: async () => categoryRepository.findAll(),

  update: async (id: number, name: string) => {
    const exist = await categoryRepository.findById(id);
    if (!exist) throw createCustomError(404, "Category tidak ditemukan");
    return categoryRepository.update(id, name);
  },

  remove: async (id: number) => {
    const exist = await categoryRepository.findById(id);
    if (!exist) throw createCustomError(404, "Category tidak ditemukan");
    return categoryRepository.remove(id);
  },
};
