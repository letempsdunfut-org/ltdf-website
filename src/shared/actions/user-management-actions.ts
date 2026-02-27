"use server";

import type { Collection } from "mongodb";
import { ObjectId } from "mongodb";
import { getCollection } from "@/shared/actions/utils";
import {
 User, UserBase, UserEntity
} from "@/types/users";



async function getUserCollection(): Promise<Collection<UserBase>> {
  return getCollection<UserBase>("users");
}

export async function getUsers(): Promise<User[]> {
  const collection = await getUserCollection();
  return collection.find().map((doc: UserEntity) => {
    const { _id, ...user } = doc;
    return {
      ...user,
      id: _id.toHexString(),
    } satisfies User;
  }).toArray();
}

export async function retrieveUser(email: string): Promise<User | null> {
  const collection = await getUserCollection();
  const dbUser = await collection.findOne({ email: new RegExp(`^${email}$`, "i") });

  if (!dbUser) {
    return null;
  }

  return {
    ...dbUser,
    _id: undefined,
    id: dbUser._id.toHexString(),
  } as User;

}

export async function addUser(user: UserBase): Promise<User> {
  const collection = await getUserCollection();
  const insertResult = await collection.insertOne({ ...user });

  if (insertResult.insertedId) {
    return {
      ...user,
      id: insertResult.insertedId.toHexString(),
    } satisfies User;
  }

  return Promise.reject("Error inserting user");
}

export async function updateUser(user: User): Promise<User> {
  const collection = await getUserCollection();
  const updateResult = await collection.updateOne(
    { _id: ObjectId.createFromHexString(user.id) },
    { $set: user }
  );

  if (updateResult.acknowledged) {
    return user;
  }

  return Promise.reject("Error updating user");
}

export async function deleteUser(userId: string): Promise<void> {
  const collection = await getUserCollection();
  await collection.deleteOne({ _id: ObjectId.createFromHexString(userId) })
}
