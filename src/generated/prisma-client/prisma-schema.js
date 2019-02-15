module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAssigments {
  count: Int!
}

type AggregateAssignee {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateMeeting {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type Assigments {
  id: ID!
  name: String!
  meeting: Meeting!
  assignee: Assignee!
  assitant: Assignee
}

type AssigmentsConnection {
  pageInfo: PageInfo!
  edges: [AssigmentsEdge]!
  aggregate: AggregateAssigments!
}

input AssigmentsCreateInput {
  name: String!
  meeting: MeetingCreateOneWithoutAssigmentsInput!
  assignee: AssigneeCreateOneWithoutAssigmentsInput!
  assitant: AssigneeCreateOneInput
}

input AssigmentsCreateManyWithoutAssigneeInput {
  create: [AssigmentsCreateWithoutAssigneeInput!]
  connect: [AssigmentsWhereUniqueInput!]
}

input AssigmentsCreateManyWithoutMeetingInput {
  create: [AssigmentsCreateWithoutMeetingInput!]
  connect: [AssigmentsWhereUniqueInput!]
}

input AssigmentsCreateWithoutAssigneeInput {
  name: String!
  meeting: MeetingCreateOneWithoutAssigmentsInput!
  assitant: AssigneeCreateOneInput
}

input AssigmentsCreateWithoutMeetingInput {
  name: String!
  assignee: AssigneeCreateOneWithoutAssigmentsInput!
  assitant: AssigneeCreateOneInput
}

type AssigmentsEdge {
  node: Assigments!
  cursor: String!
}

enum AssigmentsOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AssigmentsPreviousValues {
  id: ID!
  name: String!
}

input AssigmentsScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AssigmentsScalarWhereInput!]
  OR: [AssigmentsScalarWhereInput!]
  NOT: [AssigmentsScalarWhereInput!]
}

type AssigmentsSubscriptionPayload {
  mutation: MutationType!
  node: Assigments
  updatedFields: [String!]
  previousValues: AssigmentsPreviousValues
}

input AssigmentsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AssigmentsWhereInput
  AND: [AssigmentsSubscriptionWhereInput!]
  OR: [AssigmentsSubscriptionWhereInput!]
  NOT: [AssigmentsSubscriptionWhereInput!]
}

input AssigmentsUpdateInput {
  name: String
  meeting: MeetingUpdateOneRequiredWithoutAssigmentsInput
  assignee: AssigneeUpdateOneRequiredWithoutAssigmentsInput
  assitant: AssigneeUpdateOneInput
}

input AssigmentsUpdateManyDataInput {
  name: String
}

input AssigmentsUpdateManyMutationInput {
  name: String
}

input AssigmentsUpdateManyWithoutAssigneeInput {
  create: [AssigmentsCreateWithoutAssigneeInput!]
  delete: [AssigmentsWhereUniqueInput!]
  connect: [AssigmentsWhereUniqueInput!]
  set: [AssigmentsWhereUniqueInput!]
  disconnect: [AssigmentsWhereUniqueInput!]
  update: [AssigmentsUpdateWithWhereUniqueWithoutAssigneeInput!]
  upsert: [AssigmentsUpsertWithWhereUniqueWithoutAssigneeInput!]
  deleteMany: [AssigmentsScalarWhereInput!]
  updateMany: [AssigmentsUpdateManyWithWhereNestedInput!]
}

input AssigmentsUpdateManyWithoutMeetingInput {
  create: [AssigmentsCreateWithoutMeetingInput!]
  delete: [AssigmentsWhereUniqueInput!]
  connect: [AssigmentsWhereUniqueInput!]
  set: [AssigmentsWhereUniqueInput!]
  disconnect: [AssigmentsWhereUniqueInput!]
  update: [AssigmentsUpdateWithWhereUniqueWithoutMeetingInput!]
  upsert: [AssigmentsUpsertWithWhereUniqueWithoutMeetingInput!]
  deleteMany: [AssigmentsScalarWhereInput!]
  updateMany: [AssigmentsUpdateManyWithWhereNestedInput!]
}

input AssigmentsUpdateManyWithWhereNestedInput {
  where: AssigmentsScalarWhereInput!
  data: AssigmentsUpdateManyDataInput!
}

input AssigmentsUpdateWithoutAssigneeDataInput {
  name: String
  meeting: MeetingUpdateOneRequiredWithoutAssigmentsInput
  assitant: AssigneeUpdateOneInput
}

input AssigmentsUpdateWithoutMeetingDataInput {
  name: String
  assignee: AssigneeUpdateOneRequiredWithoutAssigmentsInput
  assitant: AssigneeUpdateOneInput
}

input AssigmentsUpdateWithWhereUniqueWithoutAssigneeInput {
  where: AssigmentsWhereUniqueInput!
  data: AssigmentsUpdateWithoutAssigneeDataInput!
}

input AssigmentsUpdateWithWhereUniqueWithoutMeetingInput {
  where: AssigmentsWhereUniqueInput!
  data: AssigmentsUpdateWithoutMeetingDataInput!
}

input AssigmentsUpsertWithWhereUniqueWithoutAssigneeInput {
  where: AssigmentsWhereUniqueInput!
  update: AssigmentsUpdateWithoutAssigneeDataInput!
  create: AssigmentsCreateWithoutAssigneeInput!
}

input AssigmentsUpsertWithWhereUniqueWithoutMeetingInput {
  where: AssigmentsWhereUniqueInput!
  update: AssigmentsUpdateWithoutMeetingDataInput!
  create: AssigmentsCreateWithoutMeetingInput!
}

input AssigmentsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  meeting: MeetingWhereInput
  assignee: AssigneeWhereInput
  assitant: AssigneeWhereInput
  AND: [AssigmentsWhereInput!]
  OR: [AssigmentsWhereInput!]
  NOT: [AssigmentsWhereInput!]
}

input AssigmentsWhereUniqueInput {
  id: ID
}

type Assignee {
  id: ID!
  Name: String!
  Gender: String!
  assigments(where: AssigmentsWhereInput, orderBy: AssigmentsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assigments!]
}

type AssigneeConnection {
  pageInfo: PageInfo!
  edges: [AssigneeEdge]!
  aggregate: AggregateAssignee!
}

input AssigneeCreateInput {
  Name: String!
  Gender: String!
  assigments: AssigmentsCreateManyWithoutAssigneeInput
}

input AssigneeCreateOneInput {
  create: AssigneeCreateInput
  connect: AssigneeWhereUniqueInput
}

input AssigneeCreateOneWithoutAssigmentsInput {
  create: AssigneeCreateWithoutAssigmentsInput
  connect: AssigneeWhereUniqueInput
}

input AssigneeCreateWithoutAssigmentsInput {
  Name: String!
  Gender: String!
}

type AssigneeEdge {
  node: Assignee!
  cursor: String!
}

enum AssigneeOrderByInput {
  id_ASC
  id_DESC
  Name_ASC
  Name_DESC
  Gender_ASC
  Gender_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AssigneePreviousValues {
  id: ID!
  Name: String!
  Gender: String!
}

type AssigneeSubscriptionPayload {
  mutation: MutationType!
  node: Assignee
  updatedFields: [String!]
  previousValues: AssigneePreviousValues
}

input AssigneeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AssigneeWhereInput
  AND: [AssigneeSubscriptionWhereInput!]
  OR: [AssigneeSubscriptionWhereInput!]
  NOT: [AssigneeSubscriptionWhereInput!]
}

input AssigneeUpdateDataInput {
  Name: String
  Gender: String
  assigments: AssigmentsUpdateManyWithoutAssigneeInput
}

input AssigneeUpdateInput {
  Name: String
  Gender: String
  assigments: AssigmentsUpdateManyWithoutAssigneeInput
}

input AssigneeUpdateManyMutationInput {
  Name: String
  Gender: String
}

input AssigneeUpdateOneInput {
  create: AssigneeCreateInput
  update: AssigneeUpdateDataInput
  upsert: AssigneeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AssigneeWhereUniqueInput
}

input AssigneeUpdateOneRequiredWithoutAssigmentsInput {
  create: AssigneeCreateWithoutAssigmentsInput
  update: AssigneeUpdateWithoutAssigmentsDataInput
  upsert: AssigneeUpsertWithoutAssigmentsInput
  connect: AssigneeWhereUniqueInput
}

input AssigneeUpdateWithoutAssigmentsDataInput {
  Name: String
  Gender: String
}

input AssigneeUpsertNestedInput {
  update: AssigneeUpdateDataInput!
  create: AssigneeCreateInput!
}

input AssigneeUpsertWithoutAssigmentsInput {
  update: AssigneeUpdateWithoutAssigmentsDataInput!
  create: AssigneeCreateWithoutAssigmentsInput!
}

input AssigneeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Name: String
  Name_not: String
  Name_in: [String!]
  Name_not_in: [String!]
  Name_lt: String
  Name_lte: String
  Name_gt: String
  Name_gte: String
  Name_contains: String
  Name_not_contains: String
  Name_starts_with: String
  Name_not_starts_with: String
  Name_ends_with: String
  Name_not_ends_with: String
  Gender: String
  Gender_not: String
  Gender_in: [String!]
  Gender_not_in: [String!]
  Gender_lt: String
  Gender_lte: String
  Gender_gt: String
  Gender_gte: String
  Gender_contains: String
  Gender_not_contains: String
  Gender_starts_with: String
  Gender_not_starts_with: String
  Gender_ends_with: String
  Gender_not_ends_with: String
  assigments_every: AssigmentsWhereInput
  assigments_some: AssigmentsWhereInput
  assigments_none: AssigmentsWhereInput
  AND: [AssigneeWhereInput!]
  OR: [AssigneeWhereInput!]
  NOT: [AssigneeWhereInput!]
}

input AssigneeWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Link {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
}

input LinkCreateOneWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkCreateWithoutPostedByInput {
  description: String!
  url: String!
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateWithoutVotesInput {
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
}

input LinkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkScalarWhereInput!]
  OR: [LinkScalarWhereInput!]
  NOT: [LinkScalarWhereInput!]
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateManyDataInput {
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  description: String
  url: String
}

input LinkUpdateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  delete: [LinkWhereUniqueInput!]
  connect: [LinkWhereUniqueInput!]
  set: [LinkWhereUniqueInput!]
  disconnect: [LinkWhereUniqueInput!]
  update: [LinkUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [LinkUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [LinkScalarWhereInput!]
  updateMany: [LinkUpdateManyWithWhereNestedInput!]
}

input LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput!
  data: LinkUpdateManyDataInput!
}

input LinkUpdateOneRequiredWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  update: LinkUpdateWithoutVotesDataInput
  upsert: LinkUpsertWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkUpdateWithoutPostedByDataInput {
  description: String
  url: String
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateWithoutVotesDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
}

input LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  data: LinkUpdateWithoutPostedByDataInput!
}

input LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput!
  create: LinkCreateWithoutVotesInput!
}

input LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  update: LinkUpdateWithoutPostedByDataInput!
  create: LinkCreateWithoutPostedByInput!
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Meeting {
  id: ID!
  createdAt: DateTime!
  from: DateTime!
  to: DateTime!
  assigments(where: AssigmentsWhereInput, orderBy: AssigmentsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assigments!]
}

type MeetingConnection {
  pageInfo: PageInfo!
  edges: [MeetingEdge]!
  aggregate: AggregateMeeting!
}

input MeetingCreateInput {
  from: DateTime!
  to: DateTime!
  assigments: AssigmentsCreateManyWithoutMeetingInput
}

input MeetingCreateOneWithoutAssigmentsInput {
  create: MeetingCreateWithoutAssigmentsInput
  connect: MeetingWhereUniqueInput
}

input MeetingCreateWithoutAssigmentsInput {
  from: DateTime!
  to: DateTime!
}

type MeetingEdge {
  node: Meeting!
  cursor: String!
}

enum MeetingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MeetingPreviousValues {
  id: ID!
  createdAt: DateTime!
  from: DateTime!
  to: DateTime!
}

type MeetingSubscriptionPayload {
  mutation: MutationType!
  node: Meeting
  updatedFields: [String!]
  previousValues: MeetingPreviousValues
}

input MeetingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MeetingWhereInput
  AND: [MeetingSubscriptionWhereInput!]
  OR: [MeetingSubscriptionWhereInput!]
  NOT: [MeetingSubscriptionWhereInput!]
}

input MeetingUpdateInput {
  from: DateTime
  to: DateTime
  assigments: AssigmentsUpdateManyWithoutMeetingInput
}

input MeetingUpdateManyMutationInput {
  from: DateTime
  to: DateTime
}

input MeetingUpdateOneRequiredWithoutAssigmentsInput {
  create: MeetingCreateWithoutAssigmentsInput
  update: MeetingUpdateWithoutAssigmentsDataInput
  upsert: MeetingUpsertWithoutAssigmentsInput
  connect: MeetingWhereUniqueInput
}

input MeetingUpdateWithoutAssigmentsDataInput {
  from: DateTime
  to: DateTime
}

input MeetingUpsertWithoutAssigmentsInput {
  update: MeetingUpdateWithoutAssigmentsDataInput!
  create: MeetingCreateWithoutAssigmentsInput!
}

input MeetingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  from: DateTime
  from_not: DateTime
  from_in: [DateTime!]
  from_not_in: [DateTime!]
  from_lt: DateTime
  from_lte: DateTime
  from_gt: DateTime
  from_gte: DateTime
  to: DateTime
  to_not: DateTime
  to_in: [DateTime!]
  to_not_in: [DateTime!]
  to_lt: DateTime
  to_lte: DateTime
  to_gt: DateTime
  to_gte: DateTime
  assigments_every: AssigmentsWhereInput
  assigments_some: AssigmentsWhereInput
  assigments_none: AssigmentsWhereInput
  AND: [MeetingWhereInput!]
  OR: [MeetingWhereInput!]
  NOT: [MeetingWhereInput!]
}

input MeetingWhereUniqueInput {
  id: ID
}

type Mutation {
  createAssigments(data: AssigmentsCreateInput!): Assigments!
  updateAssigments(data: AssigmentsUpdateInput!, where: AssigmentsWhereUniqueInput!): Assigments
  updateManyAssigmentses(data: AssigmentsUpdateManyMutationInput!, where: AssigmentsWhereInput): BatchPayload!
  upsertAssigments(where: AssigmentsWhereUniqueInput!, create: AssigmentsCreateInput!, update: AssigmentsUpdateInput!): Assigments!
  deleteAssigments(where: AssigmentsWhereUniqueInput!): Assigments
  deleteManyAssigmentses(where: AssigmentsWhereInput): BatchPayload!
  createAssignee(data: AssigneeCreateInput!): Assignee!
  updateAssignee(data: AssigneeUpdateInput!, where: AssigneeWhereUniqueInput!): Assignee
  updateManyAssignees(data: AssigneeUpdateManyMutationInput!, where: AssigneeWhereInput): BatchPayload!
  upsertAssignee(where: AssigneeWhereUniqueInput!, create: AssigneeCreateInput!, update: AssigneeUpdateInput!): Assignee!
  deleteAssignee(where: AssigneeWhereUniqueInput!): Assignee
  deleteManyAssignees(where: AssigneeWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createMeeting(data: MeetingCreateInput!): Meeting!
  updateMeeting(data: MeetingUpdateInput!, where: MeetingWhereUniqueInput!): Meeting
  updateManyMeetings(data: MeetingUpdateManyMutationInput!, where: MeetingWhereInput): BatchPayload!
  upsertMeeting(where: MeetingWhereUniqueInput!, create: MeetingCreateInput!, update: MeetingUpdateInput!): Meeting!
  deleteMeeting(where: MeetingWhereUniqueInput!): Meeting
  deleteManyMeetings(where: MeetingWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  assigments(where: AssigmentsWhereUniqueInput!): Assigments
  assigmentses(where: AssigmentsWhereInput, orderBy: AssigmentsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assigments]!
  assigmentsesConnection(where: AssigmentsWhereInput, orderBy: AssigmentsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AssigmentsConnection!
  assignee(where: AssigneeWhereUniqueInput!): Assignee
  assignees(where: AssigneeWhereInput, orderBy: AssigneeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assignee]!
  assigneesConnection(where: AssigneeWhereInput, orderBy: AssigneeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AssigneeConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  meeting(where: MeetingWhereUniqueInput!): Meeting
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting]!
  meetingsConnection(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  assigments(where: AssigmentsSubscriptionWhereInput): AssigmentsSubscriptionPayload
  assignee(where: AssigneeSubscriptionWhereInput): AssigneeSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  meeting(where: MeetingSubscriptionWhereInput): MeetingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLinksInput {
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  update: UserUpdateWithoutLinksDataInput
  upsert: UserUpsertWithoutLinksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLinksDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
}

input UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput!
  create: UserCreateWithoutLinksInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  links_every: LinkWhereInput
  links_some: LinkWhereInput
  links_none: LinkWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  link: Link!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  link: LinkCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutLinkInput {
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  link: LinkCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutLinkInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutLinkInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutLinkDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutLinkDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutLinkDataInput!
  create: VoteCreateWithoutLinkInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  link: LinkWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    