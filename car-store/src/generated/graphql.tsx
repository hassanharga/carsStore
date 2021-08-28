import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  id: Scalars['String'];
  name: Scalars['String'];
  dailyPrice: Scalars['Float'];
  monthlyPrice: Scalars['Float'];
  mileAge: Scalars['String'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCar: Car;
};

export type MutationAddCarArgs = {
  payload: NewCarInput;
};

export type NewCarInput = {
  name: Scalars['String'];
  dailyPrice: Scalars['Int'];
  monthlyPrice: Scalars['Int'];
  mileAge: Scalars['String'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cars: Array<Car>;
};

export type AddCarMutationVariables = Exact<{
  payload: NewCarInput;
}>;

export type AddCarMutation = {
  __typename?: 'Mutation';
  addCar: {
    __typename?: 'Car';
    id: string;
    name: string;
    dailyPrice: number;
    monthlyPrice: number;
    mileAge: string;
    gas: string;
    gearType: string;
    thumbnailUrl: string;
  };
};

export type CarsQueryVariables = Exact<{ [key: string]: never }>;

export type CarsQuery = {
  __typename?: 'Query';
  cars: Array<{
    __typename?: 'Car';
    id: string;
    name: string;
    dailyPrice: number;
    monthlyPrice: number;
    mileAge: string;
    gas: string;
    gearType: string;
    thumbnailUrl: string;
  }>;
};

export const AddCarDocument = gql`
  mutation AddCar($payload: NewCarInput!) {
    addCar(payload: $payload) {
      id
      name
      dailyPrice
      monthlyPrice
      mileAge
      gas
      gearType
      thumbnailUrl
    }
  }
`;
export type AddCarMutationFn = Apollo.MutationFunction<
  AddCarMutation,
  AddCarMutationVariables
>;

/**
 * __useAddCarMutation__
 *
 * To run a mutation, you first call `useAddCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCarMutation, { data, loading, error }] = useAddCarMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddCarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCarMutation,
    AddCarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddCarMutation, AddCarMutationVariables>(
    AddCarDocument,
    options
  );
}
export type AddCarMutationHookResult = ReturnType<typeof useAddCarMutation>;
export type AddCarMutationResult = Apollo.MutationResult<AddCarMutation>;
export type AddCarMutationOptions = Apollo.BaseMutationOptions<
  AddCarMutation,
  AddCarMutationVariables
>;
export const CarsDocument = gql`
  query Cars {
    cars {
      id
      name
      dailyPrice
      monthlyPrice
      mileAge
      gas
      gearType
      thumbnailUrl
    }
  }
`;

/**
 * __useCarsQuery__
 *
 * To run a query within a React component, call `useCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarsQuery(
  baseOptions?: Apollo.QueryHookOptions<CarsQuery, CarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CarsQuery, CarsQueryVariables>(CarsDocument, options);
}
export function useCarsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CarsQuery, CarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CarsQuery, CarsQueryVariables>(
    CarsDocument,
    options
  );
}
export type CarsQueryHookResult = ReturnType<typeof useCarsQuery>;
export type CarsLazyQueryHookResult = ReturnType<typeof useCarsLazyQuery>;
export type CarsQueryResult = Apollo.QueryResult<CarsQuery, CarsQueryVariables>;
