import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import { ProductApiActions, ProductPageActions } from './actions';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  // LOAD
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductApiActions.loadProductsFailed, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),

  // ADD
  on(ProductApiActions.addProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.addProductFailed, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // UPDATE
  on(ProductApiActions.updateProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.map((stateProduct) =>
      stateProduct.id === action.product.id ? action.product : stateProduct
    );
    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.updateProductFailed, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // DELETE
  on(ProductApiActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter((p) => p.id !== action.productId),
      currentProductId: null,
      error: '',
    };
  }),
  on(ProductApiActions.deleteProductFailed, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // OTHER
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  })
);
