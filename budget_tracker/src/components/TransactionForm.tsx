import { useState } from "react";
import type { Transaction } from '../types/transaction'
import { categories, categoriesIncome } from '../types/categories'

type Props = {
    onSubmit: (transaction: Transaction) => void;
}

export default function TransactionForm({ onSubmit }: Props) {
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        date: '',
        optionalLabel: '',
        type: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            id: Date.now(),
            amount: Number(formData.amount)
        })
        setFormData({
            category: '',
            amount: '',
            date: '',
            optionalLabel: '',
            type: ''
        });
    }

    const chosenCategory = formData.type === 'income' ? categoriesIncome : categories;

    return (
        <div className="bg-gray-200 rounded-xl border border-gray-200 shadow-sm p-4 m-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-800 text-heading">Type</label>
                        <select
                            name="type"
                            required
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className="bg-neutral-secondary-medium border border-gray-300 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                        >
                            <option value="">Select type</option>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 text-heading">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            required
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                            className="bg-neutral-secondary-medium border border-gray-300 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 text-heading">Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="bg-neutral-secondary-medium border border-gray-300 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 text-heading">Label</label>
                        <input
                            type="text"
                            name="optionalLabel"
                            value={formData.optionalLabel}
                            onChange={(e) => setFormData({ ...formData, optionalLabel: e.target.value })}
                            className="bg-neutral-secondary-medium border border-gray-300 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-800 text-heading">Category</label>
                        <select
                            name="category"
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="bg-neutral-secondary-medium border border-gray-300 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                        >
                            <option value="">Select a category</option>
                            {chosenCategory.map((category) => (
                                <option key={category.name} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="bg-gray-400 hover:bg-brand-dark text-white font-bold py-2 px-4 rounded">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}