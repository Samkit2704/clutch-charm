import Types "types/products";
import List "mo:core/List";
import ProductsMixin "mixins/products-api";
import ProductLib "lib/products";

actor {
  let products = List.empty<Types.Product>();
  ProductLib.initCatalog(products);

  include ProductsMixin(products);
};
