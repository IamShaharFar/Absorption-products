import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1,  categoryKeys: [],                                                    price: "25.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_6fb2cb85f3a749958d9efe09d30cc4ad~mv2.png" },
    { id: 2,  categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "60.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_a519cf307e304b7d8c12fbbcac616608~mv2.png" },
    { id: 3,  categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "60.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_d3b3484eaf654fa2afdb732cebcda828~mv2.jpg" },
    { id: 4,  categoryKeys: [],                                                    price: "19.99", imgUrl: "https://static.wixstatic.com/media/eb6e45_61c00c77b1084a08825ddc327a839478~mv2.png" },
    { id: 5,  categoryKeys: [],                                                    price: "29.99", imgUrl: "https://static.wixstatic.com/media/eb6e45_2e660cd81156428abe40f95eae135720~mv2.png" },
    { id: 6,  categoryKeys: [],                                                    price: "35.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_444be54cfb904f4a842ea93831461486~mv2.png" },
    { id: 7,  categoryKeys: [],                                                    price: "45.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_8531eeba8e964cad847bdd92f224793b~mv2.png" },
    { id: 8,  categoryKeys: ["absorbent_underwear"],                               price: "65.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_19e855241bdb4aed9e94b84aff2e075f~mv2.jpg" },
    { id: 9,  categoryKeys: ["absorbent_underwear", "absorption_products"],        price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_ba83b78154dd4e8bb1e544b694d56be9~mv2.png" },
    { id: 10, categoryKeys: ["absorbent_underwear", "absorption_products"],        price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_a8423ebc76fc48a49828cd172bf4e03a~mv2.png" },
    { id: 11, categoryKeys: ["absorbent_underwear", "absorption_products"],        price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_3758a36050df4b94b3954dc3a173c808~mv2.png" },
    { id: 12, categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_2a28a22e5946400ea93ac3f9e849305d~mv2.png" },
    { id: 13, categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_3463f3b274a44fa8a95550352ade8d6f~mv2.png" },
    { id: 14, categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "55.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_8b2a17efeb3945ec977881ca6dbe045f~mv2.png" },
    { id: 15, categoryKeys: ["absorbent_underwear", "adult_diapers"],              price: "60.00", imgUrl: "https://static.wixstatic.com/media/eb6e45_deb6893b54e2418893ce5595f4fb9c77~mv2.png" },
    { id: 16, categoryKeys: [],                                                    price: "35.00", imgUrl: "https://semantic-ui.com/images/wireframe/image.png" },
    { id: 17, categoryKeys: [],                                                    price: "25.00", imgUrl: "https://semantic-ui.com/images/wireframe/image.png" },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
