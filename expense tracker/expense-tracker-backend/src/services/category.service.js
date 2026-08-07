const prisma = require("../config/prisma");

const createCategory = async (name, userId) => {
  const existingCategory = await prisma.category.findFirst({
    where: {
      name,
      userId,
    },
  });

  if (existingCategory) {
    throw new Error("Category already exists");
  }

  const category = await prisma.category.create({
    data: {
      name,
      userId,
    },
  });

  return category;
};

module.exports = {
  createCategory,
};