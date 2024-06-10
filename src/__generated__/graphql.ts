/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

/** A book publication */
export type Book = Thing & {
  __typename?: 'Book';
  /** Relation to another resource */
  about?: Maybe<Array<ResultUnion>>;
  /** Abstract summarizing the content */
  abstract?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Author of the publication */
  author: Array<PersonOrganizationUnion>;
  /** License information */
  conditionsOfAccess?: Maybe<Scalars['String']['output']>;
  /** Date of publication */
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The content's language */
  inLanguage?: Maybe<Array<Scalars['String']['output']>>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** Open Access */
  isAccessibleForFree?: Maybe<Scalars['Boolean']['output']>;
  /** Keywords describing the content */
  keywords?: Maybe<Array<StringIriUnion>>;
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** Spatial information */
  spatialCoverage?: Maybe<Array<Place>>;
};

export type BookEdge = {
  __typename?: 'BookEdge';
  cursor: Scalars['String']['output'];
  node: Book;
};

export type CreativeWorkUnion = Book | Dataset | ScholarlyArticle;

export type CreativeWorkUnionEdge = {
  __typename?: 'CreativeWorkUnionEdge';
  cursor: Scalars['String']['output'];
  node: CreativeWorkUnion;
};

/** A data download */
export type DataDownload = Thing & {
  __typename?: 'DataDownload';
  /** Relation to another resource */
  about?: Maybe<Array<ResultUnion>>;
  /** Abstract summarizing the content */
  abstract?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Author of the publication */
  author: Array<PersonOrganizationUnion>;
  /** License information */
  conditionsOfAccess?: Maybe<Scalars['String']['output']>;
  /** A download link */
  contentUrl?: Maybe<Scalars['String']['output']>;
  /** Date of publication */
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The content's language */
  inLanguage?: Maybe<Array<Scalars['String']['output']>>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** Open Access */
  isAccessibleForFree?: Maybe<Scalars['Boolean']['output']>;
  /** Keywords describing the content */
  keywords?: Maybe<Array<StringIriUnion>>;
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** Spatial information */
  spatialCoverage?: Maybe<Array<Place>>;
};

/** A dataset */
export type Dataset = Thing & {
  __typename?: 'Dataset';
  /** Relation to another resource */
  about?: Maybe<Array<ResultUnion>>;
  /** Abstract summarizing the content */
  abstract?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Author of the publication */
  author: Array<PersonOrganizationUnion>;
  /** License information */
  conditionsOfAccess?: Maybe<Scalars['String']['output']>;
  /** Date of publication */
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Downloads available for this dataset */
  distribution?: Maybe<Array<DataDownload>>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The content's language */
  inLanguage?: Maybe<Array<Scalars['String']['output']>>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** Open Access */
  isAccessibleForFree?: Maybe<Scalars['Boolean']['output']>;
  /** Keywords describing the content */
  keywords?: Maybe<Array<StringIriUnion>>;
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** Spatial information */
  spatialCoverage?: Maybe<Array<Place>>;
};

export type DatasetEdge = {
  __typename?: 'DatasetEdge';
  cursor: Scalars['String']['output'];
  node: Dataset;
};

/** A geo coordinate */
export type GeoCoordinates = Thing & {
  __typename?: 'GeoCoordinates';
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** Latitude of a geo coordinate. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Longitude of a geo coordinate. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
};

export type IntBox = {
  __typename?: 'IntBox';
  intValue: Scalars['Int']['output'];
};

export type IntStringUnion = IntBox | StringBox;

export type IriBox = {
  __typename?: 'IriBox';
  iriValue: Scalars['String']['output'];
};

/** An organization */
export type Organization = Thing & {
  __typename?: 'Organization';
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type PaginatedBook = {
  __typename?: 'PaginatedBook';
  edges?: Maybe<Array<BookEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<Book>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedCreativeWorkUnion = {
  __typename?: 'PaginatedCreativeWorkUnion';
  edges?: Maybe<Array<CreativeWorkUnionEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<CreativeWorkUnion>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedDataset = {
  __typename?: 'PaginatedDataset';
  edges?: Maybe<Array<DatasetEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<Dataset>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedOrganization = {
  __typename?: 'PaginatedOrganization';
  edges?: Maybe<Array<OrganizationEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<Organization>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedPerson = {
  __typename?: 'PaginatedPerson';
  edges?: Maybe<Array<PersonEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<Person>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedResearchProject = {
  __typename?: 'PaginatedResearchProject';
  edges?: Maybe<Array<ResearchProjectEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<ResearchProject>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedResultUnion = {
  __typename?: 'PaginatedResultUnion';
  edges?: Maybe<Array<ResultUnionEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<ResultUnion>>;
  totalCount: Scalars['Int']['output'];
};

export type PaginatedScholarlyArticle = {
  __typename?: 'PaginatedScholarlyArticle';
  edges?: Maybe<Array<ScholarlyArticleEdge>>;
  hasNextPage: Scalars['Boolean']['output'];
  nodes?: Maybe<Array<ScholarlyArticle>>;
  totalCount: Scalars['Int']['output'];
};

/** A person */
export type Person = Thing & {
  __typename?: 'Person';
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** A person's last name */
  familyName: Scalars['String']['output'];
  /** A person's first name */
  givenName: Scalars['String']['output'];
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type PersonOrganizationUnion = Organization | Person;

/** A place */
export type Place = Thing & {
  __typename?: 'Place';
  /** A place's address. */
  address?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** A place's geo coordinates. */
  geo?: Maybe<GeoCoordinates>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** A telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
};

/** Providers of the Connectome. */
export enum Provider {
  Alexandria = 'alexandria',
  Aramis = 'aramis',
  Boris = 'boris',
  Cordis = 'cordis',
  Dasch = 'dasch',
  Lory = 'lory',
  Memobase = 'memobase',
  Openalex = 'openalex',
  Opendata = 'opendata',
  Orcid = 'orcid',
  Serval = 'serval',
  Snsf = 'snsf',
  Swissubase = 'swissubase',
  Zora = 'zora'
}

export type Query = {
  __typename?: 'Query';
  /** Fetch a resource */
  fetch: ResultUnion;
  /** Search for related Open Access publications */
  getRelatedCreativeWork: PaginatedCreativeWorkUnion;
  /** Search for resources suggested by neural search */
  getSuggestionByNeuralSearch: PaginatedResultUnion;
  /** Search for resources such as scholarly articles, books, research projects etc. */
  search: PaginatedResultUnion;
  /** Search for books */
  searchBook: PaginatedBook;
  /** Search for datasets */
  searchDataset: PaginatedDataset;
  /** Search for organizations */
  searchOrganization: PaginatedOrganization;
  /** Search for persons */
  searchPerson: PaginatedPerson;
  /** Search for research projects */
  searchResearchProject: PaginatedResearchProject;
  /** Search for scholarly articles. */
  searchScholarlyArticle: PaginatedScholarlyArticle;
};


export type QueryFetchArgs = {
  iri: Scalars['ID']['input'];
};


export type QueryGetRelatedCreativeWorkArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  identifier: Scalars['String']['input'];
  provider: Provider;
};


export type QueryGetSuggestionByNeuralSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
  type?: InputMaybe<ResourceType>;
};


export type QuerySearchBookArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};


export type QuerySearchDatasetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};


export type QuerySearchOrganizationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};


export type QuerySearchPersonArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};


export type QuerySearchResearchProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};


export type QuerySearchScholarlyArticleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Provider>;
  query: Scalars['String']['input'];
};

/** A research project */
export type ResearchProject = Thing & {
  __typename?: 'ResearchProject';
  /** Abstract summarizing the content */
  abstract?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** End of the project */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** Start of the project */
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type ResearchProjectEdge = {
  __typename?: 'ResearchProjectEdge';
  cursor: Scalars['String']['output'];
  node: ResearchProject;
};

/** The supported resource types. */
export enum ResourceType {
  Book = 'Book',
  Dataset = 'Dataset',
  Organization = 'Organization',
  Person = 'Person',
  ResearchProject = 'ResearchProject',
  ScholarlyArticle = 'ScholarlyArticle'
}

export type ResultUnion = Book | Dataset | Organization | Person | ResearchProject | ScholarlyArticle;

export type ResultUnionEdge = {
  __typename?: 'ResultUnionEdge';
  cursor: Scalars['String']['output'];
  node: ResultUnion;
};

/** A text published as a scholarly article */
export type ScholarlyArticle = Thing & {
  __typename?: 'ScholarlyArticle';
  /** Relation to another resource */
  about?: Maybe<Array<ResultUnion>>;
  /** Abstract summarizing the content */
  abstract?: Maybe<Scalars['String']['output']>;
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Author of the publication */
  author: Array<PersonOrganizationUnion>;
  /** License information */
  conditionsOfAccess?: Maybe<Scalars['String']['output']>;
  /** Date of publication */
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The content's language */
  inLanguage?: Maybe<Array<Scalars['String']['output']>>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** Open Access */
  isAccessibleForFree?: Maybe<Scalars['Boolean']['output']>;
  /** Keywords describing the content */
  keywords?: Maybe<Array<StringIriUnion>>;
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** End page */
  pageEnd?: Maybe<IntStringUnion>;
  /** Start page */
  pageStart?: Maybe<IntStringUnion>;
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
  /** Spatial information */
  spatialCoverage?: Maybe<Array<Place>>;
};

export type ScholarlyArticleEdge = {
  __typename?: 'ScholarlyArticleEdge';
  cursor: Scalars['String']['output'];
  node: ScholarlyArticle;
};

export type StringBox = {
  __typename?: 'StringBox';
  stringValue: Scalars['String']['output'];
};

export type StringIriUnion = IriBox | StringBox;

/** Thing is the base type of all other types */
export type Thing = {
  /** Alternate name of the resource */
  alternateName?: Maybe<Array<Scalars['String']['output']>>;
  /** Description of the resource */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the resource */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Connectome identifier of the resource */
  iri: Scalars['ID']['output'];
  /** name (title) of the resource */
  name: Scalars['String']['output'];
  /** Standard identifier (DOI, ORCID etc.) */
  sameAs?: Maybe<Array<Scalars['String']['output']>>;
};

export type ArticlesQueryVariables = Exact<{
  query: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type ArticlesQuery = { __typename?: 'Query', searchScholarlyArticle: { __typename?: 'PaginatedScholarlyArticle', totalCount: number, hasNextPage: boolean, edges?: Array<{ __typename?: 'ScholarlyArticleEdge', cursor: string, node: { __typename?: 'ScholarlyArticle', iri: string, name: string, sameAs?: Array<string> | null, abstract?: string | null, author: Array<{ __typename: 'Organization' } | { __typename: 'Person', name: string, sameAs?: Array<string> | null }> } }> | null } };


export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ARTICLES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchScholarlyArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sameAs"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sameAs"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;