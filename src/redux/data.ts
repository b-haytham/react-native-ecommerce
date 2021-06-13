import { ImageSourcePropType } from "react-native";
import {
    Category,
    Gender,
    OrderStatus,
    Product,
    SIZES,
    User,
} from "./data_types";

export const PRODUCTS: Product[] = [
    {
        id: 0,
        thumbnail:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7139512/2018/9/21/52ac3343-f859-4ac7-92f1-3d2451fe92951537510763979-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1421537510763791-1.jpg",
        images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7139512/2018/9/21/52ac3343-f859-4ac7-92f1-3d2451fe92951537510763979-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1421537510763791-1.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7139512/2018/9/21/5f0bd6f0-f386-451b-9a82-c5f1896dee741537510763941-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1421537510763791-3.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7139512/2018/9/21/fc69014a-eded-4ce7-a2fe-6013a4af09b51537510763923-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1421537510763791-4.jpg",
        ],
        is_new: false,
        avg_rating: 3,
        brand: {
            name: "H&M",
            display_name: "H&M",
        },
        category: {
            id: 0,
            display_name: "Men",
            name: "MEN",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 20,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
        display_name:
            "Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
        price: 20.99,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Jeans",
            display_name: "Jeans",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [""],
        },
        color: ["Black", "Blue", "Gray"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_color: true,
        has_size: true
    },
    {
        id: 1,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/a79e1ea5baef3b23981a19b142ba0b5c/fa9c055fc4744cfb9c270d2e20b32ea8.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/a79e1ea5baef3b23981a19b142ba0b5c/fa9c055fc4744cfb9c270d2e20b32ea8.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/02b0ffadb7f63412878a37f06635cc82/9d975313ee484a8bb0d5004cfbff899a.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/12a41acec82b3b3c85e1ae39724dca98/a573bdaa1c2c43b8b983b4af368d327f.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 3,
        brand: {
            name: "Nike Sportswear",
            display_name: "Nike Sportswear",
        },
        category: {
            id: 0,
            display_name: "Men",
            name: "MEN",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "CLUB HOODIE - Sweat à capuche",
        display_name: "CLUB HOODIE - Sweat à capuche",
        price: 45.99,
        number_reviews: 7,
        number_views: 40,
        number_sold: 6,
        sub_category: {
            id: 1,
            name: "Sweat",
            display_name: "Sweat",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Composition 80% coton, 20% polyester",
                "Matière Sweat",
                "Lavage en machine à 40°C",
                "Capuche avec cordon de serrage",
                "Couleur unie",
                "Taille élastique",
            ],
        },
        color: ["Black", "Gray"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_size: true,
        has_color: true
    },
    {
        id: 2,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/8c2dd6ac8a0c37aea188d366a1ed3aee/e925d30b90ff4ec4b5de59eb1e0bf63c.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/8c2dd6ac8a0c37aea188d366a1ed3aee/e925d30b90ff4ec4b5de59eb1e0bf63c.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/917a3d14d6753216924410a23c2ea090/ae79ccace7214905b980d6afd6aefea5.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/521e13f787283e3d8b6c6489394e3d12/5be7ed111c2d4635b3fff938251fc91e.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "REVOLUTION",
            display_name: "REVOLUTION",
        },
        category: {
            id: 0,
            display_name: "Men",
            name: "MEN",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "JACKET LIGHT - Veste légère - army",
        display_name: "JACKET LIGHT - Veste légère - army",
        price: 120.99,
        number_reviews: 15,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Veste",
            display_name: "Veste",
            number_product: 5,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Composition 65% polyester, 35% coton",
                "Doublure 65% polyester, 35% coton",
                "Nettoyage chimique possible",
                "Fermeture éclair",
                "Poche intérieure",
                "Capuche avec cordon de serrage",
            ],
        },
        color: ["Black", "Blue", "White", "Gray"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_color: true,
        has_size: true
    },
    {
        id: 3,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/8a2913b9ef4448a8b2fb96f2add86e47/c9e63628caa649a3aae2245151604aa1.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/8a2913b9ef4448a8b2fb96f2add86e47/c9e63628caa649a3aae2245151604aa1.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/2a291fae226c474ebd9dc0bfdf349c50/99832c3c807548d79106ccc626f1e435.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/1f85f19d622040a5b8472c08681706b3/3e98312acada49df9734d47fb7775d30.jpg?imwidth=1800",
        ],
        is_new: true,
        avg_rating: 5,
        brand: {
            name: "Superdry",
            display_name: "Superdry",
        },
        category: {
            id: 1,
            display_name: "Women",
            name: "WOMEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 20,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Robe d'été",
        display_name: "Robe d'été",
        price: 59.95,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Robe",
            display_name: "Robe",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Composition 100% viscose",
                "Col en V profond",
                "Fermeture Cordon",
                "Longueur Courte",
                "Longueur des manches courtes",
            ],
        },
        color: ["Black", "Blue", "White", "Gray"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_size: true,
        has_color: true,
    },
    {
        id: 4,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/d6b59baa3136484a9ebe788ec88acf63/c02d3e93e30a4caa8b27034be80616c1.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/d6b59baa3136484a9ebe788ec88acf63/c02d3e93e30a4caa8b27034be80616c1.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/abda3f5ad0ae42ce857369a483a7513e/4e7501c91b504617ab86975ff30800f7.jpg?imwidth=762",
            "https://img01.ztat.net/article/spp-media-p1/d58163ad3b9741728b718c8bbfd6acb6/3cf716500b114cd19663e08f13d151c2.jpg?imwidth=762",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "American Eagle",
            display_name: "American Eagle",
        },
        category: {
            id: 1,
            display_name: "Women",
            name: "WOMEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 15,
        },
        is_discount: true,
        is_in_stock: true,
        name: "HIGHEST RISE ** - Jean slim",
        display_name: "HIGHEST RISE ** - Jean slim",
        price: 45.95,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Jeans",
            display_name: "Jeans",
            number_product: 10,
            parent_category: 1,
        },
        details: {
            title: "",
            detail_list: [
                "Composition 79% coton, 10% polyester, 10% modal, 1% élasthanne",
                "Matière Denim",
                "Lavage en machine à 30°C",
                "Braguette avec fermeture éclai",
                "Poches arrière, poches latérales",
            ],
        },
        color: ["Black", "Blue"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_color: true,
        has_size: true
    },
    {
        id: 5,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/8487a4746db03db998789d4b2bcacaf8/4775062ee3b04c7295a36161b9a387a9.jpg?imwidth=762&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/8487a4746db03db998789d4b2bcacaf8/4775062ee3b04c7295a36161b9a387a9.jpg?imwidth=762&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/bf2736ece6a630c591b88eeb5446fd75/10fc15978d6e43a48ac4a7acde552b17.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/f07ff1007fe63cd2b6c7ab9515f23cc4/01a31e11a0214e01ab965dada04db6ce.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Superdry",
            display_name: "Superdry",
        },
        category: {
            id: 1,
            display_name: "Women",
            name: "WOMEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "MANDY - Jupe trapèze",
        display_name: "MANDY - Jupe trapèze",
        price: 69.95,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Jupe",
            display_name: "Jupe",
            number_product: 10,
            parent_category: 1,
        },
        details: {
            title: "",
            detail_list: ["Composition 100% viscose"],
        },
        color: ["Red", "Blue"],
        sizes: [SIZES.M, SIZES.L, SIZES.XL],
        has_size: true,
        has_color: true
    },
    {
        id: 6,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/c3f6ca69cfa14895b94e15b90d8b06fb/fd3bb4e49fcd406bae94ffab99f441e0.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/c3f6ca69cfa14895b94e15b90d8b06fb/fd3bb4e49fcd406bae94ffab99f441e0.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/5a91ea56b52949ccae5111c71dba98c3/7d73a748931b469098493e0eb50a6a90.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/3fbe78d72e244d4989b3d50ec09e5492/d9ea10924f674988be0fcb7f8c46d6ae.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Adidas Originals",
            display_name: "Adidas Originals",
        },
        category: {
            id: 1,
            display_name: "Men",
            name: "MEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Adidas",
        display_name: "Adidas",
        price: 94.95,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Chaussure",
            display_name: "Chaussure",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Bout de la chaussure Rond",
                "Forme du talon Plat",
                "Fermeture Laçage",
            ],
        },
        color: ["White", "Gray"],
        sizes: ['36', '37', '38', '39', '40', '41'],
        has_color: true,
        has_size: true
    },
    {
        id: 7,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/e9b9484a56fc3cec9937ba86cbab3b37/3836020515fb48329aa96d004b886715.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/e9b9484a56fc3cec9937ba86cbab3b37/3836020515fb48329aa96d004b886715.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/1315aebbd4a53c7f91032a2ddf7cdcc1/43f58cbabe1948aca50756df17d11e8b.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/96ced3143d9c3a37b602736c9fa82857/2fe4157ac1d94761b11b0436cd1655ba.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Timberland",
            display_name: "Timberland",
        },
        category: {
            id: 1,
            display_name: "Men",
            name: "MEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "LARCHMONT II WP CHUKKA - Bottines à lacets",
        display_name: "LARCHMONT II WP CHUKKA - Bottines à lacets",
        price: 89.95,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Chaussure",
            display_name: "Chaussure",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Semelle d'usure Caoutchouc résistant à l'abrasion",
                "Bout de la chaussure Rond",
                "Fermeture Laçage",
            ],
        },
        color: ["Sienna"],
        sizes: ['36', '37', '38', '39', '40', '41'],
        has_size: true,
        has_color: true
    },
    {
        id: 8,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/3c82ffff014c3ecb84f70f255293dfd9/4eb6ea1cb313447aa9d27b6d2a2e34c2.jpg?imwidth=762",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/3c82ffff014c3ecb84f70f255293dfd9/4eb6ea1cb313447aa9d27b6d2a2e34c2.jpg?imwidth=762",
            "https://img01.ztat.net/article/spp-media-p1/4bb5aacb853c3031baa77e9d30f9fa76/5122834a71774f26b984316ce487d6ed.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/fcba473e72353e43bdeb3c54dc3be045/da4cc1f11ea24bb492e83a0248457423.jpg?imwidth=762&filter=packshot",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Tommy Hilfiger",
            display_name: "Tommy Hilfiger",
        },
        category: {
            id: 1,
            display_name: "Women",
            name: "WOMEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 20,
        },
        is_discount: true,
        is_in_stock: true,
        name: "ICONIC ELENA SANDAL - Sandales à talons hauts",
        display_name: "ICONIC ELENA SANDAL - Sandales à talons hauts",
        price: 75.95,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Chaussure",
            display_name: "Chaussure",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Dessus / Tige Cuir et textile",
                "Bout de la chaussure Ouvert",
                "Fermeture  Boucle",
            ],
        },
        color: ["Black"],
        sizes: ['36', '37', '38', '39', '40', '41'],
        has_color: true,
        has_size: true
    },
    {
        id: 9,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/bec7033dac3b427780245988cabc6845/3b51f863c2bb4dbaad8a24cfc925bae7.jpg?imwidth=1800",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/bec7033dac3b427780245988cabc6845/3b51f863c2bb4dbaad8a24cfc925bae7.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/390d72d3b8a94b5eaea2fddf33b135be/9dad4b635c97445ab56376b4d1a1bda1.jpg?imwidth=1800",
            "https://img01.ztat.net/article/spp-media-p1/d2e7000e82c74b9090b2161101c40ad2/785f6decd142453aa904ca79af8ca669.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Converse",
            display_name: "Converse",
        },
        category: {
            id: 1,
            display_name: "Women",
            name: "WOMEN",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "CHUCK TAYLOR ALL STAR LIFT - Baskets montantes",
        display_name: "CHUCK TAYLOR ALL STAR LIFT - Baskets montantes",
        price: 89.95,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Chaussure",
            display_name: "Chaussure",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Dessus / Tige Textile",
                "Bout de la chaussure Rond",
                "Fermeture Laçage",
            ],
        },
        color: ["Pink"],
        sizes: ['36', '37', '38', '39', '40', '41'],
        has_size: true,
        has_color: true
    },
    {
        id: 10,
        thumbnail:
            "https://media.vertbaudet.com/Pictures/vertbaudet/101197/ensemble-bebe-garcon-ceremonie-gilet-chemise-noeud-papillon-pantalon.jpg?width=1320",
        images: [
            "https://media.vertbaudet.com/Pictures/vertbaudet/101197/ensemble-bebe-garcon-ceremonie-gilet-chemise-noeud-papillon-pantalon.jpg?width=1320",
            "https://media.vertbaudet.com/Pictures/vertbaudet/107561/ensemble-bebe-garcon-ceremonie-gilet-chemise-noeud-papillon-pantalon.jpg?width=1320",
            "https://media.vertbaudet.com/Pictures/vertbaudet/101174/ensemble-bebe-garcon-ceremonie-gilet-chemise-noeud-papillon-pantalon.jpg?width=1320",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Vertbaudet",
            display_name: "Vertbaudet",
        },
        category: {
            id: 1,
            display_name: "Kids",
            name: "KIDS",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Ensemble bébé garçon",
        display_name:
            "Ensemble bébé garçon",
        price: 150,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Ensemble",
            display_name: "Ensemble",
            number_product: 10,
            parent_category: 2,
        },
        details: {
            title: "",
            detail_list: [
                "Ouverture boutonnée",
                "Col pointe",
                "Manches longues",
                "Poignets boutonnés",
            ],
        },
        color: [],
        sizes: [],
        has_color: false, 
        has_size: false
    },
    {
        id: 11,
        thumbnail:
            "https://media.vertbaudet.com/Pictures/vertbaudet/153010/bottines-bebe-garcon-lacets-glissiere.jpg?width=1320",
        images: [
            "https://media.vertbaudet.com/Pictures/vertbaudet/153010/bottines-bebe-garcon-lacets-glissiere.jpg?width=1320",
            "https://media.vertbaudet.com/Pictures/vertbaudet/152534/bottines-bebe-garcon-lacets-glissiere.jpg?width=1320",
            "https://media.vertbaudet.com/Pictures/vertbaudet/152925/bottines-bebe-garcon-lacets-glissiere.jpg?width=1320",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Vertbaudet",
            display_name: "Vertbaudet",
        },
        category: {
            id: 1,
            display_name: "Kids",
            name: "KIDS",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Bottines bébé garçon lacets + glissière - bleu",
        display_name: "Bottines bébé garçon lacets + glissière - bleu",
        price: 67,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Chaussure",
            display_name: "Chaussure",
            number_product: 10,
            parent_category: 2,
        },
        details: {
            title: "",
            detail_list: [
                "Dessus synthétique, col textile fantaisie et bout protégé en croûte de cuir",
                "Doublure textile",
                "Semelle intérieure cuir",
                "Semelle extérieure antidérapante en élastomère, souple et résistante",
            ],
        },
        color: ["Blue", "Brown"],
        sizes: ['36', '37', '38', '39', '40', '41'],
        has_size: true,
        has_color: true,
    },
    {
        id: 12,
        thumbnail:
            "https://d2yac1vwzyjed0.cloudfront.net/photos/22908/50353/1513778.jpg",
        images: [
            "https://d2yac1vwzyjed0.cloudfront.net/photos/22908/50353/1513778.jpg",
            "https://d2yac1vwzyjed0.cloudfront.net/photos/22908/50354/1513778_2.jpg",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Boss",
            display_name: "Boss",
        },
        category: {
            id: 1,
            display_name: "Accessories",
            name: "ACCESSORIES",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Montre Integrity",
        display_name: "Montre Integrity",
        price: 159,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Montre",
            display_name: "Montre",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
                "Affichage Analogique",
                "Mouvement Quartz",
                "Fonction(s) Chronographe",
                "Forme Rond",
                "Taille du boîtier (cm) 44 MM",
            ],
        },
        color: ["Black"],
        sizes: [],
        has_color: true,
        has_size: false

    },
    {
        id: 14,
        thumbnail:
            "https://d2yac1vwzyjed0.cloudfront.net/photos/23521/52401/W1313L2.jpg",
        images: [
            "https://d2yac1vwzyjed0.cloudfront.net/photos/23521/52401/W1313L2.jpg",
            "https://d2yac1vwzyjed0.cloudfront.net/photos/23521/52396/W1313L2_2.jpg",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Guess",
            display_name: "Guess",
        },
        category: {
            id: 1,
            display_name: "Accessories",
            name: "ACCESSORIES",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Montre Nova (Femmme)",
        display_name: "Montre Nova (Femme)",
        price: 189,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Montre",
            display_name: "Montre",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
                "Couleurs Doré",
                "Forme Rond",
                "Affichage Analogique (Aiguilles)",
            ],
        },
        color: ["Gold"],
        sizes: [],
        has_color: true,
        has_size: false
    },
    {
        id: 13,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/fff1c2ecb2973c7890b97a6715c93beb/c6c29d1e4f784dc887cc03a7b737c6b9.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/fff1c2ecb2973c7890b97a6715c93beb/c6c29d1e4f784dc887cc03a7b737c6b9.jpg?imwidth=1800&filter=packshot",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Superdry",
            display_name: "Superdry",
        },
        category: {
            id: 1,
            display_name: "Accessories",
            name: "ACCESSORIES",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "ELLEN - Lunettes de soleil",
        display_name: "ELLEN - Lunettes de soleil",
        price: 49.59,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Lunette",
            display_name: "Lunette",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: ["Genre Femme", "Teinte des verres Sombre"],
        },
        color: [],
        sizes: [],
        has_size: false, 
        has_color: false
    },
    {
        id: 15,
        thumbnail:
            "https://img01.ztat.net/article/spp-media-p1/415ac60401744c8e87ba1f027d056e21/2e9a7a0d4cb645e28178fbed5f6989a2.jpg?imwidth=1800&filter=packshot",
        images: [
            "https://img01.ztat.net/article/spp-media-p1/415ac60401744c8e87ba1f027d056e21/2e9a7a0d4cb645e28178fbed5f6989a2.jpg?imwidth=1800&filter=packshot",
            "https://img01.ztat.net/article/spp-media-p1/0b28a2545ee64b09a65787579e8fa24c/93b4d3c8104a45cdacd6d6a2fe8c103e.jpg?imwidth=1800",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Pier One",
            display_name: "Pier One",
        },
        category: {
            id: 1,
            display_name: "Accessories",
            name: "ACCESSORIES",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Lunettes de soleil",
        display_name: "Lunettes de soleil",
        price: 100,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Lunette",
            display_name: "Lunette",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
                "Forme des lunettes Ovale",
                "Teinte des verres Sombre",
                "Filtre UV",
            ],
        },
        color: [],
        sizes: [],
        has_color: false,
        has_size: false
    },
    {
        id: 17,
        thumbnail:
            "https://www.c-and-a.com/productimages/c_scale,h_790,q_70,e_sharpen:70/v1619012512/2137660-2-08.jpg",
        images: [
            "https://www.c-and-a.com/productimages/c_scale,h_790,q_70,e_sharpen:70/v1619012512/2137660-2-08.jpg",
            "https://www.c-and-a.com/productimages/c_scale,h_790,q_70,e_sharpen:70/v1619012508/2137660-2-05.jpg",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Levis",
            display_name: "Levis",
        },
        category: {
            id: 0,
            display_name: "Men",
            name: "MEN",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "T-Shirt",
        display_name: "T-Shirt",
        price: 89.99,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Shirts",
            display_name: "Shirts",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
                "Neckline crew neck",
                "Cut Slim Fit"
            ],
        },
        color: ['gray'],
        sizes: ['M', 'L', 'XL'],
        has_size: true,
        has_color: true
    },
];

export const CATEGORIES: (Category & { image: string })[] = [
    {
        id: 0,
        name: "MEN",
        display_name: "Men",
        number_product: 70,
        sub_categories: [],
        image: 'https://images.unsplash.com/photo-1619207490561-135b1480f53e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
        id: 1,
        name: "WOMEN",
        display_name: "Women",
        number_product: 790,
        sub_categories: [],
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
        id: 2,
        name: "KIDS",
        display_name: "Kids",
        number_product: 40,
        sub_categories: [],
        image: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 3,
        name: "ACCESSORIES",
        display_name: "Accessories",
        number_product: 30,
        sub_categories: [],
        image: 'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80',
    },
];

export const CURRENT_USER: User = {
    first_name: "Jack",
    last_name: "Jack",
    email: "jack@jack.com",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    gender: Gender.MALE,
    is_verified: true,
    id: 2,
    orders: [
        {
            id: 0,
            status: OrderStatus.SUCCESS,
            total_amount: 115,
            user: 2,
            order_items: [],
            date: '',
            tracking_number: ''
        },
        {
            id: 1,
            status: OrderStatus.SUCCESS,
            total_amount: 115,
            user: 2,
            order_items: [],
            date: '',
            tracking_number: ''
        },
    ],
    reviews: [
        {
            id: 0,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Jack" },
        },
        {
            id: 0,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Jack" },
        },
        {
            id: 0,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Jack" },
        },
    ],
    shipping_addresses: [
        {
            id: 0,
            address: "3 Newbridge Court",
            city: "Chino Hills",
            country: "United States",
            full_name: "Jack Jack",
            state: "CA",
            zip_code: 91709,
            is_default: true
        },
        {
            id: 1,
            address: "3 Newbridge Court",
            city: "Chino Hills",
            country: "United States",
            full_name: "Jack Jack",
            state: "CA",
            zip_code: 91709,
            is_default: false
        },
        {
            id: 2,
            address: "3 Newbridge Court",
            city: "Chino Hills",
            country: "United States",
            full_name: "Jack Jack",
            state: "CA",
            zip_code: 91709,
            is_default: false
        },
    ],
};


export const EXPORLE_SETION = [
    {
        id: 0,
        image_uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=0.66667xw:1xh;center,top&resize=768:*",
        title: 'Chaussure'
    },
    {
        id: 1,
        image_uri: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80",
        title: 'Jeans'
    },
    {
        id: 2,
        image_uri: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: 'Shirts'
    },
    {
        id: 3,
        image_uri: "https://images.unsplash.com/photo-1518520247810-9d56f8bc5556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: 'Montre'
    },
    {
        id: 4,
        image_uri: "https://images.unsplash.com/photo-1518077738226-1607ea7f1846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VuJTIwZ2xhc3Nlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: 'Lunette'
    },
]