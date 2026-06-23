import { useState, useEffect } from 'react'
import type { Transaction } from '../types/transaction'

const seedTransactions: Transaction[] = [
    { id: 1, category: 'Food', amount: 120, date: '2026-06-01', type: 'expense', optionalLabel: 'Groceries' },
    { id: 2, category: 'Tutoring money', amount: 80, date: '2026-06-21', type: 'income', optionalLabel: 'Math tutoring' }
]

export function useTransaction() {
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        setTimeout(() => {
            const storedTransactions = localStorage.getItem('transactions');

            if (storedTransactions) {
                setTransactions(JSON.parse(storedTransactions));
            }
            else {
                setTransactions(seedTransactions);
            }
            setLoading(false);
        }, 600)
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('transactions', JSON.stringify(transactions))
        }

    }, [transactions, loading]);

    const spent = transactions.filter(transaction => transaction.type=== 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0)

    const income = transactions.filter(transaction => transaction.type=== 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    
    const handleSubmit = (transaction: Transaction) => {
        setTransactions(currentTransactions => [
            ...currentTransactions,
            transaction
        ])
    }

    return { transactions, spent, handleSubmit, income, loading}
}
