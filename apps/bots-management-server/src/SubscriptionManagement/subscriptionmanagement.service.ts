import { Injectable } from "@nestjs/common";
import { CreateSubscriptionInput } from "../subscriptionManagement/CreateSubscriptionInput";
import { Subscription } from "../subscription/base/Subscription";

@Injectable()
export class SubscriptionManagementService {
  constructor() {}
  async CreateSubscription(args: CreateSubscriptionInput): Promise<Subscription> {
    throw new Error("Not implemented");
  }
}
