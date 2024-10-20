"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { Tag } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTag(formData: FormData) {
  const session = await auth();
  const tagName = formData.get("tagName") as string;
  try {
    const userId = session?.user?.id as string;
    const exist = await prisma.tag.findFirst({
      where: {
        name: tagName,
        userId: userId,
      },
    });

    if (exist) throw new Error("Tag with same name already exist");
    await prisma.tag.create({
      data: {
        name: tagName,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
}

export async function updateTag(formData: FormData, tag: Tag) {
  const tagName = formData.get("tagName") as string;

  await prisma.tag.update({
    data: {
      name: tagName,
    },
    where: {
      id: tag.id,
    },
  });
  revalidatePath("/");
}

export async function   DeleteTag(tag: Tag) {
  await prisma.tag.delete({
    where: {
      id: tag.id,
    },
  });
  revalidatePath("/");
}


