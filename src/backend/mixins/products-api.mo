import Types "../types/products";
import ProductLib "../lib/products";
import List "mo:core/List";

mixin (products : List.List<Types.Product>) {
  public query func getProducts() : async [Types.Product] {
    ProductLib.getAll(products)
  };

  public query func getFeaturedProducts() : async [Types.Product] {
    ProductLib.getFeatured(products)
  };

  public query func getProductById(id : Nat) : async ?Types.Product {
    ProductLib.getById(products, id)
  };

  public query func getProductsByCategory(category : Text) : async [Types.Product] {
    ProductLib.getByCategory(products, category)
  };
};
