/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { SubscriptionPlanCreateNestedManyWithoutUsersInput } from "./SubscriptionPlanCreateNestedManyWithoutUsersInput";
import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { BotCreateNestedManyWithoutUsersInput } from "./BotCreateNestedManyWithoutUsersInput";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SubscriptionPlanCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  subscriptionPlans?: SubscriptionPlanCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => BotCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BotCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BotCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bots?: BotCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SubscriptionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
