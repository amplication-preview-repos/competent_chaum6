import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionPlanUpdateInput = {
  name?: string | null;
  price?: number | null;
  features?: string | null;
  user?: UserWhereUniqueInput | null;
};
