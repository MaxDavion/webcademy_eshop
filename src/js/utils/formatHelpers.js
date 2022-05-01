
// Форматировать переданное число как денежный формат с разделением тысячных
// Пример: toMoneyFormat(1234567) -> "1 234 567"
export function toMoneyFormat(n) {
    return new Intl.NumberFormat('ru-RU').format(n);
}