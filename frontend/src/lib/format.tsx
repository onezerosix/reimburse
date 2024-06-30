export function formatAccountID(account_id: number): string {
    // TODO: handle unexpected number length
    return "*".repeat(5) + account_id.toString().slice(-4);
}

export function formatCurrency(amount: number): string {
    const formater = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formater.format(amount);
}
