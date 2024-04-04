"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
 
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      isAdmin,
      isActive,
      address,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear usuario");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {

  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear producto");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {

    const { id } =
      Object.fromEntries(formData);
  
    try {
      connectToDb();
      await Product.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Error al borrar producto");
    }
  
    revalidatePath("/dashboard/products");
  };

  export const deleteUser = async (formData) => {

    const { id } =
      Object.fromEntries(formData);
  
    try {
      connectToDb();
      await User.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Error al borrar usuario");
    }
  
    revalidatePath("/dashboard/products");
  };
