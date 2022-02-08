import { gql } from "@apollo/client";

export const GET_INITIAL_DATA = gql`
    query GetInitialData {
        getInitialData {
            currencieData {
                rate
                valid_until
            }
            joinedCategoryData {
                childrenCategories {
                    id
                    name
                }
                mainCategory {
                    id
                    name
                }
            }
        }
    }
`;
