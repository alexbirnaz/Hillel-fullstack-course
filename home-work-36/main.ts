console.log("#19. TypeScript homework example file");

// #1 - sumArray
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([])); // 0

// #2 - createUser
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(name: string, age: number, isActive: boolean = true): User {
  return { name, age, isActive };
}

const newUser = createUser("Anna", 25, true);
console.log(newUser);

// #3 - getOrderStatus
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

function getOrderStatus(status: OrderStatus): string {
  if (status === OrderStatus.Pending) {
    return "Order is pending";
  }
  if (status === OrderStatus.Shipped) {
    return "Order has been shipped";
  }
  if (status === OrderStatus.Delivered) {
    return "Order delivered";
  }
  if (status === OrderStatus.Cancelled) {
    return "Order cancelled";
  }
  throw new Error("Unknown order status");
}

console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));

export { sumArray, createUser, OrderStatus, getOrderStatus };
