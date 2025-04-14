// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IKit } from '@/models/product';
interface CartItem {
  _id:any;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string;
  brand?: string;
  discount?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  images?: string[];
}


interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart(state, action: PayloadAction<IKit>) {
      const existingItem = state.items.find(item => item._id === action.payload._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
    state.items.push({
      _id: action.payload._id, // 👈 explicitly map _id to id
      name: action.payload.name,
      price: action.payload.price,
      quantity: 1,
      description: action.payload.description,
      category: action.payload.category,
      brand: action.payload.brand,
      discount: action.payload.discount,
      ratingsAverage: action.payload.ratingsAverage,
      ratingsQuantity: action.payload.ratingsQuantity,
      images: action.payload.images,
    });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
