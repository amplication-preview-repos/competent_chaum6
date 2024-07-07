import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SubscriptionManagementService } from "./subscriptionmanagement.service";
import { CreateSubscriptionInput } from "../subscriptionManagement/CreateSubscriptionInput";
import { Subscription } from "../subscription/base/Subscription";

@swagger.ApiTags("subscriptionManagements")
@common.Controller("subscriptionManagements")
export class SubscriptionManagementController {
  constructor(protected readonly service: SubscriptionManagementService) {}

  @common.Post("/subscriptions")
  @swagger.ApiOkResponse({
    type: Subscription
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSubscription(
    @common.Body()
    body: CreateSubscriptionInput
  ): Promise<Subscription> {
        return this.service.CreateSubscription(body);
      }
}
