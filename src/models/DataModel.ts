export type Terms = string;
export type IsPending = boolean;

export interface DataItem {
  readonly name: string;
  readonly npi: string;
  readonly type: string;
  readonly practiceAddress: string;
}

export type DataState = {
  data: DataItem[];
  isPending: IsPending;
  terms: Terms;
  maxList: number;
};

export const defaultOwnerRepositoryState = {
  get state(): DataItem {
    return {
      name: '',
      npi: '',
      type: '',
      practiceAddress: '',
    };
  },
};

const defaultState = {
  get state(): DataState {
    return {
      data: [],
      isPending: false,
      terms: '',
      maxList: 7,
    };
  },
};

export const initialState = {
  get state(): DataState {
    return defaultState.state;
  },
};
