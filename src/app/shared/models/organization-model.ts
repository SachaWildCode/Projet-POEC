export interface Organization {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Content[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  pageable: Pageable;
  empty: boolean;
}

export interface Content {
  donationsCount: number;
  id: number;
  name: string;
  sigle: string;
  description: string;
  iban: string;
  creationDate: Date;
  groupement: string;
  idRna: string;
  idEx: string;
  dateModifRna: Date;
  regime: string;
  nature: string;
  utilPublique: boolean;
  eligibiliteCec: boolean;
  activeSirene: boolean;
  active: boolean;
  impotsCommerciaux: boolean;
  addressOrganization: AddressOrganization;
  type: Type;
}

export interface AddressOrganization {
  id: number;
  cplt1: string;
  cp: string;
  commune: string;
  codeInsee: string;
  pays: string;
}

export interface Type {
  id: number;
  libTheme: string;
  color: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
