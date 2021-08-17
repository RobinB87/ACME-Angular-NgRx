import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailed = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

export const addProduct = createAction(
  '[Product] Add',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Success',
  props<{ product: Product }>()
);

export const addProductFailed = createAction(
  '[Product] Add Fail',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Success',
  props<{ product: Product }>()
);

export const updateProductFailed = createAction(
  '[Product] Update Fail',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[Product] Delete',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction('[Product] Delete Success');

export const deleteProductFailed = createAction('[Product] Delete Fail');

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);
