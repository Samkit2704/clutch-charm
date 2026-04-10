import Types "types/products";
import List "mo:core/List";
import ProductsMixin "mixins/products-api";

actor {
  let products = List.empty<Types.Product>();

  include ProductsMixin(products);
};
