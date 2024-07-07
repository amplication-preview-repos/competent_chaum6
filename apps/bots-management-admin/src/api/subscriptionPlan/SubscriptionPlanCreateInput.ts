import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionPlanCreateInput = {
  name?: string | null;
  price?: number | null;
  features?: string | null;
  user?: UserWhereUniqueInput | null;
};
