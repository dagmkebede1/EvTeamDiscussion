import { product } from "../model/product.js";

export const addProduct = async (req, res) => {
  const { title, desc } = req.body;
  try {
    let result = await product.create({ title, desc });

    res.json({
      msg: "Product created successfully",
      result,
    });
  } catch (error) {}
};
