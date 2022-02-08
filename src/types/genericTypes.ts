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
