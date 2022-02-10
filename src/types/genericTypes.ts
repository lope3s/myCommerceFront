export interface CurrencieConversion {
    currency_base: string;
    currency_quote: string;
    ratio: number;
    rate: number;
    inv_rate: number;
    creation_date: string;
    valid_until: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface JoinedCategoryData {
    mainCategory: Category;
    childrenCategories: Category[];
}

export interface InitialData {
    currencieData: CurrencieConversion;
    joinedCategoryData: JoinedCategoryData[];
}

export interface ItemData {
    id: string;
    title: string;
    prices: {
        id: string;
        prices: {
            id: number;
            type: string; //filter by type standard
            amount: number;
            regular_amount: any; //standard price
            currency_id: string;
            last_updated: string;
            conditions: {
                context_restrictions: any[];
                start_time: any;
                end_time: any;
                eligible: boolean;
            };
            exchange_rate_context: string;
            metadata: {
                promotion_id: string;
                promotion_type: string; //lightning ...
            };
        }[];
    };
    available_quantity: number;
    sold_quantity: number;
    thumbnail: string;
    shipping: {
        free_shipping: boolean;
        mode: string;
        tags: string[];
        logistic_type: string;
        store_pick_up: boolean;
    };
    attributes: {
        id: string;
        value_id: string;
        attribute_group_name: string;
        source: number;
        name: string;
        value_name: string;
        value_struct: any;
        values: {
            id: string;
            name: string;
            struct: any;
            source: number;
        }[];
        attribute_group_id: string;
    }[];
    catalog_product_id: string;
    tags: string[];
    catalog_listing: boolean;
}

export interface ItemCategorySearch {
    site_id: string;
    country_default_time_zone: string;
    paging: {
        total: number;
        primary_results: number;
        offset: number;
        limit: number;
    };
    results: ItemData[];
}
