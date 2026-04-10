import Types "../types/products";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type Product = Types.Product;

  public func getAll(products : List.List<Product>) : [Product] {
    Runtime.trap("not implemented");
  };

  public func getFeatured(products : List.List<Product>) : [Product] {
    Runtime.trap("not implemented");
  };

  public func getById(products : List.List<Product>, id : Nat) : ?Product {
    Runtime.trap("not implemented");
  };

  public func getByCategory(products : List.List<Product>, category : Text) : [Product] {
    Runtime.trap("not implemented");
  };

  public func initCatalog(products : List.List<Product>) {
    Runtime.trap("not implemented");
  };
};
