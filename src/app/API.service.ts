/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateStudents: OnCreateStudentsSubscription;
  onUpdateStudents: OnUpdateStudentsSubscription;
  onDeleteStudents: OnDeleteStudentsSubscription;
};

export type CreateStudentsInput = {
  id?: string | null;
  name: string;
  department: string;
  rank: string;
};

export type ModelStudentsConditionInput = {
  name?: ModelStringInput | null;
  department?: ModelStringInput | null;
  rank?: ModelStringInput | null;
  and?: Array<ModelStudentsConditionInput | null> | null;
  or?: Array<ModelStudentsConditionInput | null> | null;
  not?: ModelStudentsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Students = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStudentsInput = {
  id: string;
  name?: string | null;
  department?: string | null;
  rank?: string | null;
};

export type DeleteStudentsInput = {
  id: string;
};

export type SearchableStudentsFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  department?: SearchableStringFilterInput | null;
  rank?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableStudentsFilterInput | null> | null;
  or?: Array<SearchableStudentsFilterInput | null> | null;
  not?: SearchableStudentsFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStudentsSortInput = {
  field?: SearchableStudentsSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableStudentsSortableFields {
  id = "id",
  name = "name",
  department = "department",
  rank = "rank",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableStudentsAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableStudentsAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableStudentsAggregateField {
  id = "id",
  name = "name",
  department = "department",
  rank = "rank",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableStudentsConnection = {
  __typename: "SearchableStudentsConnection";
  items: Array<Students | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelStudentsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  department?: ModelStringInput | null;
  rank?: ModelStringInput | null;
  and?: Array<ModelStudentsFilterInput | null> | null;
  or?: Array<ModelStudentsFilterInput | null> | null;
  not?: ModelStudentsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelStudentsConnection = {
  __typename: "ModelStudentsConnection";
  items: Array<Students | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionStudentsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  department?: ModelSubscriptionStringInput | null;
  rank?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStudentsFilterInput | null> | null;
  or?: Array<ModelSubscriptionStudentsFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateStudentsMutation = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStudentsMutation = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStudentsMutation = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type SearchStudentsQuery = {
  __typename: "SearchableStudentsConnection";
  items: Array<{
    __typename: "Students";
    id: string;
    name: string;
    department: string;
    rank: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetStudentsQuery = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type ListStudentsQuery = {
  __typename: "ModelStudentsConnection";
  items: Array<{
    __typename: "Students";
    id: string;
    name: string;
    department: string;
    rank: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateStudentsSubscription = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStudentsSubscription = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStudentsSubscription = {
  __typename: "Students";
  id: string;
  name: string;
  department: string;
  rank: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStudents(
    input: CreateStudentsInput,
    condition?: ModelStudentsConditionInput
  ): Promise<CreateStudentsMutation> {
    const statement = `mutation CreateStudents($input: CreateStudentsInput!, $condition: ModelStudentsConditionInput) {
        createStudents(input: $input, condition: $condition) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudentsMutation>response.data.createStudents;
  }
  async UpdateStudents(
    input: UpdateStudentsInput,
    condition?: ModelStudentsConditionInput
  ): Promise<UpdateStudentsMutation> {
    const statement = `mutation UpdateStudents($input: UpdateStudentsInput!, $condition: ModelStudentsConditionInput) {
        updateStudents(input: $input, condition: $condition) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudentsMutation>response.data.updateStudents;
  }
  async DeleteStudents(
    input: DeleteStudentsInput,
    condition?: ModelStudentsConditionInput
  ): Promise<DeleteStudentsMutation> {
    const statement = `mutation DeleteStudents($input: DeleteStudentsInput!, $condition: ModelStudentsConditionInput) {
        deleteStudents(input: $input, condition: $condition) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudentsMutation>response.data.deleteStudents;
  }
  async SearchStudents(
    filter?: SearchableStudentsFilterInput,
    sort?: Array<SearchableStudentsSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableStudentsAggregationInput | null>
  ): Promise<SearchStudentsQuery> {
    const statement = `query SearchStudents($filter: SearchableStudentsFilterInput, $sort: [SearchableStudentsSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableStudentsAggregationInput]) {
        searchStudents(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            name
            department
            rank
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchStudentsQuery>response.data.searchStudents;
  }
  async GetStudents(id: string): Promise<GetStudentsQuery> {
    const statement = `query GetStudents($id: ID!) {
        getStudents(id: $id) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudentsQuery>response.data.getStudents;
  }
  async ListStudents(
    filter?: ModelStudentsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudentsQuery> {
    const statement = `query ListStudents($filter: ModelStudentsFilterInput, $limit: Int, $nextToken: String) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            department
            rank
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudentsQuery>response.data.listStudents;
  }
  OnCreateStudentsListener(
    filter?: ModelSubscriptionStudentsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStudents">>
  > {
    const statement = `subscription OnCreateStudents($filter: ModelSubscriptionStudentsFilterInput) {
        onCreateStudents(filter: $filter) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStudents">>
    >;
  }

  OnUpdateStudentsListener(
    filter?: ModelSubscriptionStudentsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStudents">>
  > {
    const statement = `subscription OnUpdateStudents($filter: ModelSubscriptionStudentsFilterInput) {
        onUpdateStudents(filter: $filter) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStudents">>
    >;
  }

  OnDeleteStudentsListener(
    filter?: ModelSubscriptionStudentsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStudents">>
  > {
    const statement = `subscription OnDeleteStudents($filter: ModelSubscriptionStudentsFilterInput) {
        onDeleteStudents(filter: $filter) {
          __typename
          id
          name
          department
          rank
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStudents">>
    >;
  }
}
