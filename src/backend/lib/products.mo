import Types "../types/products";
import List "mo:core/List";

module {
  public type Product = Types.Product;

  public func getAll(products : List.List<Product>) : [Product] {
    products.toArray()
  };

  public func getFeatured(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.featured }).toArray()
  };

  public func getById(products : List.List<Product>, id : Nat) : ?Product {
    products.find(func(p) { p.id == id })
  };

  public func getByCategory(products : List.List<Product>, category : Text) : [Product] {
    products.filter(func(p) { p.category == category }).toArray()
  };

  public func initCatalog(products : List.List<Product>) {
    let catalog : [Product] = [
      {
        id = 1;
        name = "Rose Petal Clutcher";
        description = "Beautiful rose-embroidered clutcher for everyday elegance. A timeless floral design handcrafted with love.";
        materials = "Satin, Embroidery Thread, Wire";
        category = "Florals";
        price = 299.0;
        featured = true;
        image = "/images/product-1.jpg";
      },
      {
        id = 2;
        name = "Boho Sunrise Clip";
        description = "Earthy tones with hand-wrapped thread design. Inspired by free-spirited sunrises and bohemian vibes.";
        materials = "Cotton Thread, Wood, Resin";
        category = "Boho";
        price = 199.0;
        featured = true;
        image = "/images/product-2.jpg";
      },
      {
        id = 3;
        name = "Pastel Dream Set";
        description = "Set of 3 matching pastel clutchers. Mix and match these soft, dreamy accessories for any occasion.";
        materials = "Satin, Lace, Elastic";
        category = "Pastels";
        price = 499.0;
        featured = true;
        image = "/images/product-3.jpg";
      },
      {
        id = 4;
        name = "Golden Goddess Pin";
        description = "Gold-toned metallic hair pin with intricate design. Adds a touch of luxury to any hairstyle.";
        materials = "Metal, Gold Plating, Crystal";
        category = "Metallics";
        price = 249.0;
        featured = false;
        image = "/images/product-4.jpg";
      },
      {
        id = 5;
        name = "Lavender Love Clutcher";
        description = "Soft lavender with lace detail. Delicate and romantic, perfect for weddings and special days.";
        materials = "Lace, Satin Ribbon, Wire";
        category = "Pastels";
        price = 279.0;
        featured = false;
        image = "/images/product-5.jpg";
      },
      {
        id = 6;
        name = "Wildflower Crown Clip";
        description = "Delicate wildflower arrangement in a clip. Brings the beauty of a meadow into your hair.";
        materials = "Fabric Flowers, Wire, Resin";
        category = "Florals";
        price = 229.0;
        featured = true;
        image = "/images/product-6.jpg";
      },
      {
        id = 7;
        name = "Copper Twist Clutcher";
        description = "Handwoven copper-thread clutcher with a rich, warm finish. A bold statement accessory.";
        materials = "Copper Thread, Metal Frame, Velvet";
        category = "Metallics";
        price = 319.0;
        featured = false;
        image = "/images/product-7.jpg";
      },
      {
        id = 8;
        name = "Sky Blue Bow";
        description = "Silky sky blue bow for a soft, ethereal look. Light as a cloud and perfect for summer days.";
        materials = "Silk, Satin, Elastic Band";
        category = "Pastels";
        price = 179.0;
        featured = false;
        image = "/images/product-8.jpg";
      },
      {
        id = 9;
        name = "Marigold Festival Clutcher";
        description = "Bright marigold-inspired festive clutcher. Celebrate every occasion with this vibrant, joyful piece.";
        materials = "Fabric Petals, Wire, Cotton Thread";
        category = "Florals";
        price = 289.0;
        featured = true;
        image = "/images/product-9.jpg";
      },
      {
        id = 10;
        name = "Tribal Boho Clip";
        description = "Tribal pattern clip with colorful thread tassels. A bold, expressive accessory rooted in boho culture.";
        materials = "Leather, Colorful Thread, Metal Clip";
        category = "Boho";
        price = 219.0;
        featured = false;
        image = "/images/product-10.jpg";
      },
      {
        id = 11;
        name = "Silver Stardust Pin";
        description = "Silver-dusted sparkle pin that catches the light beautifully. Perfect for evening events and parties.";
        materials = "Metal, Silver Dust, Crystal Beads";
        category = "Metallics";
        price = 269.0;
        featured = false;
        image = "/images/product-11.jpg";
      },
      {
        id = 12;
        name = "Peach Blossom Set";
        description = "Set of 2 peach blossom clutchers. Soft and sweet, these delicate pieces are a springtime dream.";
        materials = "Organza, Satin, Lace, Wire";
        category = "Pastels";
        price = 459.0;
        featured = true;
        image = "/images/product-12.jpg";
      },
    ];
    for (p in catalog.vals()) {
      products.add(p);
    };
  };
};
