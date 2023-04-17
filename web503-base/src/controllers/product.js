import Product from '../models/product'
import Category from '../models/category'
import { productSchema } from '../schemas/product'

export const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        return res.json(products);
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId", "products")
        return res.json(product);
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const add = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body, { abortEarly: false })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const product = await Product.create(req.body)
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product.id,
            }
        })
        return res.status(201).json(product);
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.json({
            message: "Xoa thanh cong ",
            category

        });
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product);
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}