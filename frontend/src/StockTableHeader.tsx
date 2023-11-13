import { IHeader, ItemType } from "./StockDataTypes";
import { round_off } from "./Utils";

const NumericCell = (item: ItemType) => <td key={`price-${item}`} className='values'>{round_off(item as number)}</td>

export const mainTableHeader: IHeader[] = [
    {
        display: 'Rank',
        key: 'rank'
    },
    {
        display: 'Stock',
        key: 'stock',
        cellTemplate: (item: ItemType) => <td key={`stock-${item}`} className='stock-name'>{item}</td>
    },
    {
        display: 'Symbol',
        key: 'symbol',
        cellTemplate: (item: ItemType) => <td key={`symbol-${item}`} className='stock-symbol'>{item}</td>
    },
    {
        display: 'Avg. Price',
        key: 'price',
        cellTemplate: NumericCell
    },
    {
        display: 'Weight',
        key: 'weight',
        cellTemplate: NumericCell
    },
    {
        display: 'Shares',
        key: 'shares',
        cellTemplate: NumericCell
    },
    {
        display: 'Investment',
        key: 'investment',
        cellTemplate: NumericCell
    },
    // {
    //     display: 'Score',
    //     key: 'composite_score',
    //     cellTemplate: (item: ItemType) => <td className='values'>{round_off(item as number)}</td>
    // }
];

export const rebalanceTableHeader: IHeader[] = [
    {
        display: 'S.No.',
        key: 'rank'
    },
    {
        display: 'Symbol',
        key: 'symbol',
        cellTemplate: (item: ItemType) => <td key={`symbol-${item}`} className='stock-symbol'>{item}</td>
    },
    {
        display: 'Amount',
        key: 'amount',
        cellTemplate: (item: ItemType) => {
            // if capital incurred is negative, then its profit, use the .profit className else .loss
            const className = item as number < 0 ? 'profit' : 'loss';
            return <td key={`amount-${className}`} className={className}>{round_off(item as number)}</td>;
        }
    },
    {
        display: 'Shares',
        key: 'shares'
    },
    {
        display: 'Action',
        key: 'shares',
        cellTemplate: (item: ItemType) => {
            // determin hold, buy or sell
            const action = (item as number) === 0 ? 'Hold' : ((item as number) > 0 ? 'Buy' : 'Sell');
            return <td key={`shares-${action}`} className={action}>{action}</td>;
        }
    }
];

export const nifty200TableHeader: IHeader[] = [
    {
        display: 'S.No.',
        key: 'rank'
    },
    {
        display: 'Symbol',
        key: 'symbol',
        cellTemplate: (item: ItemType) => <td key={`symbol-${item}`} className='stock-symbol'>{item}</td>
    },
    {
        display: 'Price',
        key: 'price',
        cellTemplate: NumericCell
    },
    {
        display: 'Change',
        key: 'diff',
        cellTemplate: (item: ItemType) => {
            const className = item as number < 0 ? 'loss' : 'profit';
            return <td key={`diff-${className}`} className={className}>{round_off(item as number)}</td>;
        }
    }
];