import axios from "axios";

class CategoryService {
  static getAllCategory = () =>
    axios.get("https://dummyjson.com/products/category-list");
}

export default CategoryService;
