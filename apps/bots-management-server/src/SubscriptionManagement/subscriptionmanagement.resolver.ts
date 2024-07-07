import * as graphql from "@nestjs/graphql";
import { CreateSubscriptionInput } from "../subscriptionManagement/CreateSubscriptionInput";
import { Subscription } from "../subscription/base/Subscription";
import { SubscriptionManagementService } from "./subscriptionmanagement.service";

export class SubscriptionManagementResolver {
  constructor(protected readonly service: SubscriptionManagementService) {}

  @graphql.Mutation(() => Subscription)
  async CreateSubscription(
    @graphql.Args()
    args: CreateSubscriptionInput
  ): Promise<Subscription> {
    return this.service.CreateSubscription(args);
  }
}
