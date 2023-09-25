export interface SearchProtienInteractionsResponse {
  proteinInteractions: ProtienInteraction[];
  total: number;
}

export interface ProtienInteraction {
  pdb_id: string;
  mutations: Array<string>;
  protein1: string;
  protein2: string;
  experiment: string;
  temperature: number;
  ph: number;
  delta_g: number;
  delta_delta_g: number;
  authors: string;
  journal: string;
  pubmed_id: string;
  __v: number;
  _id: number;
}

export interface SearchProtienInteractionsParam {
  paginationModel: string;
  sort: string;
  search: string;
}

export interface AdvancedSearchModel {
  protein1: string | null;
  protein2: string | null;
  pbd_id: string | null;
  type: "wild" | "mutant" | null;
  mutate_from: string | null;
  mutate_to: string | null;
  experiment: string | null;
  max_temp: number | null;
  min_temp: number | null;
  max_ph: number | null;
  min_ph: number | null;
  max_delta_g: number | null;
  min_delta_g: number | null;
  max_delta_delta_g: number | null;
  min_delta_delta_g: number | null;
  authors: string | null;
  journal: string | null;
  pubmed_id: string | null;
}

export interface handleFieldChangeProp {
  field: string;
  value: string | number | null;
}

export interface Option {
  label: string;
  value: string;
}