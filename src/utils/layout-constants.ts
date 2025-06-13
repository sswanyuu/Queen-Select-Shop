// Checkout layout dimensions
export const CHECKOUT_LAYOUT = {
  container: {
    width: '90%',
    gap: '12px',
  },
  columns: {
    image: '12%',
    description: '48%',
    price: '14%',
    quantity: '14%',
    remove: '12%',
  },
  mobile: {
    gap: '16px',
    imageWidth: '80px',
  },
} as const

// Extract column widths as an array for easier iteration
export const CHECKOUT_COLUMN_WIDTHS = [
  CHECKOUT_LAYOUT.columns.image,
  CHECKOUT_LAYOUT.columns.description,
  CHECKOUT_LAYOUT.columns.price,
  CHECKOUT_LAYOUT.columns.quantity,
  CHECKOUT_LAYOUT.columns.remove,
] as const
