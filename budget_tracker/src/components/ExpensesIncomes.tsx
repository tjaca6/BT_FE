import type { Transaction } from '../types/transaction'
import { categories, categoriesIncome } from '../types/categories'

type Props = {
    transactions: Transaction[]
}
export default function ExpensesIncomes({ transactions }: Props) {
    return (

        <div className="grid grid-cols-2 gap-0.5">
            <div className="bg-gray-200 rounded-xl border border-gray-200 shadow-sm p-4 m-4">
                <div className="overflow-y-auto max-h-44">
                    <p className="font-medium text-gray-700">Expenses</p>
                    <ul>
                        {transactions
                            .filter((t) => t.type === 'expense')
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((transaction) => {
                                const category = categories.find((c) => c.name === transaction.category);
                                return (
                                    <li key={transaction.id} className="flex items-center justify-between py-2 border-b border-gray-400">
                                        <div className="flex items-center gap-2">
                                            {category && <img src={category.icon} className="w-5 h-5 self-center" />}
                                            <div>
                                                <p className="text-sm font-medium mt-1">{transaction.optionalLabel || transaction.category}</p>
                                                <p className="text-xs text-gray-500">{transaction.date}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium"> {transaction.amount}€</p>
                                    </li>
                                )

                            })}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-200 rounded-xl border border-gray-200 shadow-sm p-4 m-4">
                <div className="overflow-y-auto max-h-44">
                    <p className="text-medium text-gray-700">Incomes</p>
                    <ul>
                        {transactions
                            .filter((t) => t.type === 'income')
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((transaction) => {
                                const category = categoriesIncome.find((c) => c.name === transaction.category);
                                return (
                                    <li key={transaction.id} className="flex items-center justify-between py-2 border-b border-gray-400">
                                        <div className="flex items-center gap-2">
                                            {category && <img src={category.icon} className="w-5 h-5 self-center" />}
                                            <div>
                                                <p className="text-sm font-medium mt-1">{transaction.optionalLabel || transaction.category}</p>
                                                <p className="text-xs text-gray-500">{transaction.date}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium"> {transaction.amount}€</p>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}