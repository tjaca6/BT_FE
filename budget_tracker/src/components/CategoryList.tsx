import type { Transaction } from '../types/transaction'
import { categories } from '../types/categories'

type Props = {
    transactions: Transaction[];
}

export default function CategoryList({ transactions }: Props) {
    const progressBar = (amount: number, maxAmount: number, categoryColor: string) => {
        const percentage = Math.min(100, (amount / maxAmount) * 100);
        return (
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className={`${categoryColor} h-2.5 rounded-full ${percentage > 100 ? 'w-full' : `w-[${percentage}%]`}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-200 rounded-xl border border-gray-200 shadow-sm p-4 m-4">
            <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => {
                    const totalSpent = transactions
                        .filter((transaction: Transaction) => transaction.category === category.name)
                        .reduce((sum: number, transaction: Transaction) => sum + transaction.amount, 0);
                    return (
                        <div key={category.name} className="mb-4">
                            <div className="flex items-center mb-2">
                                <img src={category.icon} alt={category.name} className="w-6 h-6 inline-block mr-2" />
                                <p className="text-sm font-bold">{category.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1">
                                    {progressBar(totalSpent, category.maxAmount, category.color)}

                                </div>
                                <p className={`text-xs w-16 text-right ${totalSpent >= category.maxAmount ? 'text-red-600' : 'text-gray-600'}`}>
                                    {totalSpent}€/{category.maxAmount}€
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}