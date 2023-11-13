export type ItemType = string | number;

export interface IHeader {
    display: string;
    key: string;
    cellTemplate?: (item: ItemType) => React.ReactElement | null;
}

export interface IStockTable {
    headers: IHeader[];
    stockData: IStockData[] | IRebalanceData[] | INifty200Data[];
}


export interface IStockData {
    [key: string]: any;
    stock: string;
    symbol: string;
    price: number;
    weight: number;
    shares: number;
    investment: number;
    composite_score: number;

    returns: {
        [key: string]: any;
        '1y': {
            return: number;
            vwap: number;
            rsi: number;
        },
        '1mo': {
            return: number;
            vwap: number;
            rsi: number;
        },
        '1w': {
            return: number;
            vwap: number;
            rsi: number;
        }
    }
};

export interface IRebalanceData {
    [key: string]: any;
    symbol: string;
    amount: number;
    shares: number;
};

export interface INifty200Data {
    [key: string]: any;
    symbol: string;
    price: number;
};

export interface IToFromData extends INifty200Data {
    avg_price: number;
    diff: number;
    shares: number;
};


export interface ISymbolRow {
    rank: number;
    item: IStockData | IRebalanceData | INifty200Data;
    headers: IHeader[];
};