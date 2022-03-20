import { createAction, props } from "@ngrx/store";

interface formData {
  [key: string]: string
}

export const loadData = createAction(
  '[Data] Update from form',
  props <{ data: formData }>(),
);

export const updateData = createAction(
  '[Data] Update from form',
  props <{ data: formData }>(),
);
