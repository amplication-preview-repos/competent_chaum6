import { User } from "../user/User";

export type SubscriptionPlan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  features: string | null;
  user?: User | null;
};
